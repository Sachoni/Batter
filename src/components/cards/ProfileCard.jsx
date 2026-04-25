import React from "react";

export default function ProfileCard() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: 16,
        textAlign: "center",
        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
      }}
    >
      <img
        src="https://i.pravatar.cc/100"
        alt="avatar"
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          marginBottom: 10,
        }}
      />

      <h3 style={{ margin: 0 }}>
        Johnmark Wamukota <span style={{ color: "#d4a017" }}>✔</span>
      </h3>

      <p style={{ color: "#777", fontSize: 14 }}>
        wamukotajohnmark@gmail.com
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 16,
        }}
      >
        <span>🏅</span>
        <span>⭐</span>
        <span>🛡️</span>
        <span>💰</span>
        <span>🏅</span>
        <span>⭐</span>
        <span>🛡️</span>
        <span>💰</span>
      </div>
    </div>
  );
}

