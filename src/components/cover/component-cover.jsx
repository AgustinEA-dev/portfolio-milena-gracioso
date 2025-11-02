import { CustomLink } from "../custom-link/component-custom-link";
import { Overlay } from "../custom-overlay/component-custom-overlay";
import cloudImages from "../../data/cloudinary_images.json";
import { useState, useEffect } from "react";

import "./styles-cover.css";

export function Cover() {
  const portadaKey = "assets/imgs/portada.JPG"; // exactamente igual al JSON
  const portadaUrl = cloudImages[portadaKey];

  const [bgImage, setBgImage] = useState(portadaUrl);

  useEffect(() => {
    setBgImage(portadaUrl);
  }, [portadaUrl]);

  return (
    <section className="cover">
      <div
        className="cover-container"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <Overlay variant="cover" />
        <div className="cover-text-container">
          <h1 className="cover-title">MILENA GRACIOSO</h1>
          <article className="cover-article">
            Estudiante de teatro apasionada por el arte escénico y la
            exploración de personajes.
          </article>
          <div className="cover-links-container">
            <CustomLink type="Contacto" route="/contacto" variant="secondary" />
            <CustomLink
              type="Ver obras"
              route="/mis-trabajos"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
