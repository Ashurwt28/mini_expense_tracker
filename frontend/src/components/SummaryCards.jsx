import { useEffect, useState } from "react";
import api from "../api";

function SummaryCards() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await api.get("/expenses");
        setExpenses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExpenses();
  }, []);

  const totalAmount = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount || 0),
    0
  );

  const expenseCount = expenses.length;

  const categoryCounts = expenses.reduce((counts, expense) => {
    const category = expense.category || "Other";
    counts[category] = (counts[category] || 0) + 1;
    return counts;
  }, {});

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-slate-700">
          Total Spent
        </h2>
        <p className="mt-4 text-3xl font-bold text-blue-600">
          ₹{totalAmount.toFixed(2)}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-slate-700">
          Expense Entries
        </h2>
        <p className="mt-4 text-3xl font-bold text-blue-600">
          {expenseCount}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-slate-700">
          Top Category
        </h2>
        <p className="mt-4 text-2xl font-bold text-blue-600">
          {Object.keys(categoryCounts).length
            ? Object.entries(categoryCounts).sort(
                (a, b) => b[1] - a[1]
              )[0][0]
            : "None"}
        </p>
      </div>
    </div>
  );
}

export default SummaryCards;
