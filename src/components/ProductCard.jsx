import DiscountBadge from "./DiscountBadge";
import FavoriteButton from "./FavoriteButton";

function ProductCard({ product, onClick }) {
  return (
    <div
      style={{
        width: 400,
        background: "#e0e0e0",
        borderRadius: 12,
        padding: 12,
        cursor: "pointer",
        position: "relative",
      }}
      onClick={onClick}
    >
      <img src={product.img} alt={product.name} style={{ width: "100%", height: 120, objectFit: "contain" }} />
      <div style={{ fontWeight: "bold", fontSize: 18 }}>{product.name}</div>
      <div>
        <span style={{ textDecoration: "line-through", color: "#888", marginRight: 4 }}>{product.oldPrice}$</span>
        <span style={{ fontWeight: "bold", fontSize: 18 }}>{product.price}$</span>
      </div>
      {product.discount && <DiscountBadge />}
      <div style={{ position: "absolute", top: 8, right: 8 }}>
        <FavoriteButton productId={product.id} />
      </div>
      <button style={{
        marginTop: 8,
        width: "100%",
        background: "#bdbdbd",
        border: "none",
        borderRadius: 6,
        padding: "8px 0",
        fontSize: "1rem",
        cursor: "pointer"
      }}>
        Agregar al carrito
      </button>
    </div>
  );
}
export default ProductCard;
