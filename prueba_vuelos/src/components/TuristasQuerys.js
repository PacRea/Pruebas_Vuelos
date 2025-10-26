import { useEffect, useState } from "react";
import "./componentsStyles.css";

function Turistas() {
  const [pasaporte, setClave] = useState([]);

  const API_URL = "http://mibackend.local/";

  useEffect(() => {
    fetch(API_URL + "obtener_clientes.php")
      .then((res) => res.json())
      .then((data) => setClave(data));
  }, []);

  return (
    <div>
      <h2 className="titulo">Lista de Turistas</h2>
      <div className="contenedor">
        {pasaporte.map((p) => (
          <div className="contenedor-contenido" key={p.pasaporte}>
            <h3 className="indentificador">Pasaporte: {p.pasaporte}</h3>
            <div className="datos">
              <p className="parrafo">Nombre: {p.nombre}</p>
              <p className="parrafo">Apellido: {p.apellido}</p>
            </div>
            <div className="vuelos-dato">
              <p className="parrafo">Sucursal: {p.afiliado_sucursal}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Turistas;