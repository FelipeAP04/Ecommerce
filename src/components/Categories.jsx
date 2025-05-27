import './Categories.css';
import React, { useState } from "react";
import CategoryPopup from "./CategoryPopup";
import { useNavigate } from "react-router-dom";

const categoryData = {
  "Consolas": [
    { id: 1, name: "DSi", description: "Consola portátil de Nintendo", price: 45, img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1747965309/dsi_n02ibc.png" },
    { id: 2, name: "PSP", description: "Consola portátil de Sony", price: 75, img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1747965310/psp_fvik6q.png" },
    { id: 3, name: "NES", description: "Consola clásica de Nintendo", price: 60, img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1747965309/nes_k92zdy.png" },
    { id: 4, name: "Wii", description: "Consola de Nintendo con controles de movimiento", price: 75, img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1747965320/wii_org0cf.png" },
    { id: 5, name: "GameCube", description: "Consola compacta de Nintendo", price: 110, img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748382619/Restored-Nintendo-Gamecube-Game-Console-Platinum-with-Controller-and-Cables-Refurbished_1577430e-3038-4cbf-a545-6bf8cbfb165e_1.4221efd3f903a904753156e2441d66ef_gobpcs.webp" },
    { id: 6, name: "Dreamcast", description: "Consola innovadora de Sega", price: 120, img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748382710/dreamcast_tiuxsn.jpg" },
  ],
  "Controles y perifericos": [
    { id: 7, name: "Control NES", description: "Control clásico de NES", price: 20, img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748382785/Control_nes_oqoyv7.jpg" },
    { id: 8, name: "Control PS3", description: "Control inalámbrico de PS3", price: 30, img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748382831/Control_ps3_tjoodd.jpg" },
    { id: 9, name: "Control Wii", description: "Control de movimiento para Wii", price: 25, img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748382935/Control_wii_wymkrg.jpg" },
    { id: 10, name: "Control SNES", description: "Control clásico de SNES", price: 22, img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748382985/Control_snes_ohnt23.jpg" },
    { id: 11, name: "Teclado Dreamcast", description: "Teclado oficial para Dreamcast", price: 40, img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748383050/teclado_dreamcast_pui7gk.jpg" },
  ],
  "Cables y repuestos": [
    { id: 12, name: "Cable HDMI", description: "Cable HDMI de alta velocidad", price: 10, img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1747965309/hdmi_gdmbyr.jpg" },
    { id: 13, name: "Adaptador NES", description: "Adaptador de corriente para NES", price: 15, img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748383135/Corriente_nes_rgfzek.jpg" },
    { id: 14, name: "Cable AV", description: "Cable AV para consolas retro", price: 8, img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748383287/VGA_u6olpk.jpg" },
    { id: 15, name: "Batería PSP", description: "Batería de repuesto para PSP", price: 20, img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748383380/bateria_pb3pyu.webp" },
    { id: 16, name: "Fuente de poder Wii", description: "Fuente de poder para Wii", price: 25, img: "https://res.cloudinary.com/dfknt6m8i/image/upload/e_background_removal/f_png/v1748383516/Corriente_wii_x7wtwh.png" },
  ],
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
            <img src="https://res.cloudinary.com/dfknt6m8i/image/upload/v1747965308/controles_hcqnlv.jpg" alt="Controles y perifericos"  style={{width: '235px'}}/>
            <div className="tituloOlink">
              <div>Controles y<br />perifericos</div>
              <button className="cat-btn" type="button">Ir ahora</button>
            </div>
          </div>
          <div className="categorias1" onClick={() => handleOpen("Cables y repuestos")} style={{ cursor: "pointer" }}>
            <img src="https://res.cloudinary.com/dfknt6m8i/image/upload/v1747965308/cables_ruimcw.png" alt="Cables y repuestos" style={{width: '235px', backgroundColor: '#E3804B', padding: '0 30px 0 30px'}}/>
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
        items={popup.items.map((item) => ({
          ...item,
          onClick: () => navigate(`/producto/${item.id}`),
        }))}
      />
    </>
  );
}

export default Categories;
