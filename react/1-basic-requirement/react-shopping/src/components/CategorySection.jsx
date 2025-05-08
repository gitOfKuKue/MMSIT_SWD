import React from "react";
import CategoryButon from "./CategoryButon";

const CategorySection = () => {
  const title = "Product Cateogies";

  const categories = [
    "Electronics",
    "Jewelery",
    "Men's clothing",
    "Women's clothing",
  ];

  return (
    <section id="category-section" className="p-5">
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <div className="flex overflow-scroll hide-scrollbar">
        <CategoryButon key="all" categoryName="All" current={true} />
        {categories.map((category) => (
          <CategoryButon
            key={category}
            categoryName={category}
            current={false}
          />
        ))}
        {/* Loop ပတ်ရင် key Prop လို */}
      </div>
    </section>
  );
};

// Component အချင်းချင်း Data ပေးမယ်ဆိုရင် parent to child ပဲရ။

export default CategorySection;
