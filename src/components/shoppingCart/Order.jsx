const SelectOrder = ({ handleOrderChange }) => {
  return (
    <div className="mb-6 w-24 ml-5">
      <h6 className="text-lg font-semibold mb-2">Order by:</h6>
      <div className="relative">
        <select
          className="block w-full px-4 py-2 pr-8 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          onChange={handleOrderChange}
        >
          <option value="name a">A-Z</option>
          <option value="name d">Z-A</option>
          <option value="rating a">Highest score</option>
          <option value="rating d">Low score</option>
          <option value="release a">Most recent</option>
          <option value="release d">Most older</option>
          <option value="price d">Higher price</option>
          <option value="price a">Lower price</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 5.293a1 1 0 011.414 0L10 6.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectOrder;
