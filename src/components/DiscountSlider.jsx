import './DiscountSlider.css';
import { useNavigate } from 'react-router-dom';
import products from '../data/products.json';

function DiscountSlider() {
  const navigate = useNavigate();
  const discountedProducts = products.filter((p) => p.oldPrice && p.price); 

  return (
    <div className="discount-slider">
      {discountedProducts.map((p) => (
        <div
          className="discount-card"
          key={p.id}
          onClick={() => navigate(`/producto/${p.id}`)}
        >
          <img src={p.img} alt={p.name} className="product-image" />
          <div className="discount-title">{p.name}</div>
          <div className="discount-info"  style={{ display: 'flex', alignContent: 'space-between', flexDirection: 'row' }}>
            <div className="price-container"  style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <span className="old-price">{p.oldPrice}$</span>
              <span className="new-price">{p.price}$</span>
            </div>
            <button className="add-to-cart-button">
              <img
                src="https://res.cloudinary.com/dfknt6m8i/image/upload/v1747965319/Shopping_bag_nzrv31.png"
                alt="Add to cart"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DiscountSlider;
