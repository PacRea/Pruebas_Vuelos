import "./componentsStyles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Insert() {
  return (
    <div className="tablas-contenedor">
      <h2>Seleccione una tabla a insertar</h2>
      <div className="tablas">
        <h3 className="tablas-link">Vuelo</h3>
        <h3 className="tablas-link">Turistas</h3>
        <h3 className="tablas-link">Hoteles</h3>
        <h3 className="tablas-link">Sucursal</h3>
      </div>
    </div>
  );
}
export default Insert;
