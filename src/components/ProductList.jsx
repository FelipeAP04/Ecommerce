import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "DSi", price: 45, oldPrice: 60, img: "/Ecommerce/assets/dsi.png", discount: true },
  { id: 2, name: "PSP", price: 75, oldPrice: 80, img: "/Ecommerce/assets/psp.png", discount: true },
  { id: 3, name: "NES", price: 60, oldPrice: 70, img: "/Ecommerce/assets/nes.png", discount: true },
  { id: 4, name: "PS3", price: 95, oldPrice: 120, img: "/Ecommerce/assets/ps3.png", discount: true },
  { id: 5, name: "Wii", price: 75, oldPrice: 80, img: "/Ecommerce/assets/wii.png", discount: true },
  { id: 6, name: "SNES", price: 80, oldPrice: 90, img: "/Ecommerce/assets/snes.png", discount: true },
  { id: 7, name: "GameCube", price: 110, oldPrice: 130, img: "/Ecommerce/assets/gamecube.png", discount: true },
  { id: 8, name: "Mega Drive", price: 70, oldPrice: 85, img: "/Ecommerce/assets/megadrive.png", discount: true },
  { id: 9, name: "Atari 2600", price: 50, oldPrice: 65, img: "/Ecommerce/assets/atari2600.png", discount: true },
  { id: 10, name: "Dreamcast", price: 120, oldPrice: 140, img: "/Ecommerce/assets/dreamcast.png", discount: true },
];

function ProductList() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onClick={() => navigate(`/producto/${p.id}`)} />
      ))}
    </div>
  );
}
export default ProductList;
