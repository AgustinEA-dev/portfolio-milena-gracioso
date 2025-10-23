import { plays } from "../../data/plays";
import { PlayItem } from "./component-play-item";
import { CustomLink } from "../custom-link/component-custom-link";
import { Overlay } from "../custom-overlay/component-custom-overlay";

import "./styles-work-section.css";

export function WorkSection() {
  return (
    <section className="section-my-work">
      <Overlay />
      <h1>Mis trabajos</h1>
      <div className="work-grid">
        {plays.map((obra) => (
          <PlayItem key={obra.id} {...obra} modo="preview" />
        ))}
      </div>
      <div className="work-links-container">
        <CustomLink type="Home" route="/" variant="secondary" />
        <CustomLink type="Contacto" route="/contacto" variant="primary" />
      </div>
    </section>
  );
}
