import { useState } from 'react';

const Contacto = () => {
  const [message, setMessage] = useState('');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const slides = ['/imagenTemporal.avif', '/imagenTemporal.avif', '/imagenTemporal.avif'];

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('¡Mensaje enviado correctamente!');
  };

  const handlePrev = () => {
    setCarouselIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const handleNext = () => {
    setCarouselIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="contact-carousel-wrapper">
      <div className="contact-container">
        <h2>Contacto</h2>
        <form id="contactForm" onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" required />

          <button type="submit" id="enviarBtn">
            Enviar
          </button>
          <div id="formMessage">{message}</div>
        </form>
      </div>

      <div className="carousel-container">
        <div className="carousel">
          <img src={slides[carouselIndex]} alt={`Imagen del carrusel ${carouselIndex + 1}`} className="carousel-img carousel-img-active" />
        </div>
        <button className="carousel-btn prev" type="button" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="carousel-btn next" type="button" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Contacto;
