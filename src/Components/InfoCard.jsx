import React from "react";
import "../CSS/InfoCard.css";

export default function InfoCard(props) {
  return (
    <div className="container-card">
      <div className="infoCard">
          <h3>{props.number}</h3>
          <h4>{props.title}</h4>
      </div>
    </div>

  );

}
