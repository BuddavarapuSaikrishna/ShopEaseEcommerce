import FilterGroup from "./FilterGroup";

const FilterSidebar = ({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}) => {
  return (
    <aside className="w-full rounded-xl border border-gray-200 bg-white p-5 lg:w-64 lg:shrink-0">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">Filters</h2>

        <button
          type="button"
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          Clear all
        </button>
      </div>

      {/* Price Range */}
      <FilterGroup title="Price Range">
        {/* Minimum Price */}
        <div>
          <label className="mb-2 block text-sm text-gray-600">
            Minimum: ₹{minPrice?.toLocaleString("en-IN")}
          </label>

          <input
            type="range"
            min={100}
            max={maxPrice}
            step={100}
            value={minPrice}
            onChange={(event) => onMinPriceChange(Number(event.target.value))}
            className="w-full accent-blue-600"
          />
        </div>

        {/* Maximum Price */}
        <div>
          <label className="mb-2 block text-sm text-gray-600">
            Maximum: ₹{maxPrice?.toLocaleString("en-IN")}
          </label>

          <input
            type="range"
            min={minPrice}
            max={200000}
            step={100}
            value={maxPrice}
            onChange={(event) => onMaxPriceChange(Number(event.target.value))}
            className="w-full accent-blue-600"
          />
        </div>

        <div className="flex justify-between text-sm text-gray-500">
          <span>₹{minPrice?.toLocaleString("en-IN")}</span>
          <span>₹{maxPrice?.toLocaleString("en-IN")}</span>
        </div>
      </FilterGroup>

      {/* Brand */}
      <FilterGroup title="Brand">
        {["Nike", "Adidas", "Puma", "Levi's"].map((brand) => (
          <label
            key={brand}
            className="flex items-center gap-3 text-sm text-gray-600"
          >
            <input type="checkbox" className="size-4 accent-blue-600" />
            {brand}
          </label>
        ))}
      </FilterGroup>

      {/* Colour */}
      <FilterGroup title="Colour">
        {["Black", "White", "Blue", "Red"].map((color) => (
          <label
            key={color}
            className="flex items-center gap-3 text-sm text-gray-600"
          >
            <input type="checkbox" className="size-4 accent-blue-600" />
            {color}
          </label>
        ))}
      </FilterGroup>

      {/* Customer Rating */}
      <FilterGroup title="Customer Rating">
        {[4, 3, 2].map((rating) => (
          <label
            key={rating}
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <input
              type="radio"
              name="customer-rating"
              className="size-4 accent-blue-600"
            />

            <span>{rating}+ stars ★</span>
          </label>
        ))}
      </FilterGroup>
    </aside>
  );
};

export default FilterSidebar;
