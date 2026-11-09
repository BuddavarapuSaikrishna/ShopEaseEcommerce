import { useState } from "react";

const ProductActions = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const isOutOfStock = product.stock === 0;

  const handleAddToCart = () => {
    if (isOutOfStock || !selectedSize) return;

    console.log("Add to cart:", {
      productId: product.id,
      size: selectedSize,
      quantity,
    });
  };

  const handleBuyNow = () => {
    if (isOutOfStock || !selectedSize) return;

    console.log("Buy now:", {
      productId: product.id,
      size: selectedSize,
      quantity,
    });
  };

  return (
    <>
      {/* Stock */}
      <div className="mt-4">
        {isOutOfStock ? (
          <span className="font-semibold text-red-600">
            Out of Stock
          </span>
        ) : (
          <span className="font-semibold text-green-600">
            In Stock
          </span>
        )}
      </div>

      {/* Size */}
      {!isOutOfStock && (
        <div className="mt-6">
          <h2 className="mb-3 font-semibold">
            Select Size
          </h2>

          <div className="flex gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`rounded-md border px-4 py-2 transition ${
                  selectedSize === size
                    ? "border-black bg-black text-white"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      {!isOutOfStock && (
        <div className="mt-6">
          <h2 className="mb-3 font-semibold">
            Quantity
          </h2>

          <div className="flex w-fit items-center rounded-md border">
            <button
              onClick={() =>
                setQuantity((prev) =>
                  Math.max(1, prev - 1)
                )
              }
              className="px-4 py-2 hover:bg-gray-100"
            >
              −
            </button>

            <span className="px-5 py-2">
              {quantity}
            </span>

            <button
              onClick={() =>
                setQuantity((prev) => prev + 1)
              }
              className="px-4 py-2 hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={handleAddToCart}
          disabled={isOutOfStock || !selectedSize}
          className="flex-1 rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Add to Cart
        </button>

        <button
          onClick={handleBuyNow}
          disabled={isOutOfStock || !selectedSize}
          className="flex-1 rounded-lg bg-orange-500 py-3 font-medium text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Buy Now
        </button>
      </div>

      {!isOutOfStock && !selectedSize && (
        <p className="mt-3 text-sm text-gray-500">
          Please select a size before continuing.
        </p>
      )}
    </>
  );
};

export default ProductActions;