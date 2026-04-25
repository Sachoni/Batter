import CategoryBar from "../components/bars/CategoryBar";
export default function ExploreCard({ product }) {
  return (
    <div
      style={{
        background: "#f4f4f4",
        borderRadius: 16,
        padding: 10,s
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: 160,
          objectFit: "cover",
          borderRadius: 12,
        }}
      />

      <h4 style={{ margin: "8px 0 4px" }}>{product.name}</h4>
      <p style={{ fontWeight: "bold" }}>Ksh {product.price}</p>
    </div>
  );
}
