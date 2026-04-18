import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Contacto = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("¡Mensaje enviado correctamente!");
  };

  return (
    <div className="contacto-wrapper">

      {/* COLUMNA IZQUIERDA — INFO + MAPA */}
      <div className="contacto-info-box">
        <h2 className="contacto-title">Contacto</h2>

        <div className="contacto-info-item">
          <FaMapMarkerAlt className="contacto-icon" />
          <p>Av. Ejemplo 123, Ciudad, España</p>
        </div>

        <div className="contacto-info-item">
          <FaPhoneAlt className="contacto-icon" />
          <a href="tel:+34123456789" className="contacto-link">+34 123 456 789</a>
        </div>

        <div className="contacto-info-item">
          <FaEnvelope className="contacto-icon" />
          <a href="mailto:restaurante@correo.com" className="contacto-link">restaurante@correo.com</a>
        </div>

        <div className="contacto-info-item">
          <FaClock className="contacto-icon" />
          <p>Lunes a Domingo — 12:00–16:00 / 20:00–00:00</p>
        </div>

        <a 
          href="https://wa.me/34123456789"
          target="_blank"
          className="whatsapp-btn"
        >
          <FaWhatsapp /> WhatsApp
        </a>

        <div className="contacto-map">
          <iframe
            title="Mapa restaurante"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.123456789!2d-0.123456!3d37.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd123456789abcdef%3A0xabcdef123456789!2sRestaurante%20Ejemplo!5e0!3m2!1ses!2es!4v0000000000000"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* COLUMNA DERECHA — FORMULARIO */}
      <div className="contacto-form-box">
        <h2 className="contacto-title">Escríbenos</h2>

        <form id="contactForm" onSubmit={handleSubmit} className="contacto-form">
          
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" required />

          <button type="submit" className="contacto-btn">Enviar</button>

          <div className="form-message">{message}</div>
        </form>
      </div>

    </div>
  );
};

export default Contacto;
