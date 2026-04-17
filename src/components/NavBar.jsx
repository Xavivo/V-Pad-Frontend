import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { path: '/', label: 'Inicio' },
    { path: '/carta', label: 'Carta' },
    { path: '/pediraqui', label: 'Pedir Aquí' },
    { path: '/pediradomicilio', label: 'Pedir a Domicilio' },
    { path: '/nuestrasredes', label: 'Nuestras Redes' },
    { path: '/contacto', label: 'Contacto' },
  ];

  const handleNavClick = (event, path) => {
    event.preventDefault()
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path)
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
    setIsMenuOpen(false); // Close menu on navigation
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <nav>
      <img src="/LogoAvenida.png" alt="Logo Avenida" className="logo" width={150} height={100} />

      <div className={`nav-links ${isMenuOpen ? 'nav-links-mobile' : ''}`}>
        {links.map((link) => (
          <a key={link.path} href={link.path} onClick={(event) => handleNavClick(event, link.path)}>
            {link.label}
          </a>
        ))}
      </div>

      <form className="search-bar" action="#" method="GET">
        <input type="text" name="search" placeholder="Buscar en la carta..." className="search-input" />
        <button type="submit" className="search-button">
          🔍
        </button>
      </form>

      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
    </nav>
  );
};

export default NavBar;
