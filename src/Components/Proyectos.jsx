import React from "react";
import "../CSS/Proyectos.css";

export default function Proyectos() {
  return (
    <div>
      <h2>Nuestras escuelas</h2>
      <p>Proporcionamos condiciones que faciliten el acceso a la educación. </p>

      <h2>Escuela N° 806 Chaco</h2>
      <p>
        En el 2017 pintamos toda la escuela y conseguimos un filtro de agua
        potable junto a Proyecto Agua Segura. En 2018 llevamos un taller de ESI
        con el objetivo de promover la salud.{" "}
      </p>

      <div>
        {/* <img /> */}
        <p>Taller de ESI</p>
      </div>

      <div>
        {/* <img /> */}
        <p>Filtro de agua </p>
      </div>
      <h2>Escuela N° 6195 Santa Fe</h2>
      <p>
        En 2022 dictamos un ciclo de talleres de ESI junto a Preservate,
        abordando temáticas de vínculos saludables, estereotipos de género e
        higiene menstrual.{" "}
      </p>
      <div>
        {/* <img /> */}
        <p>Ciclo con Preservate</p>
      </div>
      <div>
        {/* <img /> */}
        <p>Salud integral</p>
      </div>
    </div>
  );
}
