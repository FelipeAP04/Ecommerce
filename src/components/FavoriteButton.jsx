import { useFavorite } from "../context/FavoriteContext";

function FavoriteButton({ productId }) {
  const { toggleFavorite, isFavorite } = useFavorite();

  return (
    <button
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "1.5rem",
        color: isFavorite(productId) ? "red" : "gray", // Sync with global state
      }}
      onClick={() => toggleFavorite(productId)}
    >
      {isFavorite(productId) ? "❤️" : "🤍"}
    </button>
  );
}

export default FavoriteButton;
