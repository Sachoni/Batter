import React from "react";
import ProductCard from "../components/cards/ProductCard";
import CategoryBar from "../components/bars/CategoryBar";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then(res => res.json())
      .then(data => {
        console.log("Products:", data);
        setProducts(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "16px" }}>
      
      <h2>Products</h2>

      {/* Category bar */}
      <CategoryBar />

      {/* If no products */}
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
            gap: "16px",
            marginTop: "16px"
          }}
        >
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

    </div>
  );
}