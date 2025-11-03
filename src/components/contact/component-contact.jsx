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
  const [values, setValues] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = (vals) => {
    const newErrors = {};

    if (!vals.from_name || vals.from_name.trim().length < 3) {
      newErrors.from_name = "El nombre debe tener al menos 3 caracteres";
    }

    if (!vals.reply_to) {
      newErrors.reply_to = "El correo es obligatorio";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(vals.reply_to)) {
      newErrors.reply_to = "El correo no es válido";
    }

    if (!vals.subject || vals.subject.trim().length < 3) {
      newErrors.subject = "El asunto debe tener al menos 3 caracteres";
    }

    if (!vals.message || vals.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    // Validación en tiempo real
    const validationErrors = validate({ ...values, [name]: value });
    setErrors(validationErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    if (!formRef.current) return;

    setStatus({ sending: true, message: "" });
    try {
      await sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus({ sending: false, message: "Mensaje enviado correctamente." });
      formRef.current.reset();
      setValues({ from_name: "", reply_to: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        sending: false,
        message: "Error al enviar el mensaje. Intenta nuevamente.",
      });
    }
  };

  const getInputClass = (field) => {
    if (errors[field]) return "input-error-border";
    if (values[field]) return "input-valid-border";
    return "";
  };

  return (
    <section className="contact-section">
      <Overlay variant="cover" />
      <h2 className="contact-title">Contacto</h2>
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <input type="hidden" name="to_email" value={TO_EMAIL} />

        <label>
          Nombre completo
          <input
            type="text"
            name="from_name"
            value={values.from_name}
            onChange={handleChange}
            className={getInputClass("from_name")}
          />
          {errors.from_name && (
            <span className="input-error">{errors.from_name}</span>
          )}
        </label>

        <label>
          Correo electrónico
          <input
            type="email"
            name="reply_to"
            value={values.reply_to}
            onChange={handleChange}
            className={getInputClass("reply_to")}
          />
          {errors.reply_to && (
            <span className="input-error">{errors.reply_to}</span>
          )}
        </label>

        <label>
          Asunto
          <input
            type="text"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            className={getInputClass("subject")}
          />
          {errors.subject && (
            <span className="input-error">{errors.subject}</span>
          )}
        </label>

        <label>
          Mensaje
          <textarea
            name="message"
            rows="5"
            value={values.message}
            onChange={handleChange}
            className={getInputClass("message")}
          />
          {errors.message && (
            <span className="input-error">{errors.message}</span>
          )}
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
        <CustomLink type="Obras" route="/mis-trabajos" variant="primary" />
      </div>
    </section>
  );
}
