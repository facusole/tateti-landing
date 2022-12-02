import React from "react";
import Button from "./Button";
import '../CSS/Titulo.css'

export default function Titulo() {
  return (
    <div className="container-title mg-inline vertical-spacing">
      <div className="main-title">
        <h1>Transformamos la realidad social de escuelas rurales</h1>
        <p>
          Buscamos acortar la desigualdad de las infancias en las comunidades
          rurales en nuestro país.
        </p>
      </div>
      <div className="button">
        <Button />
      </div>
    </div>
  );
}