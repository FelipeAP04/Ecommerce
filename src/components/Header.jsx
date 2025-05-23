import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <h1 style={{ fontWeight: 400, fontSize: '2.5rem' }}>Ecommerce</h1>
      <button
        onClick={() => navigate('/carrito')}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          margin: 0,
        }}
        aria-label="Ir al carrito"
      >
        <FaShoppingCart size={32} />
      </button>
    </header>
  );
}

export default Header;
