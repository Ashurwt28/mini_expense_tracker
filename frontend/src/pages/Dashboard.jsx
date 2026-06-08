import { useState } from "react";

import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";
import Filter from "../components/Filter";
import SummaryCards from "../components/SummaryCards";

function Dashboard() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  return (
    <div className="min-h-screen bg-slate-100">

      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-5">

          <h1 className="text-3xl font-bold text-blue-600">
            Expense Tracker
          </h1>

          <p className="text-slate-500 mt-1">
            Track and manage your expenses efficiently
          </p>

        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">

        <SummaryCards />

        <div className="mt-8">
          <ExpenseForm />
        </div>

        <div className="mt-8">
          <Filter
            selectedCategory={selectedCategory}
            setSelectedCategory={
              setSelectedCategory
            }
          />
        </div>

        <div className="mt-8">
          <ExpenseTable
            selectedCategory={selectedCategory}
          />
        </div>

      </main>

    </div>
  );
}

export default Dashboard;