import React from "react";

const categories = ["All", "Favourite", "Trending Furniture", "Chairs", "Tables", "Cups", "Trending Shoes", "Shirts",];

export default function CategoryBar() {
  return (
    <div className="category-bar">
      {categories.map((cat) => (
        <button key={cat}>{cat}</button>
      ))}
    </div>
  );
}
