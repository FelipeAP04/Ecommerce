import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import ReviewStars from "../components/ReviewStars";
import FavoriteButton from "../components/FavoriteButton";
import CartButton from "../components/CartButton";

const products = [
	{
		id: 1,
		name: "DSi",
		description: "Consola portátil de Nintendo",
		price: 45,
		img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1747965309/dsi_n02ibc.png",
		options: ["Rojo", "Azul", "Negro"],
		reviews: [
			{ user: "User1", comment: "Great product!", rating: 5 },
			{
				user: "User5",
				comment: "NO ME FUNCIONA LA CONSOLA QUE ME ENVIARON! porlomenos es bonita",
				rating: 1,
			},
			{
				user: "User16",
				comment: "Me gustó mucho esta consola, me trae recuerdos de mi infancia",
				rating: 4,
			},
			{
				user: "User42",
				comment: "Vino en exelentes condiciones, limpia, sin rallones ni manchas",
				rating: 5,
			},
		],
	},
	{
		id: 2,
		name: "PSP",
		description: "Consola portátil de Sony",
		price: 75,
		img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1747965310/psp_fvik6q.png",
		options: ["Blanco", "Negro"],
		reviews: [
			{
				user: "User7",
				comment: "La PSP es increíble, la pantalla es nítida y la batería dura bastante.",
				rating: 5,
			},
			{ user: "User50", comment: "Battery life is terrible, but the design is sleek.", rating: 2 },
			{
				user: "User21",
				comment: "Perfect for emulators and retro games on the go!",
				rating: 4,
			},
			{
				user: "User38",
				comment: "Se recalienta mucho al jugar por más de una hora.",
				rating: 3,
			},
		],
	},
	{
		id: 3,
		name: "NES",
		description: "Consola clásica de Nintendo",
		price: 60,
		img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1747965309/nes_k92zdy.png",
		options: ["Original", "Edición limitada"],
		reviews: [
			{
				user: "User23",
				comment: "The NES still works perfectly after all these years, a true classic!",
				rating: 5,
			},
			{ user: "User9", comment: "No enciende, parece que necesita reparación.", rating: 1 },
			{
				user: "User44",
				comment: "Incluye 72 juegos en cartucho multicaja. ¡Increíble!",
				rating: 5,
			},
		],
	},
	{
		id: 4,
		name: "Wii",
		description: "Consola de Nintendo con controles de movimiento",
		price: 75,
		img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1747965320/wii_org0cf.png",
		options: ["Blanco", "Negro"],
		reviews: [
			{
				user: "User12",
				comment: "La Wii es divertida, pero el sensor a veces no responde bien.",
				rating: 3,
			},
			{ user: "User41", comment: "Perfect condition, includes all cables!", rating: 5 },
			{ user: "User5", comment: "El puerto SD no funciona, no puedo cargar juegos.", rating: 2 },
			{
				user: "User30",
				comment: "Ideal para jugar con la familia. Mario Kart nunca falla.",
				rating: 4,
			},
			{ user: "User16", comment: "Le faltaban tornillos al llegar. Devolución.", rating: 1 },
		],
	},
	{
		id: 5,
		name: "GameCube",
		description: "Consola compacta de Nintendo",
		price: 110,
		img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748382619/Restored-Nintendo-Gamecube-Game-Console-Platinum-with-Controller-and-Cables-Refurbished_1577430e-3038-4cbf-a545-6bf8cbfb165e_1.4221efd3f903a904753156e2441d66ef_gobpcs.webp",
		options: ["Morado", "Negro"],
		reviews: [
			{ user: "User34", comment: "GameCube is a beast! The games look amazing even today.", rating: 5 },
			{ user: "User18", comment: "El lector de discos ya no funciona bien.", rating: 2 },
			{ user: "User27", comment: "El puerto de la memoria está dañado. No recomiendo.", rating: 1 },
		],
	},
	{
		id: 6,
		name: "Dreamcast",
		description: "Consola innovadora de Sega",
		price: 120,
		img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748382710/dreamcast_tiuxsn.jpg",
		options: ["Blanco"],
		reviews: [
			{
				user: "User8",
				comment: "DreamCast fue adelantada a su época, lastima que ya no hay juegos nuevos.",
				rating: 4,
			},
			{ user: "User29", comment: "Works flawlessly, VMU included!", rating: 5 },
			{
				user: "User13",
				comment: "El lector GD-ROM hace ruidos raros, pero aún funciona.",
				rating: 3,
			},
		],
	},
	{
		id: 7,
		name: "Control NES",
		description: "Control clásico de NES",
		price: 20,
		img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748382785/Control_nes_oqoyv7.jpg",
		options: ["Original"],
		reviews: [
			{
				user: "User19",
				comment: "El control de NES es original y funciona bien, aunque está un poco gastado.",
				rating: 4,
			},
			{ user: "User33", comment: "D-pad is stiff, needs cleaning.", rating: 2 },
			{
				user: "User47",
				comment: "¡Es una réplica china! No es original como decían.",
				rating: 1,
			},
			{
				user: "User22",
				comment: "Los botones son sensibles y precisos. Excelente.",
				rating: 5,
			},
		],
	},
	{
		id: 8,
		name: "Control PS3",
		description: "Control inalámbrico de PS3",
		price: 30,
		img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748382831/Control_ps3_tjoodd.jpg",
		options: ["Negro", "Blanco"],
		reviews: [
			{
				user: "User45",
				comment: "PS3 controller works wirelessly but the analog sticks are a bit loose.",
				rating: 3,
			},
			{ user: "User2", comment: "Como nuevo, batería dura mucho.", rating: 5 },
			{
				user: "User10",
				comment: "El Sixaxis no funciona, solo es compatible por cable.",
				rating: 2,
			},
		],
	},
	{
		id: 9,
		name: "Cable HDMI",
		description: "Cable HDMI de alta velocidad",
		price: 10,
		img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1747965309/hdmi_gdmbyr.jpg",
		options: ["1m", "2m"],
		reviews: [
			{
				user: "User3",
				comment: "El cable HDMI es de buena calidad, sin interferencias en la imagen.",
				rating: 5,
			},
			{ user: "User10", comment: "Se calienta demasiado al usarlo.", rating: 2 },
			{
				user: "User24",
				comment: "4K HDR compatible. Crystal clear visuals.",
				rating: 5,
			},
			{ user: "User39", comment: "Dejó de funcionar después de 2 semanas.", rating: 1 },
		],
	},
	{
		id: 10,
		name: "Control Wii",
		description: "Control de movimiento para Wii",
		price: 25,
		img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748382935/Control_wii_wymkrg.jpg",
		options: ["Blanco", "Negro"],
		reviews: [
			{
				user: "User27",
				comment: "Control de Wii en perfecto estado, el motion sensing es preciso.",
				rating: 5,
			},
			{ user: "User15", comment: "No funciona el botón 'B', necesita reparación.", rating: 1 },
			{ user: "User36", comment: "Incluye funda protectora. Buen precio.", rating: 4 },
		],
	},
	{
		id: 11,
		name: "Control SNES",
		description: "Control clásico de SNES",
		price: 22,
		img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748382985/Control_snes_ohnt23.jpg",
		options: ["Original"],
		reviews: [
			{
				user: "User14",
				comment: "El control de SNES es cómodo y los botones responden bien.",
				rating: 4,
			},
			{ user: "User6", comment: "Fake replica, not original.", rating: 1 },
			{
				user: "User42",
				comment: "Los cables están enredados y sucios, pero funciona.",
				rating: 3,
			},
			{
				user: "User20",
				comment: "Auténtico y en caja original. ¡Una joya!",
				rating: 5,
			},
		],
	},
	{
		id: 12,
		name: "Teclado Dreamcast",
		description: "Teclado oficial para Dreamcast",
		price: 40,
		img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748383050/teclado_dreamcast_pui7gk.jpg",
		options: ["Blanco"],
		reviews: [
			{
				user: "User31",
				comment: "El teclado de DreamCast es raro de conseguir, pero funciona bien para juegos como Phantasy Star.",
				rating: 4,
			},
			{ user: "User25", comment: "Missing some keys, unusable.", rating: 1 },
			{
				user: "User48",
				comment: "Perfecto para escribir códigos en juegos antiguos.",
				rating: 5,
			},
		],
	},
	{
		id: 13,
		name: "Adaptador NES",
		description: "Adaptador de corriente para NES",
		price: 15,
		img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748383135/Corriente_nes_rgfzek.jpg",
		options: ["Original"],
		reviews: [
			{ user: "User6", comment: "El adaptador de NES no funciona bien, la consola no enciende.", rating: 1 },
			{ user: "User17", comment: "Works perfectly with my Famicom!", rating: 5 },
			{ user: "User26", comment: "Cable demasiado corto, pero hace su trabajo.", rating: 3 },
		],
	},
	{
		id: 14,
		name: "Cable AV",
		description: "Cable AV para consolas retro",
		price: 8,
		img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748383287/VGA_u6olpk.jpg",
		options: ["1m", "2m"],
		reviews: [
			{
				user: "User22",
				comment: "Cable AV de buena calidad, pero la imagen no es tan clara como HDMI.",
				rating: 3,
			},
			{ user: "User4", comment: "Se ve borroso en mi TV moderna.", rating: 2 },
			{
				user: "User37",
				comment: "Funciona bien para CRT TVs. Justo lo que necesitaba.",
				rating: 4,
			},
		],
	},
	{
		id: 15,
		name: "Batería PSP",
		description: "Batería de repuesto para PSP",
		price: 20,
		img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748383380/bateria_pb3pyu.webp",
		options: ["Original"],
		reviews: [
			{
				user: "User40",
				comment: "La batería de PSP dura poco, necesito cargarla muy seguido.",
				rating: 2,
			},
			{ user: "User13", comment: "Holds charge well, just like new.", rating: 4 },
			{
				user: "User49",
				comment: "Se hinchó después de 3 meses. Peligroso.",
				rating: 1,
			},
			{ user: "User11", comment: "Batería de terceros, pero cumple su función.", rating: 3 },
		],
	},
	{
		id: 16,
		name: "Fuente de poder Wii",
		description: "Fuente de poder para Wii",
		price: 25,
		img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748383516/Corriente_wii_x7wtwh.png",
		options: ["Original"],
		reviews: [
			{
				user: "User11",
				comment: "Fuente de poder de Wii original, funciona sin problemas.",
				rating: 5,
			},
			{ user: "User28", comment: "Hace un ruido extraño al conectarla.", rating: 2 },
			{
				user: "User32",
				comment: "No es compatible con Wii Mini. Error en la descripción.",
				rating: 1,
			},
			{
				user: "User35",
				comment: "Voltaje estable, sin sobrecalentamiento.",
				rating: 5,
			},
		],
	},
];

function ProductDetailPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { addToCart } = useCart();
	const product = products.find((p) => p.id === parseInt(id));

	if (!product) {
		return <div>Producto no encontrado</div>;
	}

	const handleAddToCart = () => {
		addToCart({ ...product, quantity: 1 });
		navigate("/carrito");
	};

	return (
		<div
			style={{
				display: "flex",
				gap: 32,
				padding: 32,
				minHeight: "100vh",
				boxSizing: "border-box",
			}}
		>
			{/* Left column */}
			<div
				style={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					height: "100%",
				}}
			>
				<h1 style={{ fontSize: "3rem", margin: 0 }}>{product.name}</h1>
				<div
					style={{
						background: "#ddd",
						padding: 16,
						borderRadius: 8,
						margin: "16px 0",
						flex: 1,
						minHeight: 300,
						display: "flex",
						alignItems: "center",
					}}
				>
					<span style={{ fontSize: "2rem" }}>{product.description}</span>
				</div>
				<img
					src={product.img}
					alt={product.name}
					style={{
						width: 400,
						height: 400,
						objectFit: "contain", // Change from "cover" to "contain"
						borderRadius: 24,
						border: "2px solid #bbb",
					}}
				/>
			</div>
			{/* Right column */}
			<div
				style={{
					flex: 2,
					display: "flex",
					flexDirection: "column",
					gap: 24,
					minHeight: "calc(100vh - 64px)",
					height: "100%",
				}}
			>
				<div
					style={{
						flex: 1,
						display: "flex",
						flexDirection: "column",
						gap: 24,
					}}
				>
					{/* Product options */}
					<div
						style={{
							background: "#ddd",
							borderRadius: 8,
							padding: 16,
							flex: 1,
							display: "flex",
							flexDirection: "column",
						}}
					>
						<div
							style={{
								marginBottom: 12,
								fontWeight: "bold",
								fontSize: "2rem",
							}}
						>
							Opciones del producto (Color, tipo, tamaño, etc.)
						</div>
						<div style={{ display: "flex", gap: 16 }}>
							{product.options.map((opt, idx) => (
								<button
									key={idx}
									style={{
										width: 250,
										height: 250,
										border: "2px solid #888",
										borderRadius: 12,
										background: "#fff",
									}}
								>
									{opt}
								</button>
							))}
						</div>
					</div>
					{/* Reviews */}
					<div
						style={{
							background: "#eee",
							borderRadius: 8,
							padding: 16,
							flex: 2,
							overflowY: "auto",
							display: "flex",
							flexDirection: "column",
						}}
					>
						{product.reviews.map((r, idx) => (
							<div
								key={idx}
								style={{
									display: "flex",
									alignItems: "center",
									marginBottom: 12,
								}}
							>
								<div
									style={{
										width: 40,
										height: 40,
										borderRadius: "50%",
										background: "#ccc",
										marginRight: 12,
									}}
								/>
								<div style={{ flex: 1 }}>
									<div style={{ fontWeight: "bold" }}>{r.user}</div>
									<div style={{ fontSize: 14 }}>{r.comment}</div>
								</div>
								<ReviewStars value={r.rating} />
							</div>
						))}
					</div>
				</div>
				{/* Price and buy */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 24,
						background: "#eee",
						borderRadius: 8,
						padding: 16,
					}}
				>
					<div style={{ flex: 1 }}>
						<span
							style={{
								fontSize: "2rem",
								fontWeight: "bold",
							}}
						>
							{product.price}$
						</span>
						<span
							style={{
								textDecoration: "line-through",
								color: "#888",
								marginLeft: 12,
							}}
						>
							{product.oldPrice}$
						</span>
					</div>
					<button
						style={{
							fontSize: "1.2rem",
							padding: "12px 32px",
							borderRadius: 8,
							background: "#bdbdbd",
							border: "none",
							cursor: "pointer",
						}}
						onClick={handleAddToCart}
					>
						Comprar Ahora
					</button>
					<FavoriteButton />
				</div>
			</div>
		</div>
	);
}

export default ProductDetailPage;
