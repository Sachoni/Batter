import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  //fetching products from the backend
  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={styles.page}>
      {/* Image */}
      <img src={product.image} style={styles.image} />
      {/* Details */}
      <h2>Rate {product.price}/=</h2>
      <h3>{product.name}</h3>
      <p style={styles.desc}>{product.description}</p>
      {/* Purchase Button */}
      <button style={styles.button}>
        Purchase
      </button>
    </div>
  );
}

const styles = {
  //Product details body
  page: {
    padding: 16,
    background: "#fff",
    minHeight: "100vh"
  },
  //image
  image: {
    width: "100%",
    borderRadius: 20,
    marginBottom: 16
  },
  //descriptions
  desc: {
    color: "#000",
    margin: "12px 0"
  },
  //button
  button: {
    width: "100%",
    background: "#d4a017",
    color: "#fff",
    padding: 14,
    borderRadius: 30,
    fontSize: 16,
    border: "none",
    cursor: "pointer"
  }
};
