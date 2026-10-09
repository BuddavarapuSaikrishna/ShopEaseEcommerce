import ProductGallery from "../components/products/ProductGallery";
import ProductDetails from "../components/products/ProductDetails";
import ProductCard from "../components/products/ProductCard";

const Product = () => {
  const relatedProducts = [
  {
    id: 201,
    name: "Slim Fit Polo T-Shirt",
    image: "/images/products/polo-1.jpg",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    rating: 4.4,
    reviews: 86,
    stock: 8,
  },
  {
    id: 202,
    name: "Casual Denim Shirt",
    image: "/images/products/denim-shirt-1.jpg",
    price: 1299,
    rating: 4.6,
    reviews: 64,
    stock: 6,
  },
  {
    id: 203,
    name: "Regular Fit Cotton Shirt",
    image: "/images/products/cotton-shirt-1.jpg",
    price: 1099,
    originalPrice: 1399,
    discount: 21,
    rating: 4.3,
    reviews: 47,
    stock: 4,
  },
  {
    id: 204,
    name: "Oversized Casual T-Shirt",
    image: "/images/products/oversized-tshirt-1.jpg",
    price: 799,
    rating: 4.5,
    reviews: 39,
    stock: 0,
  },
];
  const product = {
    id: 1,
    name: "Classic Cotton T-Shirt",
    image: "/images/products/tshirt-1.jpg",
    images: [
      "/images/products/tshirt-1.jpg",
      "/images/products/tshirt-2.jpg",
      "/images/products/tshirt-3.jpg",
    ],
    price: 999,
    originalPrice: 1499,
    discount: 33,
    rating: 4.5,
    reviews: 128,
    stock: 10,
    sizes: ["S", "M", "L", "XL"],
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      {/* Main Product Section */}
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 rounded-xl bg-white p-6 shadow-sm lg:flex-row lg:p-8">
          
          {/* Product Gallery */}
          <ProductGallery images={product.images} />

          {/* Product Details */}
          <ProductDetails product={product} />

        </div>
      </section>

      {/* Related Products */}
      <section className="mx-auto mt-16 max-w-7xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Related Products
          </h2>

          <p className="mt-1 text-gray-500">
            You may also like these products
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Product;