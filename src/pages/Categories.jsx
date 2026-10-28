import { useState } from "react";

import products from "../data/products";

import CategoryBanner from "../components/categories/CategoryBanner";
import SubCategoryList from "../components/categories/SubCategoryList";
import FilterSidebar from "../components/categories/FilterSidebar";
import ProductToolbar from "../components/categories/ProductToolbar";
import ProductGrid from "../components/products/ProductGrid";
import ActiveFilters from "../components/categories/ActiveFilters";

const DEFAULT_MIN_PRICE = 100;
const DEFAULT_MAX_PRICE = 200000;

const Categories = () => {
  const [sortBy, setSortBy] = useState("featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [minPrice, setMinPrice] = useState(DEFAULT_MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX_PRICE);

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);

  // Price handlers
  const handleMinPriceChange = (value) => {
    const nextMin = Math.min(value, maxPrice);
    setMinPrice(nextMin);
  };

  const handleMaxPriceChange = (value) => {
    const nextMax = Math.max(value, minPrice);
    setMaxPrice(nextMax);
  };

  // Brand handlers
  const handleRemoveBrand = (brand) => {
    setSelectedBrands((prev) => prev.filter((item) => item !== brand));
  };

  // Colour handlers
  const handleRemoveColor = (color) => {
    setSelectedColors((prev) => prev.filter((item) => item !== color));
  };

  // Rating handler
  const handleRemoveRating = () => {
    setSelectedRating(null);
  };

  // Clear all filters
  const handleClearFilters = () => {
    setMinPrice(DEFAULT_MIN_PRICE);
    setMaxPrice(DEFAULT_MAX_PRICE);
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedRating(null);
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    const price = Number(product.price);

    const matchesPrice =
      Number.isFinite(price) && price >= minPrice && price <= maxPrice;

    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);

    const matchesColor =
      selectedColors.length === 0 ||
      selectedColors.some((color) =>
        Array.isArray(product.colors)
          ? product.colors.includes(color)
          : product.color === color,
      );

    const matchesRating =
      selectedRating === null || Number(product.rating) >= selectedRating;

    return matchesPrice && matchesBrand && matchesColor && matchesRating;
  });

  // Sort filtered products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "featured":
        return Number(b.featured) - Number(a.featured);

      case "popular":
        return (Number(b.reviews) || 0) - (Number(a.reviews) || 0);

      case "price-low":
        return Number(a.price) - Number(b.price);

      case "price-high":
        return Number(b.price) - Number(a.price);

      case "rating":
        return (Number(b.rating) || 0) - (Number(a.rating) || 0);

      case "newest":
        return String(b.createdAt || "").localeCompare(
          String(a.createdAt || ""),
        );

      default:
        return 0;
    }
  });

  const filterSidebarProps = {
    minPrice,
    maxPrice,
    onMinPriceChange: handleMinPriceChange,
    onMaxPriceChange: handleMaxPriceChange,
    selectedBrands,
    setSelectedBrands,
    selectedColors,
    setSelectedColors,
    selectedRating,
    setSelectedRating,
  };

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-6 sm:px-6 lg:px-8">
      <CategoryBanner />

      <SubCategoryList />

      <div className="flex items-start gap-6">
        {/* Desktop Filter Sidebar */}
        <div className="hidden lg:block">
          <FilterSidebar {...filterSidebarProps} />
        </div>

        {/* Toolbar and Products */}
        <section className="min-w-0 w-full flex-1 space-y-5">
          <ProductToolbar
            sortBy={sortBy}
            onSortChange={setSortBy}
            productCount={sortedProducts.length}
            onFilterClick={() => setIsFilterOpen(true)}
          />

          <ActiveFilters
            minPrice={minPrice}
            maxPrice={maxPrice}
            onMinPriceChange={handleMinPriceChange}
            onMaxPriceChange={handleMaxPriceChange}
            selectedBrands={selectedBrands}
            selectedColors={selectedColors}
            selectedRating={selectedRating}
            onRemoveBrand={handleRemoveBrand}
            onRemoveColor={handleRemoveColor}
            onRemoveRating={handleRemoveRating}
            onClearFilters={handleClearFilters}
          />

          <ProductGrid products={sortedProducts} />
        </section>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setIsFilterOpen(false)}
            className="absolute inset-0 h-full w-full bg-black/40"
          />

          <aside className="absolute inset-y-0 left-0 w-[85%] max-w-sm overflow-y-auto bg-white p-5 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Filters</h2>

              <button
                type="button"
                aria-label="Close filter panel"
                onClick={() => setIsFilterOpen(false)}
                className="rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <FilterSidebar {...filterSidebarProps} />

            <button
              type="button"
              onClick={() => setIsFilterOpen(false)}
              className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
            >
              Show {sortedProducts.length} products
            </button>
          </aside>
        </div>
      )}
    </main>
  );
};

export default Categories;
