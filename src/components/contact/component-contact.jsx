// ...existing code...
import React, { useRef, useState } from "react";
import { sendForm, init } from "@emailjs/browser";

import { CustomLink } from "../custom-link/component-custom-link";
import { Overlay } from "../custom-overlay/component-custom-overlay";

import "./styles-contact.css";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "TU_SERVICE_ID";
const TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "TU_TEMPLATE_ID";
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "TU_PUBLIC_KEY";
const TO_EMAIL =
  process.env.REACT_APP_EMAILJS_TO_EMAIL || "tu_destino@ejemplo.com";

init(PUBLIC_KEY);

export function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ sending: false, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus({ sending: true, message: "" });

    try {
      await sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus({ sending: false, message: "Mensaje enviado correctamente." });
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        sending: false,
        message: "Error al enviar el mensaje. Intenta nuevamente.",
      });
    }
  };

  return (
    <>
      <section className="contact-section">
        <Overlay variant="cover" />
        <h2 className="contact-title">Contacto</h2>
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          {/* campo oculto para indicar destinatario a la plantilla EmailJS */}
          <input type="hidden" name="to_email" value={TO_EMAIL} />

          <label>
            Nombre completo
            <input type="text" name="from_name" required />
          </label>
          <label>
            Correo electrónico
            <input type="email" name="reply_to" required />
          </label>
          <label>
            Asunto
            <input type="text" name="subject" />
          </label>
          <label>
            Mensaje
            <textarea name="message" rows="5" required></textarea>
          </label>
          <button type="submit" disabled={status.sending}>
            {status.sending ? "Enviando..." : "Enviar mensaje"}
          </button>
          {status.message && (
            <p className="contact-status" role="status">
              {status.message}
            </p>
          )}
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
// ...existing code...
