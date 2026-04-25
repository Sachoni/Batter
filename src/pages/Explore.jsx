import React from "react";
import ProductCard from "../components/cards/ProductCard";
import CategoryBar from "../components/bars/CategoryBar";
import { useEffect, useState } from "react";

//setting use state function to products
export default function Home() {
  const [products, setProducts] = useState([]);

  //fetching products from the backend
useEffect(() => {
  fetch("http://localhost:5000/api/products")
    .then((res) => res.json())
    .then((data) => {
      console.log("API DATA:", data); // 👈 ADD THIS
      setProducts(data);
    })
    .catch((err) => console.error("FETCH ERROR:", err));
}, []);
//home ui
  return (
    <div style={{ padding: "16px" }}>
      {/* Category bar */}
      <CategoryBar />
      <div style={{ display: "grid", 
                    gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", 
                    gap: "16px", 
                    marginTop: "16px" }}>
        {products.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>
    </div>
  );
}
