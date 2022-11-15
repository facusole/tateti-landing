import "../CSS/Main.css";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Titulo from "./Titulo";
import InfoCard from "./InfoCard";

function Main() {
  const Home = () => <h1>Home</h1>;
  const AreasTrabajo = () => <h1>Areas de Trabajo</h1>;

  return (
    <div className="App">
      <header>
        <Navbar />
        <nav>
          <Link to="/">
            <div className="logo"></div>
          </Link>
          <ul>
            <li>
              <Link to="/areas-de-trabajo">Áreas de trabajo</Link>
            </li>
            <li>
              <Link to="/escuelas">Escuelas</Link>
            </li>
            <li>
              <Link to="/quienes-somos">Quiénes somos</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Titulo />
        <InfoCard />
      </main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/areas-de-trabajo" element={<AreasTrabajo />} />
      </Routes>
    </div>
  );
}

export default Main;

