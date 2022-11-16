import "../CSS/Main.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Titulo from "./Titulo";
import InfoCard from "./InfoCard";
import Actividades from "./Actividades";
import Cta from "./Cta";
import Footer from "./Footer";

function Main() {
  const Home = () => <h1>Home</h1>;

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main>
        <Titulo />
        <InfoCard number={4} title={"Escuelas"} />
        <InfoCard number={12} title={"Viajes"} />
        <InfoCard number={3} title={"Colaboradores"} />
        <InfoCard number={"+30"} title={"Encomiendas"} />
        <Actividades />
        <Cta />
        <Footer />
      </main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Main;
