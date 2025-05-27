import { FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { cart, clearCart, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const subtotal = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const totalProducts = cart.reduce((sum, p) => sum + p.quantity, 0);

  const handleQuantityChange = (product, quantity) => {
    if (quantity > 9) {
      setError(`No puedes tener más de 9 unidades de ${product.name}.`);
      return;
    }
    if (subtotal + product.price * (quantity - product.quantity) > 999.99) {
      setError("El total no puede superar los 999.99$.");
      return;
    }
    setError("");
    if (quantity > 0) {
      addToCart({ ...product, quantity: quantity - product.quantity });
    } else {
      removeFromCart(product.id);
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", position: "relative" }}>
      <div style={{ flex: 2, background: "#fff" }}>
        <header style={{ display: "flex", alignItems: "center", background: "#ccc", padding: "16px 24px" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              background: "#ddd",
              border: "none",
              borderRadius: 6,
              padding: "8px 16px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Volver a Inicio
          </button>
          <h1 style={{ fontWeight: 400, fontSize: "2.5rem", margin: "0 0 0 16px" }}>Tu carrito</h1>
        </header>
        <div style={{ padding: 24 }}>
          {error && (
            <div
              style={{
                background: "#ffcccc",
                color: "#d8000c",
                padding: "12px",
                borderRadius: 8,
                marginBottom: 16,
                fontWeight: "bold",
              }}
            >
              {error}
            </div>
          )}
          {cart.map((p) => (
            <div
              key={p.id}
              style={{
                background: "#bdbdbd",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                marginBottom: 24,
                padding: 12,
                gap: 16,
              }}
            >
              <img
                src={p.img}
                alt={p.name}
                style={{
                  width: 64,
                  height: 64,
                  objectFit: "cover",
                  borderRadius: 8,
                  background: "#eee",
                }}
              />
              <div style={{ fontWeight: "bold", fontSize: 24, minWidth: 100 }}>{p.name}</div>
              <div style={{ flex: 1, fontSize: 16 }}>{p.description}</div>
              <div style={{ fontWeight: "bold", fontSize: 18 }}>{p.price}$</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <button
                  style={{
                    background: "#ddd",
                    border: "none",
                    borderRadius: 4,
                    padding: "4px 8px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleQuantityChange(p, p.quantity + 1)}
                >
                  +
                </button>
                <select
                  value={p.quantity}
                  onChange={(e) => handleQuantityChange(p, parseInt(e.target.value))}
                  style={{
                    padding: "4px 8px",
                    borderRadius: 4,
                    border: "1px solid #ccc",
                  }}
                >
                  {[...Array(9).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>
                      {n + 1}
                    </option>
                  ))}
                </select>
                <button
                  style={{
                    background: "#ddd",
                    border: "none",
                    borderRadius: 4,
                    padding: "4px 8px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleQuantityChange(p, p.quantity - 1)}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          flex: 1,
          background: "#eaeaea",
          borderLeft: "2px solid #aaa",
          padding: 32,
        }}
      >
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Subtotal: {subtotal}$</div>
        <div style={{ fontSize: "1.5rem" }}>Total de productos: {totalProducts}</div>
        <button
          style={{
            marginTop: 24,
            width: "100%",
            background: "#ddd",
            border: "none",
            borderRadius: 6,
            padding: "16px 32px",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          Comprar ahora
        </button>
      </div>
      <button
        style={{
          position: "absolute",
          bottom: 16,
          left: 16,
          background: "#ddd",
          border: "none",
          borderRadius: 6,
          padding: "16px 32px",
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
        onClick={clearCart}
      >
        <FaTrash style={{ marginRight: 12 }} />
        Vaciar Carrito
      </button>
    </div>
  );
}

export default CartPage;
