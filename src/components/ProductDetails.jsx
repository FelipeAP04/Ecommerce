import ReviewStars from "./ReviewStars";
import FavoriteButton from "./FavoriteButton";

function ProductDetails({ product, onAddToCart }) {
	return (
		<div style={{ flex: 4, display: "flex", gap: 32 }}>
			<div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
				<h1 style={{ fontSize: "3rem", margin: 0 }}>{product.name}</h1>
				<div style={{ background: "#ddd", padding: 16, borderRadius: 8, margin: "16px 0", flex: 1, minHeight: 300, display: "flex", alignItems: "center" }}>
					<span style={{ fontSize: "2rem" }}>{product.description}</span>
				</div>
				<img src={product.img} alt={product.name} style={{ width: 400, height: 400, objectFit: "contain", borderRadius: 24, border: "2px solid #bbb" }} />
			</div>
			<div style={{ flex: 2, display: "flex", flexDirection: "column", gap: 24, minHeight: "calc(100vh - 64px)", height: "100%" }}>
				<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
					<div style={{ background: "#ddd", borderRadius: 8, padding: 16, flex: 1, display: "flex", flexDirection: "column" }}>
						<div style={{ marginBottom: 12, fontWeight: "bold", fontSize: "2rem" }}>Opciones del producto</div>
						<div style={{ display: "flex", gap: 16 }}>
							{product.options.map((opt, idx) => (
								<button key={idx} style={{ width: 250, height: 250, border: "2px solid #888", borderRadius: 12, background: "#fff" }}>
									{opt}
								</button>
							))}
						</div>
					</div>
					<div style={{ background: "#eee", borderRadius: 8, padding: 16, flex: 2, overflowY: "auto", display: "flex", flexDirection: "column" }}>
						{product.reviews.map((r, idx) => (
							<div key={idx} style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
								<div style={{ width: 40, height: 40, borderRadius: "50%", background: "#ccc", marginRight: 12 }} />
								<div style={{ flex: 1 }}>
									<div style={{ fontWeight: "bold" }}>{r.user}</div>
									<div style={{ fontSize: 14 }}>{r.comment}</div>
								</div>
								<ReviewStars value={r.rating} />
							</div>
						))}
					</div>
				</div>
				<div style={{ display: "flex", alignItems: "center", gap: 24, background: "#eee", borderRadius: 8, padding: 16 }}>
					<div style={{ flex: 1 }}>
						<span style={{ fontSize: "2rem", fontWeight: "bold" }}>{product.price}$</span>
						<span style={{ textDecoration: "line-through", color: "#888", marginLeft: 12 }}>{product.oldPrice}$</span>
					</div>
					<button style={{ fontSize: "1.2rem", padding: "12px 32px", borderRadius: 8, background: "#bdbdbd", border: "none", cursor: "pointer" }} onClick={onAddToCart}>
						Comprar Ahora
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductDetails;
