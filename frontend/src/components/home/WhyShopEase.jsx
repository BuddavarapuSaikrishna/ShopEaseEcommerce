function WhyShopEase() {
  const features = [
    {
      icon: "🚚",
      title: "Free Shipping",
      description: "Enjoy free delivery on orders above ₹499.",
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      description: "Your payment information is protected and secure.",
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      description: "Return eligible products within 7 days.",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Our support team is always here to help you.",
    },
  ];

  return (
    <section className="bg-[#FFF7ED] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Why Choose Us
          </p>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why ShopEase?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            We make online shopping simple, secure, and convenient.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-bold text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyShopEase;