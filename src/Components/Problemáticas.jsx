import React from "react";
import IconCard from "./IconCard";
import drop from "../Assets/Drop-Linear-24px.svg";
import home from "../Assets/Home2-Linear-24px.svg";
import users from "../Assets/Profile2User-Linear-24px.svg";
import '../CSS/Problematicas.css'

export default function Problematicas() {
  return (
    <div className="container-problematicas mg-inline">
      <h2 className="section-title">Trabajamos en busca de la <span className="enfasis">equidad social</span> </h2>
      <p className="problematicas-text">
        Abordamos temáticas en relación con la alimentación, salud,
        infraestructura, acceso al agua potable y perspectiva de género.
      </p>
      <div className="icon-container">
        <div className="icon-border"><IconCard img={drop} title='Agua potable' /></div>
        <div className="icon-border"><IconCard img={home} title='Infraestructura'  /></div>
        <div className="icon-border"><IconCard img={users} title='Perspectiva de género' /></div>
      </div>
    </div>
  );
}
