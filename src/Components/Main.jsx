import "../CSS/Main.css";
import Navbar from "./Navbar";
import Titulo from "./Titulo";
import InfoCard from "./InfoCard";
import Actividades from "./Actividades";
import Proyectos from './Proyectos'
import Cta from "./Cta";
import Footer from "./Footer";
import Problematicas from "./Problemáticas";

function Main() {

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Titulo />
        <div className="cards">
          <InfoCard number={4} title={"Escuelas"} />
          <InfoCard number={12} title={"Viajes"} />
          <InfoCard number={3} title={"Colaboradores"} />
          <InfoCard number={"+30"} title={"Encomiendas"} />
        </div>
        <Problematicas />
        <Actividades />
        <Proyectos />
        <Cta />
        <Footer />
      </main>

    </div>
  );
}

export default Main;
