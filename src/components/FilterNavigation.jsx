function FilterNavigation({ 
  filterOpenNow, 
  filterPrice, 
  filterCategory, 
  onOpenNowChange, 
  onPriceChange, 
  onCategoryChange, 
  onClearFilters 
}) {
  return (
    <div className="border-t border-b py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <p>Filter By:</p>

        <div className="border border-gray-300 rounded-md py-2 px-6 text-gray-700 focus:ring-blue-500 focus:border-blue-500">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="filter"
              checked={filterOpenNow}
              onChange={onOpenNowChange}
              className="w-4 h-4 text-blue-500 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-gray-700">Open Now</span>
          </label>
        </div>

        <div>
          <select 
            value={filterPrice} 
            onChange={onPriceChange}
            className="border border-gray-300 rounded-md py-2 px-6 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Price</option>
            <option value="$">$ - Low</option>
            <option value="$$">$$ - Medium</option>
            <option value="$$$">$$$ - High</option>
          </select>
        </div>

        <div>
          <select 
            value={filterCategory} 
            onChange={onCategoryChange}
            className="border border-gray-300 rounded-md py-2 px-6 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Categories</option>
            <option value="italian">Italian</option>
            <option value="american">American</option>
            <option value="indian">Indian</option>
          </select>
        </div>
      </div>

      <button 
        onClick={onClearFilters} 
        className="border border-gray-300 text-gray-700 rounded-md px-4 py-2 hover:bg-gray-100"
      >
        Clear All
      </button>
    </div>
  );
}

export default FilterNavigation;
