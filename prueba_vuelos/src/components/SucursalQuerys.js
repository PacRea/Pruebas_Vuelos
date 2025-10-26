import { useEffect, useState } from "react";
import "./componentsStyles.css";

function Sucursal() {
  const [pasaporte, setClave] = useState([]);

  const API_URL = "http://mibackend.local/";

  useEffect(() => {
    fetch(API_URL + "obtener_sucursal.php")
      .then((res) => res.json())
      .then((data) => setClave(data));
  }, []);

  return (
    <div>
      <h2 className="titulo">Lista de Turistas</h2>
      <div className="contenedor">
        {pasaporte.map((p) => (
          <div className="contenedor-contenido" key={p.sucursal_codigo}>
            <h3 className="indentificador">Codigo de la Sucursal: {p.sucursal_codigo}</h3>
            <div className="datos">
              <p className="parrafo">Calle: {p.calle}</p>
              <p className="parrafo">Numero: {p.numero}</p>
            </div>
            <div className="vuelos-dato">
              <p className="parrafo">Codigo Postal: {p.cp}</p>
              <p className="parrafo">Telefono: {p.telefono}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Sucursal;