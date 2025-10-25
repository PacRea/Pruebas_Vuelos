import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [claveVuelo, setClave] = useState([]);

  const API_URL = "http://mibackend.local/";

  useEffect(() => {
    fetch(API_URL + "obtener_vuelos.php")
      .then((res) => res.json())
      .then((data) => setClave(data));
  }, []);

  return (
    <div>
      <h2 className="titulo-vuelo">Lista de vuelos</h2>
      <div className="contenedor">
        {claveVuelo.map((p) => (
          <div className="contenedor-vuelos" key={p.clave}>
            <h3 className="clave-vuelo">Numero de vuelo: {p.clave}</h3>
            <div className="vuelos-dato">
              <p className="parrafo-vuelo">Origen: {p.origen}</p>
              <p className="parrafo-vuelo">Destino: {p.destino}</p>
            </div>
            <div className="vuelos-dato">
              <p className="parrafo-vuelo">Fecha: {p.fecha}</p>
              <p className="parrafo-vuelo">Hora: {p.hora}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
