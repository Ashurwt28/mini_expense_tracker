const express = require("express");
const cors = require("cors");

const initializeDB = require("./database/db");

const expenseRoutes = require("./routes/expenseRoutes");

const { setDB } = require("./controllers/expenseController");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/expenses", expenseRoutes);

app.get("/", (req, res) => {
  res.send("Expense Tracker Backend Running");
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  const db = await initializeDB();

  setDB(db);

  app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
  });
}

startServer();