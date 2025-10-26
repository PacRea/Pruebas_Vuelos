import { useEffect, useState } from "react";
import "../componentsStyles.css";

function Hoteles() {
  const [claveHotel, setClave] = useState([]);

  const API_URL = "http://mibackend.local/hotel/";

  useEffect(() => {
    fetch(API_URL + "obtener_hoteles.php")
      .then((res) => res.json())
      .then((data) => setClave(data));
  }, []);

  return (
    <div>
      <h2 className="titulo">Lista de Turistas</h2>
      <div className="contenedor">
        {claveHotel.map((p) => (
          <div className="contenedor-contenido" key={p.hotel_codigo}>
            <h3 className="indentificador">Codigo del Hotel: {p.hotel_codigo}</h3>
            <div className="datos">
              <p className="parrafo">Nombre: {p.nombre}</p>
              <p className="parrafo">Ciudad: {p.ciudad}</p>
            </div>
            <div className="vuelos-dato">
              <p className="parrafo">Telefono: {p.telefono}</p>
              <p className="parrafo">Plazas: {p.plazas ?? "0"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Hoteles;