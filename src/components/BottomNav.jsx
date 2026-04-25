import React from "react";
import { FiHome, FiMessageSquare, FiCompass, FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();
  const navItems = [
    { name: "Home", icon: FiHome, path: "/" },
    { name: "Explore", icon: FiCompass, path: "/explore" },
    { name: "Chats", icon: FiMessageSquare, path: "/chats" },
    { name: "Profile", icon: FiUser, path: "/profile" },
  ];

  return (
    <div className="bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.name}
            to={item.path}
            className={isActive ? "active" : ""}
          >
            <Icon size={24} />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
