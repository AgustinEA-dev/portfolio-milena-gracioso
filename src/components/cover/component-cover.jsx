import { Link } from "react-router-dom";

import { NavBar } from "./component-nav";

import "./styles-cover.css";

export function Cover() {
  return (
    <section className="cover">
      <NavBar />
      <div className="cover-container">
        <div className="cover-overlay"></div>
        <div className="cover-text-container">
          <h1 className="cover-title">MILENA GRACIOSO</h1>
          <article className="cover-article">
            Estudiante de teatro apasionada por el arte escénico y la
            exploración de personajes.
          </article>
          <div className="cover-links-container">
            <a className="link-contact" href="#">
              Contacto
            </a>
            <Link className="link-work" to="/mis-trabajos">
              Mi trabajo
            </Link>
          </div>
          <div className="grid-imgs">
            <img src="/assets/imgs/bernarda-alba-foto4.jpeg" alt="Imagen 1" />
          </div>
        </div>
        <div class="cover-gradient-bottom"></div>
      </div>
    </section>
  );
}
