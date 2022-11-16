import "../CSS/Main.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Titulo from "./Titulo";
import InfoCard from "./InfoCard";

function Main() {
  const Home = () => <h1>Home</h1>;

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main>
        <Titulo />
        <div>
          <InfoCard number={4} title={'Escuelas'}/>
          <InfoCard number={12} title={'Escuelas'}/>
          <InfoCard number={3} title={'Escuelas'}/>
          <InfoCard number={'+30'} title={'Escuelas'}/>
        </div>

      </main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Main;

