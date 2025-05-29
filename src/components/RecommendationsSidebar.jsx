import RecommendedCard from "./RecommendedCard";

function RecommendationsSidebar({ visited, navigate }) {
	return (
		<div style={{ flex: 1, borderLeft: "1px solid #ddd", padding: "0 0 0 24px", minWidth: "300px", height: "100vh", position: "sticky", top: 0, display: "flex", flexDirection: "column", overflowY: "auto" }}>
			<h2 style={{ margin: "0 0 16px 0" }}>Te recomendamos estos productos</h2>
			<div style={{ display: "flex", flexDirection: "column", gap: 16, overflowY: "auto", flex: 1 }}>
				{visited.map((product) => (
					<RecommendedCard
						key={product.id}
						product={product}
						onClick={() => navigate(`/producto/${product.id}`)}
					/>
				))}
			</div>
			<button style={{ marginTop: 16, padding: "12px 24px", borderRadius: 8, background: "#bdbdbd", border: "none", cursor: "pointer", fontSize: "1rem" }} onClick={() => navigate("/")}>
				Ir a Inicio
			</button>
		</div>
	);
}

export default RecommendationsSidebar;
