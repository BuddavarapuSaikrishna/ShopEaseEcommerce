const ProductPrice = ({
  price,
  originalPrice,
  discount,
}) => {
  return (
    <div className="mt-4 flex items-center gap-4">
      <span className="text-2xl font-semibold text-gray-900">
        ₹{price}
      </span>

      {originalPrice && (
        <span className="text-gray-500 line-through">
          ₹{originalPrice}
        </span>
      )}

      {discount && (
        <span className="rounded bg-green-100 px-2 py-1 text-sm font-medium text-green-700">
          {discount}% OFF
        </span>
      )}
    </div>
  );
};

export default ProductPrice;