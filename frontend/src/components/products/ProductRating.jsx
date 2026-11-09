const ProductRating = ({ rating, reviews }) => {
  return (
    <div className="mt-3 flex items-center gap-2">
      <span className="text-yellow-500">★</span>

      <span className="font-medium">
        {rating}
      </span>

      <span className="text-gray-500">
        ({reviews} reviews)
      </span>
    </div>
  );
};

export default ProductRating;