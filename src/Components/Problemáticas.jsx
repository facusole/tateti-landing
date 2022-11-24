import React from "react";
import IconCard from "./IconCard";
import image from '../Assets/tear.svg'
import image2 from '../Assets/estate.svg'
import image3 from '../Assets/users-alt.svg'
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
        <div className="icon-border"><IconCard img={image} title='Agua potable' /></div>
        <div className="icon-border"><IconCard img={image2} title='Infraestructura'  /></div>
        <div className="icon-border"><IconCard img={image3} title='Perspectiva de género' /></div>
      </div>
    </div>
  );
}
