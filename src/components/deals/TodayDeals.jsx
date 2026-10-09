import ProductCard from "../products/ProductCard";

const TodayDeals = () => {

    
const todayDeals = [
  {
    id: 301,
    name: "Premium Cotton T-Shirt",
    image: "/images/products/tshirt-4.jpg",
    price: 699,
    originalPrice: 999,
    discount: 30,
    rating: 4.6,
    reviews: 84,
    stock: 12,
  },
  {
    id: 302,
    name: "Slim Fit Denim Jeans",
    image: "/images/products/jeans-2.jpg",
    price: 1199,
    originalPrice: 1799,
    discount: 33,
    rating: 4.5,
    reviews: 67,
    stock: 9,
  },
  {
    id: 303,
    name: "Casual Check Shirt",
    image: "/images/products/check-shirt-1.jpg",
    price: 799,
    originalPrice: 1199,
    discount: 33,
    rating: 4.4,
    reviews: 53,
    stock: 15,
  },
  {
    id: 304,
    name: "Classic Hoodie",
    image: "/images/products/hoodie-2.jpg",
    price: 1299,
    originalPrice: 1899,
    discount: 32,
    rating: 4.7,
    reviews: 91,
    stock: 6,
  },
];


    return(

         <section>
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Today's Deals
              </h2>

              <p className="mt-1 text-sm text-gray-500 sm:text-base">
                Best prices available today
              </p>
            </div>

            <button className="text-sm font-semibold text-amber-600 hover:text-amber-700">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {todayDeals.map((deal)=>{
                return <ProductCard key={deal.id} product={deal} />;
            })}
          </div>
        </section>

    )

}

export default TodayDeals;