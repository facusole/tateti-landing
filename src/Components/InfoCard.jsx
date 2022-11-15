import React from "react";
import "../CSS/InfoCard.css";

export default function InfoCard() {
  return (
    <div className='info'>
      <h3>Conocé al equipo</h3>
      <span className='circulitos'> ----circulitos----</span>
      <div className='pepe'>
        <h4>4</h4>
        <p>Escuelas</p>
      </div>
      <div className='pepe'>
        <h4>12</h4>
        <p>Viajes</p>
      </div>
      <div className='pepe'>
        <h4>3</h4>
        <p>Colaboradores</p>
      </div>
      <div className='pepe'>
        <h4>+30</h4>
        <p>Encomiendas</p>
      </div>
    </div>
  );
}
