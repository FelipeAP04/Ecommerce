// @ts-ignore
import HomePage from "./pages/HomePage";
// @ts-ignore
import ProductDetailPage from "./pages/ProductDetailPage";
// @ts-ignore
import CartPage from "./pages/CartPage";

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/producto/:id" element={<ProductDetailPage />} />
        <Route path="/carrito" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
