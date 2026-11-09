const DealsHeader = () => {
  return (
    <header className="w-full bg-gray-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 py-10 sm:px-6 md:px-10 lg:flex-row lg:px-12 lg:py-14">
        
        {/* Content */}
        <div className="max-w-xl text-center lg:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-400 sm:text-sm">
            Limited Time Only
          </p>

          <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
            Hot <span className="text-amber-400">Deals</span>
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
            Grab the best offers on your favorite products.
            Don't miss out on these limited-time deals!
          </p>

          <div className="mt-5 inline-flex rounded-full bg-amber-400 px-5 py-2.5 text-xs font-bold text-gray-900 sm:px-6 sm:py-3 sm:text-sm">
            Up to 70% OFF
          </div>
        </div>

        {/* Banner */}
        <div className="w-full max-w-md lg:max-w-lg">
          <img
            src="/images/deals/deals-banner.jpg"
            alt="ShopEase Hot Deals"
            className="h-48 w-full rounded-xl object-cover shadow-lg sm:h-56 md:h-64 lg:h-72"
          />
        </div>

      </div>
    </header>
  );
};

export default DealsHeader;