import { CustomLink } from "../custom-link/component-custom-link";
import { Overlay } from "../custom-overlay/component-custom-overlay";

import "./styles-contact.css";

export function ContactForm() {
  return (
    <>
      <section className="contact-section">
        <Overlay variant="cover" />
        <h2 className="contact-title">Contacto</h2>
        <form className="contact-form">
          <label>
            Nombre completo
            <input type="text" name="name" required />
          </label>
          <label>
            Correo electrónico
            <input type="email" name="email" required />
          </label>
          <label>
            Asunto
            <input type="text" name="subject" />
          </label>
          <label>
            Mensaje
            <textarea name="message" rows="5" required></textarea>
          </label>
          <button type="submit">Enviar mensaje</button>
        </form>
        <div className="contact-links-container">
          <CustomLink type="Home" route="/" variant="secondary" />
          <CustomLink
            type="Mis trabajos"
            route="/mis-trabajos"
            variant="primary"
          />
        </div>
      </section>
    </>
  );
}
