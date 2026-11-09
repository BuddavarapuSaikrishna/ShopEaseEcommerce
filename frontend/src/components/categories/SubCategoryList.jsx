
import { useState } from "react";

const subCategories = [
  { id: "all", name: "All" },
  { id: "women", name: "Women" },
  { id: "men", name: "Men" },
  { id: "kids", name: "Kids" },
  { id: "footwear", name: "Footwear" },
  { id: "accessories", name: "Accessories" },
];

const SubCategoryList = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section aria-label="Product categories">
      <div className="flex gap-3 overflow-x-auto pb-3">
        {subCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveCategory(category.id)}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
              activeCategory === category.id
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-gray-200 bg-white text-gray-700 hover:border-blue-500 hover:text-blue-600"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SubCategoryList;
