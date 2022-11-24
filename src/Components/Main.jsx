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
        <Titulo />
      </header>
      <main>
        <section className="bg-color-dark">
          <div className="container-cards mg-inline">
            <InfoCard number={4} title={"Escuelas"} />
            <InfoCard number={12} title={"Viajes"} />
            <InfoCard number={10} title={"Colaboradores"} />
            <InfoCard number={"+30"} title={"Envios"} />
            <InfoCard number={"+230"} title={"Encomiendas"} />
          </div>
        </section>
        <section className="bg-color-light">
          <Problematicas />
        </section>
          <section className="bg-color-dark">
            <Actividades />
          </section>
        <section className="bg-color-light">
          <Proyectos />
        </section>
        <section className="bg-color-light">
          <Cta />
        </section>
        <footer className="bg-color-dark">
          <Footer />
        </footer>
      </main>

    </div>
  );
}

export default Main;
