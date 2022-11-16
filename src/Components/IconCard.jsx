import React from "react";
import "../CSS/IconCard.css";

export default function IconCard(props) {
  return (
    <div className="icon-container">
      <div className="iconCard">
          <img src={props.img}  alt='icon' className="icon"/>
          <h4 className="icon-title">{props.title}</h4>
          <p className="icon-text">{props.text}</p>
      </div>
    </div>

  );

}
