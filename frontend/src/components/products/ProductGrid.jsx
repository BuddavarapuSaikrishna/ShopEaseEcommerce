
import ProductCard from "./ProductCard";

const ProductGrid = ({ products = [] }) => {
  if (products.length === 0) {
    return (
      <p className="py-10 text-center text-gray-500">
        No products found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
