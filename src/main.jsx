import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import { VisitedProvider } from "./context/VisitedContext";

function App() {
  return (
    <VisitedProvider>
      <CartProvider>
        <Router basename="/Ecommerce">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/producto/:id" element={<ProductDetailPage />} />
            <Route path="/carrito" element={<CartPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </VisitedProvider>
  );
}

export default App;
