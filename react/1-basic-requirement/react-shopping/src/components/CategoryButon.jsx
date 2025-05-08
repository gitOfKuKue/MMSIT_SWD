import React from "react";

const CategoryButon = ({categoryName, current}) => {

  return (
    console.log(current),
    <button className={`border ${current && "bg-black text-white"} text-nowrap border-black px-4 py-2 me-2`}> {/* Class Binding */}
        {categoryName}
    </button>
  );
};

export default CategoryButon;
