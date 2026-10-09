import { Link } from "react-router-dom";

function SpecialOffers() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#FFF7ED]">
          
          {/* Decorative Circle */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-200/50" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-orange-100/70" />

          <div className="relative grid items-center gap-10 px-8 py-12 md:grid-cols-2 md:px-14 md:py-16">

            {/* Content */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                Limited Time Offer
              </p>

              <h2 className="max-w-xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                Big Deals.
                <span className="block text-orange-500">
                  Better Prices.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-gray-600">
                Get amazing discounts on selected products. Don't miss out on
                these limited-time offers.
              </p>

              {/* Offer */}
              <div className="mt-6 flex items-center gap-4">
                <div className="rounded-xl bg-orange-500 px-5 py-3 text-center text-white">
                  <span className="block text-2xl font-bold">50%</span>
                  <span className="text-xs font-medium uppercase">
                    OFF
                  </span>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    On Selected Products
                  </p>
                  <p className="text-sm text-gray-500">
                    Limited time only
                  </p>
                </div>
              </div>

              {/* Button */}
              <Link
                to="/deals"
                className="mt-8 inline-flex rounded-lg bg-gray-900 px-7 py-3 font-semibold text-white transition hover:bg-orange-500"
              >
                Shop Deals →
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/offers/special-offer.jpg"
                  alt="Special offers"
                  className="h-80 w-full object-cover sm:h-96"
                />
              </div>

              {/* Discount Badge */}
              <div className="absolute -bottom-5 -left-5 flex h-24 w-24 items-center justify-center rounded-full bg-orange-500 text-center text-white shadow-lg">
                <div>
                  <span className="block text-2xl font-bold">50%</span>
                  <span className="text-xs">OFF</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;