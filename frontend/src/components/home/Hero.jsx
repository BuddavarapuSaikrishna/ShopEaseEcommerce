import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ================= TEXT SECTION ================= */}
          <div className="text-center lg:text-left">

            {/* Season Label */}
            <p
              className="
                inline-block
                px-4 py-2
                rounded-full
                bg-orange-100
                text-orange-700
                text-xs sm:text-sm
                font-semibold
                tracking-[0.2em]
              "
            >
              NEW SEASON COLLECTION
            </p>

            {/* Main Heading */}
            <h1
              className="
                mt-6
                text-4xl
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
                font-extrabold
                leading-[1.05]
                tracking-tight
                text-[#172033]
              "
            >
              Elevate Your

              <span className="block text-[#C2410C]">
                Everyday Style
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-xl
                mx-auto
                lg:mx-0
                text-base
                sm:text-lg
                leading-7
                text-[#475569]
              "
            >
              Discover products you'll love, carefully selected
              to make your everyday life stylish, comfortable,
              and better.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-8
                flex
                flex-col
                sm:flex-row
                gap-4
                justify-center
                lg:justify-start
              "
            >

              {/* Shop Now */}
              <Link
                to="/products"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-7
                  py-3.5
                  rounded-full
                  bg-[#EA580C]
                  text-white
                  font-semibold
                  shadow-md
                  hover:bg-[#C2410C]
                  hover:shadow-lg
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                Shop Now
                <span className="ml-2 text-lg">→</span>
              </Link>

              {/* Explore Collection */}
              <Link
                to="/categories"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-7
                  py-3.5
                  rounded-full
                  bg-white
                  text-[#172033]
                  border
                  border-[#172033]
                  font-semibold
                  hover:bg-[#172033]
                  hover:text-white
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                Explore Collection
              </Link>

            </div>

            {/* ================= TRUST FEATURES ================= */}
            <div
              className="
                mt-10
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-6
                text-left
              "
            >

              {/* Free Shipping */}
              <div className="flex items-center gap-3">
                <div
                  className="
                    w-11
                    h-11
                    flex
                    items-center
                    justify-center
                    rounded-full
                    bg-orange-100
                    text-xl
                  "
                >
                  🚚
                </div>

                <div>
                  <h3 className="font-semibold text-[#172033]">
                    Free Shipping
                  </h3>

                  <p className="text-sm text-[#64748B]">
                    On all orders
                  </p>
                </div>
              </div>

              {/* Secure Payment */}
              <div className="flex items-center gap-3">
                <div
                  className="
                    w-11
                    h-11
                    flex
                    items-center
                    justify-center
                    rounded-full
                    bg-orange-100
                    text-xl
                  "
                >
                  🔒
                </div>

                <div>
                  <h3 className="font-semibold text-[#172033]">
                    Secure Payment
                  </h3>

                  <p className="text-sm text-[#64748B]">
                    100% safe
                  </p>
                </div>
              </div>

              {/* Easy Returns */}
              <div className="flex items-center gap-3">
                <div
                  className="
                    w-11
                    h-11
                    flex
                    items-center
                    justify-center
                    rounded-full
                    bg-orange-100
                    text-xl
                  "
                >
                  📦
                </div>

                <div>
                  <h3 className="font-semibold text-[#172033]">
                    Easy Returns
                  </h3>

                  <p className="text-sm text-[#64748B]">
                    Hassle free
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* ================= IMAGE SECTION ================= */}
          <div className="relative">

            {/* Decorative Background */}
            <div
              className="
                absolute
                -top-6
                -right-6
                w-32
                h-32
                bg-orange-200
                rounded-full
                blur-2xl
                opacity-50
              "
            />

            <div
              className="
                absolute
                -bottom-6
                -left-6
                w-40
                h-40
                bg-orange-100
                rounded-full
                blur-2xl
                opacity-60
              "
            />

            {/* Hero Image */}
            <div className="relative">
              <img
                src="/hero.png"
                alt="ShopEase new collection"
                className="
                  w-full
                  h-auto
                  rounded-3xl
                  object-cover
                  shadow-2xl
                "
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;