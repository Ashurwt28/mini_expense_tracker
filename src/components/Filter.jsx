function Filter({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">
        Filter Expenses
      </h2>

      <select
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(e.target.value)
        }
        className="w-full border border-slate-300 rounded-lg p-3"
      >
        <option value="All">
          All Categories
        </option>

        <option value="Food">
          Food
        </option>

        <option value="Transport">
          Transport
        </option>

        <option value="Bills">
          Bills
        </option>

        <option value="Entertainment">
          Entertainment
        </option>

        <option value="Other">
          Other
        </option>
      </select>
    </div>
  );
}

export default Filter;