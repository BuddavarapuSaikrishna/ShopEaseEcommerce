const ActiveFilters = ({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  selectedBrands = [],
  selectedColors = [],
  selectedRating,
  onRemoveBrand,
  onRemoveColor,
  onRemoveRating,
  onClearFilters,
}) => {
  const hasPriceFilter = minPrice > 500 || maxPrice < 200000;

  const hasActiveFilters =
    hasPriceFilter ||
    selectedBrands.length > 0 ||
    selectedColors.length > 0 ||
    selectedRating != null;

  if (!hasActiveFilters) return null;

  return (
    <div className="mb-5 flex flex-wrap items-center gap-2">
      <span className="mr-1 text-sm font-semibold text-gray-700">
        Active Filters:
      </span>

      {hasPriceFilter && (
        <div className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm text-blue-700">
          <span>
            ₹{minPrice.toLocaleString("en-IN")} ₹
            {maxPrice.toLocaleString("en-IN")}
          </span>

          <button
            type="button"
            onClick={() => {
              onMinPriceChange(500);
              onMaxPriceChange(200000);
            }}
            aria-label="Remove price filter"
            className="font-bold hover:text-blue-900"
          >
            ×
          </button>
        </div>
      )}

      {selectedBrands.map((brand) => (
        <div
          key={brand}
          className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700"
        >
          <span>{brand}</span>
          <button
            type="button"
            onClick={() => onRemoveBrand(brand)}
            aria-label={`Remove ${brand} filter`}
            className="font-bold hover:text-gray-900"
          >
            ×
          </button>
        </div>
      ))}

      {selectedColors.map((color) => (
        <div
          key={color}
          className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700"
        >
          <span>{color}</span>
          <button
            type="button"
            onClick={() => onRemoveColor(color)}
            aria-label={`Remove ${color} filter`}
            className="font-bold hover:text-gray-900"
          >
            ×
          </button>
        </div>
      ))}

      {selectedRating != null && (
        <div className="flex items-center gap-2 rounded-full bg-yellow-50 px-3 py-1.5 text-sm text-yellow-800">
          <span>{selectedRating}+ stars ★</span>
          <button
            type="button"
            onClick={onRemoveRating}
            aria-label="Remove rating filter"
            className="font-bold"
          >
            ×
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={onClearFilters}
        className="text-sm font-medium text-red-600 hover:text-red-800"
      >
        Clear all
      </button>
    </div>
  );
};

export default ActiveFilters;
