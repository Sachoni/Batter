import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./bars/TopBar";
import BottomNav from "./BottomNav";

export default function MainLayout() {
  return (
    <div style={{ paddingBottom: "60px" }}>
      <TopBar />
      <Outlet />
      <BottomNav />
    </div>
  );
}
