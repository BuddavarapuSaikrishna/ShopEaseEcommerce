import ProductCard from "../products/ProductCard";

const NewArrivals = () => {
  const products = [
    {
      id: 101,
      name: "Oversized Hoodie",
      image: "/images/products/hoodie-1.jpg",
      price: 1599,
      originalPrice: 1999,
      discount: 20,
      rating: 4.7,
      reviews: 42,
      stock: 12,
      isNew: true,
    },
    {
      id: 102,
      name: "White Sneakers",
      image: "/images/products/sneakers-1.jpg",
      price: 2299,
      rating: 4.5,
      reviews: 31,
      stock: 7,
      isNew: true,
    },
    {
      id: 103,
      name: "Casual Linen Shirt",
      image: "/images/products/linen-shirt-1.jpg",
      price: 1299,
      originalPrice: 1599,
      discount: 19,
      rating: 4.6,
      reviews: 28,
      stock: 5,
      isNew: true,
    },
    {
      id: 104,
      name: "Relaxed Fit Trousers",
      image: "/images/products/trousers-1.jpg",
      price: 1799,
      rating: 4.4,
      reviews: 19,
      stock: 0,
      isNew: true,
    },
  ];

  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          New Arrivals
        </h2>

        <p className="mb-6 text-gray-500">
          Discover our latest styles and collections
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;