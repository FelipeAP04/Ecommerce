import './Categories.css';
import React, { useState } from "react";
import CategoryPopup from "./CategoryPopup";
import { useNavigate } from "react-router-dom";
import products from "../data/products.json";

const categoryData = {
  "Consolas": products.filter((p) => p.id <= 5),
  "Controles y perifericos": products.filter((p) => p.id >= 6 && p.id <= 8),
  "Cables y repuestos": products.filter((p) => p.id >= 9 && p.id <= 13)
};

function Categories() {
  const [popup, setPopup] = useState({ open: false, title: "", items: [] });
  const navigate = useNavigate();

  const handleOpen = (title) => {
    setPopup({ open: true, title, items: categoryData[title] });
  };

  const handleClose = () => setPopup({ ...popup, open: false });

  return (
    <>
      <div className="categorias">
        <div className="categorias1" onClick={() => handleOpen("Consolas")} style={{ cursor: "pointer" }}>
          <img src="https://res.cloudinary.com/dfknt6m8i/image/upload/v1747965308/consolas_hbktt2.jpg" alt="Consolas" />
          <div className="tituloOlink">
            <h2 style={{ fontSize: '3rem', margin: 0 }}>Consolas</h2>
            <button className="cat-btn" type="button">Ir ahora</button>
          </div>
        </div>
        <div className="otros">
          <div className="categorias1" onClick={() => handleOpen("Controles y perifericos")} style={{ cursor: "pointer" }}>
            <img src="https://res.cloudinary.com/dfknt6m8i/image/upload/v1747965308/controles_hcqnlv.jpg" alt="Controles y perifericos" style={{ width: '235px' }} />
            <div className="tituloOlink">
              <div>Controles y<br />perifericos</div>
              <button className="cat-btn" type="button">Ir ahora</button>
            </div>
          </div>
          <div className="categorias1" onClick={() => handleOpen("Cables y repuestos")} style={{ cursor: "pointer" }}>
            <img src="https://res.cloudinary.com/dfknt6m8i/image/upload/v1747965308/cables_ruimcw.png" alt="Cables y repuestos" style={{ width: '235px', backgroundColor: '#E3804B', padding: '0 30px 0 30px' }} />
            <div className="tituloOlink">
              <div>Cables y<br />repuestos</div>
              <button className="cat-btn" type="button">Ir ahora</button>
            </div>
          </div>
        </div>
      </div>
      <CategoryPopup open={popup.open} onClose={handleClose} title={popup.title}
        items={popup.items.map((item) => ({
          ...item,
          onClick: () => navigate(`/producto/${item.id}`),
        }))}
      />
    </>
  );
}

export default Categories;
