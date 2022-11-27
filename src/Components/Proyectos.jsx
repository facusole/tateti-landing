import { Drop } from "iconsax-react";
import React from "react";
import "../CSS/Proyectos.css";

export default function Proyectos() {
  return (
    <div className="mg-inline ">
      <div className="first-text">
        {" "}
        <h2>
          <Drop />
          Nuestras escuelas
        </h2>
        <p>
          Proporcionamos condiciones que faciliten el acceso a la educación.{" "}
        </p>
      </div>
      <div className="text-proyectos">
        <h2>Escuela N° 806 Chaco</h2>
        <p>
          En el 2017 pintamos toda la escuela y conseguimos un filtro de agua
          potable junto a Proyecto Agua Segura.
        </p>
        <p>
          {" "}
          En 2018 llevamos un taller de ESI con el objetivo de promover la
          salud.{" "}
        </p>
      </div>

      <div className="img-container1">
        <img src="image.png" alt="imgTateti" className="imgTateti1" />
        <div className="name-img1">
          <img src="ButtonTilde.png" />
          <p className="title-img">Taller de ESI</p>
        </div>
      </div>

      <div className="img-container2">
        <img src="image.png" alt="imgTateti" className="imgTateti2" />
        <div className="name-img2">
          <img src="ButtonTilde.png" />{" "}
          <p className="title-img">Filtro de agua </p>
        </div>
      </div>
      <div className="text-proyectos">
        <h2>Escuela N° 6195 Santa Fe</h2>
        <p>
          En 2022 dictamos un ciclo de talleres de ESI junto a Preservate,
          abordando temáticas de vínculos saludables, estereotipos de género e
          higiene menstrual.{" "}
        </p>
      </div>
      <div className="img-container1">
        <img src="image.png" alt="imgTateti" className="imgTateti1" />
        <div className="name-img1">
          <img src="ButtonTilde.png" />{" "}
          <p className="title-img">Ciclo con Preservate</p>
        </div>
      </div>

      <div className="img-container2">
        <img src="image.png" alt="imgTateti" className="imgTateti2" />
        <div className="name-img2">
          <img src="ButtonTilde.png" />{" "}
          <p className="title-img">Salud integral</p>
        </div>
      </div>
    </div>
  );
}
