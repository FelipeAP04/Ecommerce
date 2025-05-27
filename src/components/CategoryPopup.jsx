import React, { useState } from "react";

function CategoryPopup({ open, onClose, title, items }) {
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!open) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      background: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center"
    }}>
      <div style={{
        background: "#fff", borderRadius: 8, padding: 16, width: "95%", height: "90%", overflow: "hidden"
      }}>
        <button onClick={onClose} style={{ float: "right", background: "none", border: "none", fontSize: 50 }}>✖</button>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <h1 style={{ fontSize: "3.5rem", margin: 0 }}>{title}</h1>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "40%", padding: 15, borderRadius: 24, border: "1px solid #ccc", fontSize: "1rem",
              background: "#9C9C9C", margin: 16, color: "#FFFFFF", opacity: 0.6
            }}
          />
        </div>
        <div style={{
          height: "80%", overflowY: "auto", borderTop: "1px solid #ccc", paddingTop: 16
        }}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                padding: 16,
                borderBottom: "1px solid #eee",
                minHeight: 80,
                cursor: "pointer",
              }}
              onClick={item.onClick}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: 100,
                  height: 60,
                  marginRight: 16,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
              <div style={{ flex: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: "bold", fontSize: "1rem" }}>{item.name}</div>
                  <div style={{ fontSize: "0.9rem", color: "#555" }}>{item.description}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontWeight: "bold", fontSize: "1rem" }}>{item.price}$</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryPopup;
