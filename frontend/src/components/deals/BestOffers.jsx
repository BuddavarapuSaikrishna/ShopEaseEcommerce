import ProductCard from "../products/ProductCard";

const BestOffers = () => {
    const bestOffers = [
  {
    id: 305,
    name: "Oversized Graphic T-Shirt",
    image: "/images/products/graphic-tshirt-1.jpg",
    price: 599,
    originalPrice: 999,
    discount: 40,
    rating: 4.5,
    reviews: 72,
    stock: 18,
  },
  {
    id: 306,
    name: "Relaxed Fit Trousers",
    image: "/images/products/trousers-2.jpg",
    price: 999,
    originalPrice: 1599,
    discount: 38,
    rating: 4.3,
    reviews: 46,
    stock: 7,
  },
  {
    id: 307,
    name: "Casual Polo Shirt",
    image: "/images/products/polo-2.jpg",
    price: 749,
    originalPrice: 1099,
    discount: 32,
    rating: 4.6,
    reviews: 58,
    stock: 11,
  },
  {
    id: 308,
    name: "Lightweight Bomber Jacket",
    image: "/images/products/jacket-2.jpg",
    price: 1799,
    originalPrice: 2999,
    discount: 40,
    rating: 4.4,
    reviews: 39,
    stock: 5,
  },
];
  return (
        <section className="mt-16">
              <div className="mb-6 flex items-end justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Best Offers
                  </h2>
    
                  <p className="mt-1 text-sm text-gray-500 sm:text-base">
                    Don't miss these amazing offers
                  </p>
                </div>
    
                <button className="text-sm font-semibold text-amber-600 hover:text-amber-700">
                View All →
                </button>
              </div>
    
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {bestOffers.map((deal) => (
                  <ProductCard key={deal.id} product={deal} />
                ))}
              </div>
            </section>
  )
}


export default BestOffers