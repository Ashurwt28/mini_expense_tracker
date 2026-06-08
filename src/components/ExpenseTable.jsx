import { useEffect, useState } from "react";
import api from "../api";

function ExpenseTable({ selectedCategory }) {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const response = await api.get("/expenses");
      setExpenses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await api.delete(`/expenses/${id}`);
      fetchExpenses();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter(
          (expense) => expense.category === selectedCategory
        );

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">
        Expenses
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Amount</th>
            <th className="text-left p-2">Category</th>
            <th className="text-left p-2">Date</th>
            <th className="text-left p-2">Note</th>
            <th className="text-left p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredExpenses.map((expense) => (
            <tr key={expense.id} className="border-b">
              <td className="p-2">₹{expense.amount}</td>
              <td className="p-2">{expense.category}</td>
              <td className="p-2">{expense.date}</td>
              <td className="p-2">{expense.note}</td>

              <td className="p-2">
                <button
                  onClick={() => deleteExpense(expense.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {filteredExpenses.length === 0 && (
            <tr>
              <td
                colSpan="5"
                className="text-center p-4 text-slate-500"
              >
                No Expenses Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;