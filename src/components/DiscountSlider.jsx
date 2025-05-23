import './DiscountSlider.css';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'DSi',
    img: '/assets/dsi.png',
    oldPrice: 60,
    price: 45,
  },
  {
    id: 2,
    name: 'Play station PSP',
    img: '/assets/psp.png',
    oldPrice: 80,
    price: 75,
  },
  {
    id: 3,
    name: 'Nintendo Entertainment System',
    img: '/assets/nes.png',
    oldPrice: 70,
    price: 60,
  },
  {
    id: 4,
    name: 'Play Station 3',
    img: '/assets/ps3.png',
    oldPrice: 120,
    price: 95,
  },
  {
    id: 5,
    name: 'Wii',
    img: '/assets/wii.png',
    oldPrice: 80,
    price: 75,
  },
];

function DiscountSlider() {
  const navigate = useNavigate();
  return (
    <div className="discount-slider" style={{ marginBottom: 16 }}>
      {products.map((p, i) => (
        <div
          className="discount-card"
          key={i}
          style={{ cursor: 'pointer' }}
          onClick={() => navigate(`/producto/${p.id}`)}
        >
          <img src={p.img} alt={p.name} />
          <div className="discount-info">
            <div className="discount-title">{p.name.length > 15 ? p.name.slice(0, 15) + "..." : p.name}</div>
            <div>
              <span className="old-price">{p.oldPrice}$</span>
              <span className="new-price">{p.price}$</span>
              <span className="cart-icon">🛒</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DiscountSlider;
