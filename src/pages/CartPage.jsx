import { FaTrash, FaShoppingCart } from "react-icons/fa";

const cartProducts = [
  {
    id: 1,
    name: "Titulo",
    img: "/assets/dsi.png",
    description: "Detalles del proyecto como tamaño, color, algun detalle en específico",
    quantity: 1,
    options: ["Rojo", "Azul", "Negro"],
    selectedOption: "Rojo",
    price: 45,
  },
  {
    id: 2,
    name: "Titulo",
    img: "/assets/psp.png",
    description: "Detalles del proyecto como tamaño, color, algun detalle en específico",
    quantity: 2,
    options: ["Rojo", "Azul", "Negro"],
    selectedOption: "Azul",
    price: 75,
  },
  {
    id: 3,
    name: "Titulo",
    img: "/assets/nes.png",
    description: "Detalles del proyecto como tamaño, color, algun detalle en específico",
    quantity: 1,
    options: ["Rojo", "Azul", "Negro"],
    selectedOption: "Negro",
    price: 60,
  },
  {
    id: 4,
    name: "Titulo",
    img: "/assets/wii.png",
    description: "Detalles del proyecto como tamaño, color, algun detalle en específico",
    quantity: 1,
    options: ["Rojo", "Azul", "Negro"],
    selectedOption: "Rojo",
    price: 75,
  },
];

function CartPage() {
  const subtotal = cartProducts.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const totalProducts = cartProducts.reduce((sum, p) => sum + p.quantity, 0);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div style={{ flex: 2, background: "#fff" }}>
        <header style={{ display: "flex", alignItems: "center", background: "#ccc", padding: "16px 24px" }}>
          <FaShoppingCart size={32} style={{ marginRight: 12 }} />
          <h1 style={{ fontWeight: 400, fontSize: "2.5rem", margin: 0 }}>Tu carrito</h1>
        </header>
        <div style={{ padding: 24 }}>
          {cartProducts.map((p) => (
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
              <div
                style={{
                  background: "#ddd",
                  borderRadius: 6,
                  padding: "8px 16px",
                  flex: 1,
                  fontSize: 16,
                  maxWidth: 350,
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  cursor: "pointer",
                }}
                title={p.description}
              >
                {p.description}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <button style={{
                  width: 32, height: 32, fontSize: 20, borderRadius: 4, border: "none", background: "#eee", cursor: "pointer"
                }}>+</button>
                <select style={{ height: 32, fontSize: 16, borderRadius: 4, border: "none", background: "#eee", padding: "0 8px" }} value={p.quantity} readOnly>
                  {[...Array(9)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                <button style={{
                  width: 32, height: 32, fontSize: 20, borderRadius: 4, border: "none", background: "#eee", cursor: "pointer"
                }}>-</button>
              </div>
              <select style={{ height: 32, fontSize: 16, borderRadius: 4, border: "none", background: "#eee", padding: "0 8px" }} value={p.selectedOption} readOnly>
                {p.options.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}
          <button
            style={{
              marginTop: 24,
              display: "flex",
              alignItems: "center",
              background: "#ddd",
              border: "none",
              borderRadius: 6,
              padding: "16px 32px",
              fontSize: "1.5rem",
              cursor: "pointer",
              fontWeight: 400,
            }}
          >
            <FaTrash style={{ marginRight: 12 }} />
            Vaciar Carrito
          </button>
        </div>
      </div>
      <div style={{
        flex: 1,
        background: "#eaeaea",
        borderLeft: "2px solid #aaa",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 32,
        minWidth: 300,
      }}>
        <div style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: 24 }}>Total:</div>
        <div style={{ fontSize: "1.5rem", marginBottom: 16 }}>Subtotal:</div>
        <div style={{ fontSize: "1.5rem", marginBottom: 16 }}>{subtotal}$</div>
        <div style={{ fontSize: "1.2rem", marginBottom: 16 }}>Total de productos:</div>
        <div style={{ fontSize: "1.2rem", marginBottom: 32 }}>{totalProducts}</div>
        <button style={{
          marginTop: "auto",
          width: "100%",
          background: "#ccc",
          border: "none",
          borderRadius: 6,
          padding: "24px 0",
          fontSize: "1.5rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <span>Comprar ahora</span>
          <span style={{
            background: "#222",
            color: "#fff",
            borderRadius: 4,
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 16,
            fontSize: 24,
          }}>✔</span>
        </button>
      </div>
    </div>
  );
}

export default CartPage;
