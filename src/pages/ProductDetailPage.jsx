import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useVisited } from "../context/VisitedContext";
import products from "../data/products.json";
import { useMemo } from "react";
import ProductDetails from "../components/ProductDetails";
import RecommendationsSidebar from "../components/RecommendationsSidebar";

function ProductDetailPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { addToCart } = useCart();
	const { addVisited, visited } = useVisited();
	const product = products.find((p) => p.id === parseInt(id));

	if (!product) {
		return <div>Producto no encontrado</div>;
	}

	useMemo(() => {
		if (product) {
			addVisited(product);
		}
	}, [product]);

	const handleAddToCart = () => {
		addToCart({ ...product, quantity: 1 });
		navigate("/carrito");
	};

	return (
		<div
			style={{
				display: "flex",
				gap: 32,
				padding: "0 32",
				minHeight: "100vh",
				boxSizing: "border-box",
			}}
		>
			<ProductDetails product={product} onAddToCart={handleAddToCart} />
			<RecommendationsSidebar visited={visited} navigate={navigate} />
		</div>
	);
}

export default ProductDetailPage;
