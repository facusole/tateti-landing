import React from "react";
import "../CSS/Footer.css";

export default function Footer() {
  return (
    <div className="mg-inline">
      {/* <span>Areas de trabajo</span>
      <span>Escuelas</span>
      <span>Quiénes somos</span> 
      De momento no van a aparecer en el footer porque no va a ser usado ahora*/}

      <img src="Image.png" alt="logo" />
      <div className="cuerpo">
        <p>
          Grupo Tateti es un un grupo de intervención comunitaria, que desde el
          2014 busca acompañar de manera integral las trayectorias
          socioeducativas de comunidades rurales.
        </p>

        <div className="redes">
          <img src="ButtonMail.png" />
          <a href="mailto: contacto@grupotateti.com" rel="noreferrer">
            contacto@grupotateti.com
          </a>
        </div>
        <div className="redes">
          <img src="ButtonIG.png" />
          <a
            href="https://www.instagram.com/grupo_tateti/"
            target="_blank"
            rel="noreferrer"
          >
            @grupo_tateti
          </a>
        </div>
        <div className="redes">
          <img src="ButtonLinked.png" />
          <a
            href="https://www.linkedin.com/company/grupo-tateti/about/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </div>
        <div className="redes">
          <img src="ButtonWsp.png" />
          <a
            href="https://wa.me/5491127454923"
            target="_blank"
            rel="noreferrer"
          >
            Whatsapp
          </a>
        </div>
        <div className="redes">
          <img src="ButtonTwitter.png" />
          <a
            href="https://twitter.com/grupotateti?lang=es"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </div>
        <div className="redes">
          <img src="ButtonYoutube.png" />
          <a
            href="https://www.youtube.com/channel/UCR7CLwgzXrW-uMoXxuPDzZQ"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
