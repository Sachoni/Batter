import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import Home from "./pages/Home";
import Chats from "./pages/Chats";
import ChatRoom from "./pages/ChatRoom";
import Explore from "./pages/Explore";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";

function PrivateRoute({ children }) {
  const auth = localStorage.getItem("auth");
  return auth ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected */}
        <Route
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Other routes */}
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/chat/:id" element={<ChatRoom />} />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}