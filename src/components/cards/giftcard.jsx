import React from "react";

export default function ProductCard({ product }) {
  const { name, price } = product;
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Exchange Rate Ksh{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
