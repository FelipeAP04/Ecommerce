import { useRef } from "react";
function FavoriteButton() {
  const likeRef = useRef(null);
  // Logic to be added later
  return (
    <button ref={likeRef} style={{ fontSize: 24, background: "none", border: "none", cursor: "pointer" }}>
      ♥
    </button>
  );
}
export default FavoriteButton;
