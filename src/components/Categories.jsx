import './Categories.css';
import React, { useState } from "react";
import CategoryPopup from "./CategoryPopup";

const categoryInfo = {
  "Consolas": "Aquí puedes encontrar consolas retro de diferentes generaciones.",
  "Controles y perifericos": "Explora controles y periféricos compatibles con tus consolas favoritas.",
  "Cables y repuestos": "Encuentra cables, adaptadores y repuestos para tus dispositivos retro."
};

function Categories() {
  const [popup, setPopup] = useState({ open: false, title: "", content: "" });

  const handleOpen = (title) => {
    setPopup({ open: true, title, content: categoryInfo[title] });
  };

  const handleClose = () => setPopup({ ...popup, open: false });

  return (
    <>
      <div className="categorias">
        <div className="categorias1" onClick={() => handleOpen("Consolas")} style={{ cursor: "pointer" }}>
          <img src="/assets/consolas.jpg" alt="Consolas" />
          <div className="tituloOlink">
            <h2 style={{ fontSize: '3rem', margin: 0 }}>Consolas</h2>
            <button className="cat-btn" type="button">Ir ahora</button>
          </div>
        </div>
        <div className="otros">
          <div className="categorias1" onClick={() => handleOpen("Controles y perifericos")} style={{ cursor: "pointer" }}>
            <img src="/assets/controles.jpg" alt="Controles y perifericos" />
            <div className="tituloOlink">
              <div>Controles y<br />perifericos</div>
              <button className="cat-btn" type="button">Ir ahora</button>
            </div>
          </div>
          <div className="categorias1" onClick={() => handleOpen("Cables y repuestos")} style={{ cursor: "pointer" }}>
            <img src="/assets/cables.jpg" alt="Cables y repuestos" />
            <div className="tituloOlink">
              <div>Cables y<br />repuestos</div>
              <button className="cat-btn" type="button">Ir ahora</button>
            </div>
          </div>
        </div>
      </div>
      <CategoryPopup
        open={popup.open}
        onClose={handleClose}
        title={popup.title}
      >
        {popup.content}
      </CategoryPopup>
    </>
  );
}

export default Categories;
