import { useState } from "react";
import api from "../api";

function ExpenseForm() {
  const [expense, setExpense] = useState({
    amount: "",
    category: "",
    date: "",
    note: "",
  });

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/expenses", expense);

      alert("Expense Added Successfully");

      setExpense({
        amount: "",
        category: "",
        date: "",
        note: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed To Add Expense");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">
        Add Expense
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="w-full border border-slate-300 rounded-lg p-3"
          required
        />

        <select
          name="category"
          value={expense.category}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg p-3"
          required
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg p-3"
          required
        />

        <textarea
          rows="3"
          name="note"
          value={expense.note}
          onChange={handleChange}
          placeholder="Note"
          className="w-full border border-slate-300 rounded-lg p-3"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Add Expense
        </button>

      </form>
    </div>
  );
}

export default ExpenseForm;