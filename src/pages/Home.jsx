import { useEffect, useState } from "react";
import burguer1 from "/burguer1.png";
import burguer2 from "/burguer2.png";

const Home = () => {
  const slides = [burguer1, burguer2, burguer1, burguer2];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-wrapper">

      {/* ================= HERO PRINCIPAL ================= */}
      <section className="hero-section">

  <div className="hero-bg"></div>

  <div className="hero-content">

    {/* IZQUIERDA: TEXTO / CARD */}
    <div className="hero-left">
      <h1 className="hero-title">Smash Avenida</h1>
      <p className="hero-subtitle">
        La burger más icónica de Avenida 50. Carne madurada, pan brioche y sabor explosivo.
      </p>

      <div className="hero-buttons">
        <a href="/pedido" className="hero-btn">QUIERO MI BURGER</a>
        <a href="/carta" className="hero-btn-outline">VER CARTA</a>
      </div>
    </div>

    {/* DERECHA: CARRUSEL */}
    <div className="hero-right">

      {/* TEXTO ARRIBA DEL CARRUSEL */}
      <p className="hero-choose">Elige la Hamburguesa que más te guste</p>

      {/* TEXTO SINCRONIZADO CON EL CARRUSEL */}
      <h3 className="hero-burger-name">
        {index === 0 || index === 2 ? "La Avenida" : "La Retinto"}
      </h3>

      <img
        src={slides[index]}
        alt="Hamburguesa"
        className="hero-burger"
      />
    </div>

  </div>
</section>

      {/* ================= SECCIÓN PRESENTACIÓN ================= */}
      <section className="intro-section">
        <h2 className="intro-title">Bienvenido a Avenida 50</h2>
        <p className="intro-text">
          Burgers hechas con pasión, ingredientes premium y un estilo único.
        </p>
        <p className="intro-text">
          Prueba combinaciones explosivas creadas para amantes de las smash.
        </p>
        <p className="intro-text">
          Más de 20 burgers diseñadas para sorprender.
        </p>
      </section>

      {/* ================= BURGER ESTRELLA ================= */}
      <section className="estrella-section">
        <div className="estrella-content">
          <img src={burguer1} className="estrella-img" alt="Smash Avenida" />

          <div className="estrella-texts">
            <h2 className="estrella-title">Smash Avenida</h2>
            <p className="estrella-desc">
              Nuestra creación más icónica. Doble carne smash madurada, queso fundido,
              cebolla caramelizada y nuestra salsa Avenida.
            </p>

            <ul className="estrella-list">
              <li>✔ Carne madurada 100% vacuno</li>
              <li>✔ Pan brioche tostado</li>
              <li>✔ Queso cheddar doble capa</li>
              <li>✔ Salsa Avenida casera</li>
            </ul>

            <a href="/carta" className="estrella-btn">DESCÚBRELA</a>
          </div>
        </div>
      </section>

      {/* ================= CARDS DE VALORES ================= */}
      <section className="valores-section">
        <h2 className="valores-title">Nuestro Concepto</h2>

        <div className="valores-grid">
          <div className="valor-card">
            <h3>Carne Madurada</h3>
            <p>Sabor intenso y jugoso en cada smash.</p>
          </div>

          <div className="valor-card">
            <h3>Pan Brioche</h3>
            <p>Suave, tostado y perfecto para cada bocado.</p>
          </div>

          <div className="valor-card">
            <h3>Salsas Caseras</h3>
            <p>Recetas únicas creadas en nuestra cocina.</p>
          </div>

          <div className="valor-card">
            <h3>Smash Perfecta</h3>
            <p>Textura crujiente por fuera, jugosa por dentro.</p>
          </div>
        </div>
      </section>

      {/* ================= BANNER POTENTE ================= */}
      <section className="banner-section">
        <p className="banner-text">
          Las burgers de Avenida 50 son las mas sabrosas — no te quedes sin la tuya.
        </p>
      </section>

    </div>
  );
};

export default Home;
