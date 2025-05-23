import ReviewStars from '../components/ReviewStars';
import FavoriteButton from '../components/FavoriteButton';
import CartButton from '../components/CartButton';

function ProductDetailPage() {
  // Placeholder product data
  const product = {
    name: "Titulo",
    description: "descripcion",
    price: 199.99,
    oldPrice: 249.99,
    image: "/assets/dsi.png",
    options: ["Rojo", "Azul", "Negro"],
    reviews: [
      { user: "Usuario1", comment: "Comentario del producto", rating: 5 },
      { user: "Usuario2", comment: "Comentario del producto", rating: 4 },
      { user: "Usuario3", comment: "Comentario del producto", rating: 5 },
    ],
  };

  return (
    <div style={{ display: "flex", gap: 32, padding: 32, minHeight: "100vh", boxSizing: "border-box" }}>
      {/* Left column */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        <h1 style={{ fontSize: "3rem", margin: 0 }}>{product.name}</h1>
        <div style={{
          background: "#ddd",
          padding: 16,
          borderRadius: 8,
          margin: "16px 0",
          flex: 1,
          minHeight: 300,
          display: "flex",
          alignItems: "center"
        }}>
          <span style={{ fontSize: "2rem" }}>{product.description}</span>
        </div>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: 400, height: 400, objectFit: "cover", borderRadius: 24, border: "2px solid #bbb" }}
        />
      </div>
      {/* Right column */}
      <div
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          minHeight: "calc(100vh - 64px)",
          height: "100%",
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Product options */}
          <div style={{ background: "#ddd", borderRadius: 8, padding: 16, flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: 12, fontWeight: "bold", fontSize: "2rem" }}>
              Opciones del producto (Color, tipo, tamaño, etc.)
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              {product.options.map((opt, idx) => (
                <button key={idx} style={{
                  width: 250, height: 250, border: "2px solid #888", borderRadius: 12, background: "#fff"
                }}>
                  {opt}
                </button>
              ))}
            </div>
          </div>
          {/* Reviews */}
          <div style={{ background: "#eee", borderRadius: 8, padding: 16, flex: 2, overflowY: "auto", display: "flex", flexDirection: "column" }}>
            {product.reviews.map((r, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#ccc", marginRight: 12 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: "bold" }}>{r.user}</div>
                  <div style={{ fontSize: 14 }}>{r.comment}</div>
                </div>
                <ReviewStars value={r.rating} />
              </div>
            ))}
          </div>
        </div>
        {/* Price and buy */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, background: "#eee", borderRadius: 8, padding: 16 }}>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: "2rem", fontWeight: "bold" }}>{product.price}$</span>
            <span style={{ textDecoration: "line-through", color: "#888", marginLeft: 12 }}>{product.oldPrice}$</span>
          </div>
          <CartButton />
          <FavoriteButton />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
