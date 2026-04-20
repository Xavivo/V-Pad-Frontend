import { useEffect, useState } from "react";
import burguer1 from "/burguer1.webp";
import burguer2 from "/burguer2.webp";
import burguer3 from "/burguer3.webp";

const Home = () => {
  const slides = [burguer1, burguer2, burguer1, burguer2];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="home-wrapper">

      {/* Main hero */}
      <section className="hero-section">

        <div className="hero-bg"></div>

        <div className="hero-content">

          <div className="hero-left">
            <h1 className="hero-title">Avenida 50</h1>
            <p className="hero-subtitle">
              Seleccionamos la mejor carne, horneamos nuestro propio pan y creamos recetas que rompen el molde.
            </p>

            <div className="hero-buttons">
              <a href="/pedido" className="hero-btn">QUIERO MI BURGER</a>
              <a href="/carta" className="hero-btn-outline">VER CARTA</a>
            </div>
          </div>

          {/* Carrousel */}
          <div className="hero-right">

            <p className="hero-choose"><span>Elige la Hamburguesa que más te guste</span></p>

            <h3 className="hero-burger-name">
              {index === 0 || index === 2 ? "La Avenida Burguer" : "La Chicken Thai"}
            </h3>

            <img
              src={slides[index]}
              alt="Hamburguesa"
              className="hero-burger"
            />
          </div>

        </div>
      </section>

      {/* Bento gallery */}
      <section className="visual-grid-section">
        <div className="bento-grid">
          <div className="bento-item main-photo">
            <img src={burguer1} alt="Burger close up" />
            <div className="bento-text"><h3>Sabor sin frenos</h3></div>
          </div>
          <div className="bento-item side-photo-1">
            <img src={burguer2} alt="Local" />
            <div className="bento-text"><h3>Vibe Urbano</h3></div>
          </div>
          <div className="bento-item side-photo-2">
            <img src={burguer3} alt="Ingredientes" />
            <div className="bento-text"><h3>100% Vacuno</h3></div>
          </div>
        </div>
      </section>

      {/* Burguer */}
      <section className="star-section">
        <div className="star-content">
          <img src={burguer3} className="star-img" alt="La disfrutona" />

          <div className="star-texts">
            <h2 className="star-title">La disfrutona</h2>
            <p className="star-desc">
              Nuestra creación más icónica. Doble carne smash madurada, queso fundido,
              cebolla caramelizada y nuestra salsa Avenida.
            </p>

            <ul className="star-list">
              <li>✔ Carne madurada 100% vacuno</li>
              <li>✔ Pan brioche tostado</li>
              <li>✔ Queso cheddar doble capa</li>
              <li>✔ Salsa Avenida casera</li>
            </ul>

            <a href="/carta" className="star-btn">DESCÚBRELA</a>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="valores-section">
        <h2 className="values-title">Nuestro Concepto</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>Carne Madurada</h3>
            <p>Sabor intenso y jugoso en cada smash.</p>
          </div>

          <div className="value-card">
            <h3>Pan Brioche</h3>
            <p>Suave, tostado y perfecto para cada bocado.</p>
          </div>

          <div className="value-card">
            <h3>Salsas Caseras</h3>
            <p>Recetas únicas creadas en nuestra cocina.</p>
          </div>

          <div className="value-card">
            <h3>Smash Perfecta</h3>
            <p>Textura crujiente por fuera, jugosa por dentro.</p>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="banner-section">
        <p className="banner-text">
          Las burgers de Avenida 50 son las mas sabrosas — no te quedes sin la tuya.
        </p>
      </section>

    </div>
  );
};

export default Home;
