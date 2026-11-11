const ProductCard = ({ product }) => {
  const isOutOfStock = product.stock === 0;
  const hasDiscount =
    product.discount && product.originalPrice;

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      {/* Product Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover"
        />

        {/* NEW Badge */}
        {product.isNew && (
          <span className="absolute right-2 top-2 rounded bg-green-500 px-2 py-1 text-sm font-medium text-white">
            NEW
          </span>
        )}

        {/* Discount Badge */}
        {hasDiscount && (
          <span className="absolute left-2 top-2 rounded bg-red-500 px-2 py-1 text-sm text-white">
            {product.discount}% OFF
          </span>
        )}

        {/* Out of Stock */}
        {isOutOfStock && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/50 text-lg font-semibold text-white">
            Out of Stock
          </span>
        )}
      </div>

      {/* Product Information */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {product.name}
        </h3>

        {/* Rating */}
        <p className="mt-1 text-sm text-gray-600">
          ⭐ {product.rating} ({product.reviews})
        </p>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            ₹{product.price}
          </span>

          {hasDiscount && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          disabled={isOutOfStock}
          className="mt-4 w-full rounded-md bg-black px-4 py-2 text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;