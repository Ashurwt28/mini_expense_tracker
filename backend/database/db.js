const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

async function initializeDB() {
  const db = await open({
    filename: "./expenses.db",
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      amount REAL NOT NULL,
      category TEXT NOT NULL,
      date TEXT NOT NULL,
      note TEXT
    )
  `);

  return db;
}

module.exports = initializeDB;