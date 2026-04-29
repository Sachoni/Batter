import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import Home from "./pages/Home";
import Chats from "./pages/Chats";
import ChatRoom from "./pages/ChatRoom";
import Explore from "./pages/Explore";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import SplashScreen from "./pages/SplashScreen";
import Login from "./pages/Login";

function PrivateRoute({ children }) {
  const auth = localStorage.getItem("auth");
  return auth ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Splash ONLY ENTRY POINT */}
        <Route path="/" element={<SplashScreen />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Layout */}
        <Route
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        >
          {/* ✅ FIX: use index route instead of /home */}
          <Route index element={<Home />} />
          <Route path="chats" element={<Chats />} />
          <Route path="explore" element={<Explore />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Extra routes */}
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/chat/:id" element={<ChatRoom />} />

        {/* IMPORTANT: avoid looping to splash */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}