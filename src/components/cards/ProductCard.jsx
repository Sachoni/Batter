import React from "react";

export default function ProductCard({ product }) {
  const { id,name, price,in_stock } = product;
  return (
    <div className="product-card">
      <p>Serial Number: {id}</p>
      <h3>{name}</h3>
      <p>Exchange Rate Ksh{price}</p>
      <p>Available: {in_stock ? "Yes" : "No"}</p>
      <button>View Product</button>
    </div>
  );
}
