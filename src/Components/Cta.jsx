import React from "react";
import Button from "./Button";
import '../CSS/Cta.css'

export default function Cta() {
  return (
    <div className="container-cta">
      <h2 className="section-title">
        Creemos que el acceso a una educación digna es un derecho fundamental.{" "}
      </h2>
      <Button />
    </div>
  );
}
