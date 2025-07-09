import React from "react";

// src/pages/NotFound/NotFound.jsx
export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8fafc",
      }}
    >
      <h1 style={{ fontSize: "6rem", margin: 0, color: "#64748b" }}>404</h1>
      <h2 style={{ color: "#334155", marginBottom: "1rem" }}>
        Página não encontrada
      </h2>
    </div>
  );
}
