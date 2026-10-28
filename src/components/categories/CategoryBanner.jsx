
const CategoryBanner = () => {
  return (
    <section className="rounded-2xl bg-linear-to-r from-pink-100 via-rose-50 to-orange-100 px-6 py-10 sm:px-10 sm:py-14" >
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-600">
          Discover Your Style
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Explore Our Collection
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
          Find your perfect look with the latest trends in clothing,
          footwear, and accessories.
        </p>
      </div>
    </section>
  );
};

export default CategoryBanner;
