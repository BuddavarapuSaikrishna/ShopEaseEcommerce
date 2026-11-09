
const categories = [
  {
    name: "Men",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=600&q=80",
  },
];

function Categories() {
  return (
    <section className="px-4 py-12 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative cursor-pointer overflow-hidden rounded-xl"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-end bg-black/30 p-5">
                <h3 className="text-xl font-semibold text-white">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;