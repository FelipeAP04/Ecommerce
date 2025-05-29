import FavoriteButton from "./FavoriteButton";

function RecommendedCard({ product, onClick }) {
  return (
    <div
      style={{
        background: "#f5f5f5",
        borderRadius: 8,
        cursor: "pointer",
        aspectRatio: "1/1",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={onClick}
    >
      <div style={{ flex: 1, position: "relative" }}>
        <img
          src={product.img}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            background: "#fff",
          }}
        />
      </div>
      <div
        style={{
          padding: "12px",
          background: "#e0e0e0",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              marginBottom: "4px",
            }}
          >
            {product.name}
          </div>
          <div>
            {product.oldPrice && (
              <span
                style={{
                  textDecoration: "line-through",
                  color: "#888",
                  marginRight: "8px",
                  fontSize: "0.9rem",
                }}
              >
                {product.oldPrice}$
              </span>
            )}
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              {product.price}$
            </span>
          </div>
        </div>
        <FavoriteButton productId={product.id} />
      </div>
    </div>
  );
}

export default RecommendedCard;
