import React from "react";
import { Link } from "react-router-dom";

import "./styles-hero.css";

export function Cover() {
  return (
    <div className="cover-container">
      <div className="cover-overlay"></div>
      <div className="cover-text-container">
        <h1 className="cover-title">
          MILENA <br />
          GRACIOSO
        </h1>
        <article className="cover-article">
          Estudiante de teatro apasionada por el arte escénico y la exploración
          de personajes.
        </article>
        <div className="cover-links-container">
          <a className="link-contact" href="#">
            Contacto
          </a>
          <Link className="link-work" to="/mis-trabajos">
            Mi trabajo
          </Link>
        </div>
      </div>
    </div>
  );
}
