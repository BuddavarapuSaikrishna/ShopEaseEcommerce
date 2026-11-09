import ProductCard from "../products/ProductCard";
const ComingSoon = () => {

    
const endingSoon = [
  {
    id: 309,
    name: "Classic White Sneakers",
    image: "/images/products/sneakers-2.jpg",
    price: 1499,
    originalPrice: 2299,
    discount: 35,
    rating: 4.7,
    reviews: 103,
    stock: 3,
  },
  {
    id: 310,
    name: "Casual Linen Shirt",
    image: "/images/products/linen-shirt-2.jpg",
    price: 899,
    originalPrice: 1399,
    discount: 36,
    rating: 4.5,
    reviews: 61,
    stock: 2,
  },
  {
    id: 311,
    name: "Regular Fit Cargo Pants",
    image: "/images/products/cargo-1.jpg",
    price: 1199,
    originalPrice: 1799,
    discount: 33,
    rating: 4.4,
    reviews: 44,
    stock: 4,
  },
  {
    id: 312,
    name: "Denim Overshirt",
    image: "/images/products/overshirt-1.jpg",
    price: 1099,
    originalPrice: 1699,
    discount: 35,
    rating: 4.6,
    reviews: 37,
    stock: 1,
  },
];
  return (
     <section className="mt-16">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Ending Soon
              </h2>

              <p className="mt-1 text-sm text-gray-500 sm:text-base">
                Grab them before they're gone
              </p>
            </div>

            <button className="text-sm font-semibold text-amber-600 hover:text-amber-700">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {endingSoon.map((deal) => (
              <ProductCard key={deal.id} product={deal} />
            ))}
          </div>
        </section>      
  )
}

export default ComingSoon