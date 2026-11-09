
const ProductToolbar = ({
  sortBy,
  onSortChange,
  productCount,
  onFilterClick,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Product Count */}
      <p className="text-sm text-gray-500">
        Showing{" "}
        <span className="font-semibold text-gray-900">
          {productCount}
        </span>{" "}
        products
      </p>

      <div className="flex flex-wrap items-center gap-3">
        {/* Mobile Filter Button */}
        <button
          type="button"
          onClick={onFilterClick}
          className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600 lg:hidden"
        >
          <span>☰</span>
          Filters
        </button>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="sort-products"
            className="text-sm text-gray-600"
          >
            Sort by:
          </label>

          <select
            id="sort-products"
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-500"
          >
            <option value="featured">Featured</option>
            <option value="popular">Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductToolbar;
