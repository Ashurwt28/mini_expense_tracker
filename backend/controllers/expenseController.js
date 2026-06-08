let db;

const setDB = (database) => {
  db = database;
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await db.all(
      "SELECT * FROM expenses ORDER BY id DESC"
    );

    res.json(expenses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addExpense = async (req, res) => {
  try {
    const { amount, category, date, note } = req.body;

    const result = await db.run(
      `
      INSERT INTO expenses
      (amount, category, date, note)
      VALUES (?, ?, ?, ?)
      `,
      [amount, category, date, note]
    );

    const newExpense = await db.get(
      "SELECT * FROM expenses WHERE id = ?",
      [result.lastID]
    );

    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      amount,
      category,
      date,
      note,
    } = req.body;

    await db.run(
      `
      UPDATE expenses
      SET amount = ?,
          category = ?,
          date = ?,
          note = ?
      WHERE id = ?
      `,
      [amount, category, date, note, id]
    );

    const updatedExpense = await db.get(
      "SELECT * FROM expenses WHERE id = ?",
      [id]
    );

    res.json(updatedExpense);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    await db.run(
      "DELETE FROM expenses WHERE id = ?",
      [id]
    );

    res.json({
      success: true,
      message: "Expense Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  setDB,
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
};