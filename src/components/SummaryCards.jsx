import { useEffect, useState } from "react";
import api from "../api";

function SummaryCards() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await api.get("/expenses");

      if (Array.isArray(response.data)) {
        setExpenses(response.data);
      } else {
        setExpenses([]);
      }
    } catch (error) {
      console.log(error);
      setExpenses([]);
    }
  };

  const totalSpent = expenses.reduce(
    (total, expense) => total + Number(expense.amount || 0),
    0
  );

  const highestExpense =
    expenses.length > 0
      ? Math.max(
          ...expenses.map((expense) =>
            Number(expense.amount || 0)
          )
        )
      : 0;

  const transactions = expenses.length;

  return (
    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <p className="text-slate-500">
          Total Spent
        </p>

        <h2 className="text-3xl font-bold mt-2 text-blue-600">
          ₹{totalSpent}
        </h2>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <p className="text-slate-500">
          Highest Expense
        </p>

        <h2 className="text-3xl font-bold mt-2 text-red-500">
          ₹{highestExpense}
        </h2>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <p className="text-slate-500">
          Transactions
        </p>

        <h2 className="text-3xl font-bold mt-2 text-green-500">
          {transactions}
        </h2>
      </div>

    </div>
  );
}

export default SummaryCards;