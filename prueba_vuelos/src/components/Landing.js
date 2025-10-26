import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Vuelos from "./Visual/VuelosQuerys";
import Turistas from "./Visual/TuristasQuerys";
import Hoteles  from "./Visual/HotelesQuerys";
import Sucursal from "./Visual/SucursalQuerys";

function Landing() {
  return (
    <BrowserRouter>
      <header className="header">
        <h1>Agencias Pac</h1>
        <nav className="navegacion">
          <Link to="/vuelos" className="link">Vuelos</Link>
          <Link to="/turistas" className="link">Turistas</Link>
          <Link to="/hoteles" className="link">Hoteles</Link>
          <Link to="/sucursal" className="link">Sucursal</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/vuelos" element={<Vuelos />}></Route>
        <Route path="/turistas" element={<Turistas />}></Route>
        <Route path="/hoteles" element={<Hoteles/>}></Route>
        <Route path="/sucursal" element={<Sucursal/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Landing;
