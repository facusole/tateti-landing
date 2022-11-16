import React from "react";
import "../CSS/Actividades.css";

export default function Actividades() {
  return (
    <div>
      <h2>Construimos un vínculo con las comunidades</h2>
      <div className="container">
        <div>
          <img />
          <h3>Envío de encomiendas</h3>
          <p>
            Contienen alimentos, elementos de higiene y salud, útiles escolares,
            entre otros.
          </p>
        </div>

        <div>
          <img />
          <h3>Viajes</h3>
          <p>
            Visitamos las escuelas para conocer el territorio y entender su
            realidad social.
          </p>
        </div>

        <div>
          <img />
          <h3>Actividades lúdicas</h3>
          <p>
            Promovemos las actividades recreativas y artísticas desde un enfoque
            basado en el juego.
          </p>
        </div>
      </div>
    </div>
  );
}
