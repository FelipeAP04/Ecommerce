import React from "react";

function CategoryPopup({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.4)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{
        background: "#fff",
        borderRadius: 16,
        padding: 32,
        minWidth: 320,
        minHeight: 180,
        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
        position: "relative"
      }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "none",
            border: "none",
            fontSize: 24,
            cursor: "pointer"
          }}
          aria-label="Cerrar"
        >×</button>
        <h2 style={{ marginTop: 0 }}>{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default CategoryPopup;
