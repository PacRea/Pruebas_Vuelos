import { useEffect, useState } from "react";
import "./componentsStyles.css";

function Vuelos() {
  const [claveVuelo, setClave] = useState([]);

  const API_URL = "http://mibackend.local/";

  useEffect(() => {
    fetch(API_URL + "obtener_vuelos.php")
      .then((res) => res.json())
      .then((data) => setClave(data));
  }, []);

  return (
    <div>
      <h2 className="titulo">Lista de vuelos</h2>
      <div className="contenedor">
        {claveVuelo.map((p) => (
          <div className="contenedor-contenido" key={p.clave}>
            <h3 className="indentificador">Numero de vuelo: {p.clave}</h3>
            <div className="datos">
              <p className="parrafo">Origen: {p.origen}</p>
              <p className="parrafo">Destino: {p.destino}</p>
            </div>
            <div className="datos">
              <p className="parrafo">Fecha: {p.fecha}</p>
              <p className="parrafo">Hora: {p.hora}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Vuelos;