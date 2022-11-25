import React from "react";
import "../CSS/Actividades.css";
import IconCard from "./IconCard";
import image from "../Assets/users-alt.svg";

export default function Actividades() {
  return (
    <div className="container-actividades">
      <h2 className="section-title">
        Construimos un vínculo con{" "}
        <span className="enfasis">las comunidades</span>{" "}
      </h2>
      <div className="container-cards-act">
        <div className="card-actividades">
          <IconCard
            img={image}
            title="Envio de encomiendas"
            text="Contienen alimentos, elementos de higiene y salud, útiles escolares,
            entre otros."
          />
        </div>

        <div>
          <IconCard
            img={image}
            title="Viajes"
            text="Visitamos las escuelas para conocer el territorio y entender su
            realidad social."
          />
        </div>

        <div>
          <IconCard
            img={image}
            title="Actividades lúdicas"
            text="Promovemos las actividades recreativas y artísticas desde un enfoque
            basado en el juego."
          />
        </div>
      </div>
    </div>
  );
}
