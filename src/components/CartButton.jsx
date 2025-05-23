import { useNavigate } from "react-router-dom";

function CartButton() {
  const navigate = useNavigate();
  return (
    <button
      style={{
        fontSize: "1.2rem",
        padding: "12px 32px",
        borderRadius: 8,
        background: "#bdbdbd",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 8
      }}
      onClick={() => navigate('/carrito')}
    >
      Compra Ahora <span style={{ fontSize: "1.5rem" }}>🛒</span>
    </button>
  );
}
export default CartButton;
