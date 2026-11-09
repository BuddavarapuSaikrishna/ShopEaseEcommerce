import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";
import ProductActions from "./ProductActions";

const ProductDetails = ({ product }) => {
  return (
    <div className="w-full lg:w-1/2">
      <h1 className="text-3xl font-bold text-gray-900">
        {product.name}
      </h1>

      <ProductRating
        rating={product.rating}
        reviews={product.reviews}
      />

      <ProductPrice
        price={product.price}
        originalPrice={product.originalPrice}
        discount={product.discount}
      />

      <ProductActions product={product} />
    </div>
  );
};

export default ProductDetails;