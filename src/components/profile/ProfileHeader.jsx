
import React from "react";

export default function ProfileHeader() {
  return (
    <div
    //back card
      style={{
        height: 160,
        background: "linear-gradient(135deg, #d4a017, #fff)",
        color: "#fff",
        padding: "40px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <h2>Profile</h2>
      <span style={{ fontSize: 20, cursor: "pointer" }}>✏️</span>
    </div>
  );
}



