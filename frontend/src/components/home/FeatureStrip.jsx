function FeatureStrip() {
  return (
    <section className="bg-white border-t border-orange-100">

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          sm:px-8
          lg:px-10
          py-8
        "
      >

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-6
            text-center
          "
        >

          {/* Feature 1 */}
          <div>
            <p className="text-2xl font-bold text-[#C2410C]">
              10K+
            </p>

            <p className="mt-1 text-sm text-[#64748B]">
              Happy Customers
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <p className="text-2xl font-bold text-[#C2410C]">
              500+
            </p>

            <p className="mt-1 text-sm text-[#64748B]">
              Products
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <p className="text-2xl font-bold text-[#C2410C]">
              24/7
            </p>

            <p className="mt-1 text-sm text-[#64748B]">
              Customer Support
            </p>
          </div>

          {/* Feature 4 */}
          <div>
            <p className="text-2xl font-bold text-[#C2410C]">
              100%
            </p>

            <p className="mt-1 text-sm text-[#64748B]">
              Secure Shopping
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default FeatureStrip;