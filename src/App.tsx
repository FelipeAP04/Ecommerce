// @ts-ignore
import HomePage from "./pages/HomePage";
// @ts-ignore
import ProductDetailPage from "./pages/ProductDetailPage";
// @ts-ignore
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import { FavoriteProvider } from "./context/FavoriteContext"; 
import { VisitedProvider } from "./context/VisitedContext";

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <VisitedProvider>
      <FavoriteProvider>
        <CartProvider>
          <Router basename="/Ecommerce">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/producto/:id" element={<ProductDetailPage />} />
              <Route path="/carrito" element={<CartPage />} />
            </Routes>
          </Router>
        </CartProvider>
      </FavoriteProvider>
    </VisitedProvider>
  );
}

export default App;
