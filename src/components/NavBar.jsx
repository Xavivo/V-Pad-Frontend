const NavBar = () => {
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
  }

  return (
    <nav>
      <img src="/LogoAvenida.png" alt="Logo Avenida" className="logo" width={150} height={100} />
      <div className="nav-links">
        {links.map((link) => (
          <a key={link.path} href={link.path} onClick={(event) => handleNavClick(event, link.path)}>
            {link.label}
          </a>
        ))}
      </div>
      <form className="search-bar" action="#" method="GET">
        <input type="text" name="search" placeholder="Buscar tu menú..." className="search-input" />
        <button type="submit" className="search-button">
          🔍
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
