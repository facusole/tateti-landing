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
        <section className="bg-color-light vertical-spacing">
          <Navbar />
          <Titulo />
        </section>
      </header>
      <main>
        <section className="bg-color-dark vertical-spacing">
          <div className="container-cards mg-inline">
            <InfoCard number={4} title={"Escuelas"} />
            <InfoCard number={12} title={"Viajes"} />
            <InfoCard number={10} title={"Colaboradores"} />
            <InfoCard number={"+30"} title={"Envios"} />
            <InfoCard number={"+230"} title={"Encomiendas"} />
          </div>
        </section>
        <section className="bg-color-light vertical-spacing">
          <Problematicas />
        </section>
          <section className="bg-color-dark vertical-spacing">
            <Actividades />
          </section>
        <section className="bg-color-light vertical-spacing">
          <Proyectos />
        </section>
        <section className="bg-color-light vertical-spacing">
          <Cta />
        </section>
        <footer className="bg-color-dark vertical-spacing">
          <Footer />
        </footer>
      </main>

    </div>
  );
}

export default Main;
