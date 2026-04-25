import React from "react";
import { FiSearch } from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="top-bar">
      <h1>Batter</h1>
      <div style={{ display: "flex", gap: "12px" }}>
        <FiSearch size={24} />
      </div>
    </div>
  );
}

