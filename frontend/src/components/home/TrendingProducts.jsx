import ProductCard from "../products/ProductCard";

const TrendingProducts = () => {
  const products = [
    {
      id: 1,
      name: "Classic Cotton T-Shirt",
      image: "/images/products/tshirt-1.jpg",
      price: 999,
      originalPrice: 1499,
      discount: 33,
      rating: 4.5,
      reviews: 128,
      stock: 10,
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      image: "/images/products/jeans-1.jpg",
      price: 1499,
      originalPrice: 1999,
      discount: 25,
      rating: 4.3,
      reviews: 96,
      stock: 8,
    },
    {
      id: 3,
      name: "Casual Shirt",
      image: "/images/products/shirt-1.jpg",
      price: 1199,
      rating: 4.6,
      reviews: 74,
      stock: 5,
    },
    {
      id: 4,
      name: "Denim Jacket",
      image: "/images/products/jacket-1.jpg",
      price: 1999,
      originalPrice: 2499,
      discount: 20,
      rating: 4.4,
      reviews: 52,
      stock: 0,
    },
  ];

  return (
    <section className="px-4 py-10">
      <h2 className="mb-6 text-2xl font-bold">
        Trending Products
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;