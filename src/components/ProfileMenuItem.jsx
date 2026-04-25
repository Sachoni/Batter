import React from "react";

export default function ProfileMenuItem({ icon, title, subtitle }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 14,
        padding: 14,
        display: "flex",
        alignItems: "center",
        marginBottom: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: "#ae8211ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          marginRight: 12,
        }}
      >
        {icon}
      </div>

      <div style={{ flex: 1 }}>
        <strong>{title}</strong>
        <p style={{ margin: 0, fontSize: 13, color: "#777" }}>
          {subtitle}
        </p>
      </div>

      <span style={{ color: "#bbb" }}>›</span>
    </div>
  );
}
