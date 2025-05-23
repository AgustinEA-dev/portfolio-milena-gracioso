import { CustomLink } from "../custom-link/component-custom-link";

import "./styles-cover.css";

export function Cover() {
  return (
    <section className="cover">
      <div className="cover-container">
        <div className="cover-overlay"></div>
        <div className="cover-text-container">
          <h1 className="cover-title">MILENA GRACIOSO</h1>
          <article className="cover-article">
            Estudiante de teatro apasionada por el arte escénico y la
            exploración de personajes.
          </article>
          <div className="cover-links-container">
            <CustomLink type="Contacto" route="/contacto" variant="secondary" />
            <CustomLink
              type="Mis trabajos"
              route="/mis-trabajos"
              variant="primary"
            />
          </div>
        </div>
        <div class="cover-gradient-bottom"></div>
      </div>
    </section>
  );
}
