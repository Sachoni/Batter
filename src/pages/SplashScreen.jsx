import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SplashScreen() {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);

    const timer = setTimeout(() => {
      const auth = localStorage.getItem("auth");

      if (auth) {
        navigate("/home");
      } else {
        navigate("/login");
      }
    }, 3000); // ⏱️ 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      <div style={{ ...styles.content, opacity: fadeIn ? 1 : 0 }}>
        <h1 style={styles.logo}>Batter</h1>
        <div style={styles.loader}></div>
        <p>Loading...</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
    color: "#fff",
  },
  content: {
    textAlign: "center",
    transition: "opacity 1.5s ease-in",
  },
  logo: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    animation: "pulse 2s infinite",
  },
  loader: {
    width: "40px",
    height: "40px",
    border: "4px solid #fff",
    borderTop: "4px solid transparent",
    borderRadius: "50%",
    margin: "20px auto",
    animation: "spin 1s linear infinite",
  },
};