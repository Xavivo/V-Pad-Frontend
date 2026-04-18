import { FaInstagram, FaTiktok, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const NuestrasRedes = () => {
  return (
    <div className="redes-wrapper">
      <h2 className="redes-title">Nuestras Redes</h2>
      <p className="redes-subtitle">
        Síguenos para ver novedades, promociones y contenido exclusivo.
      </p>

      <div className="redes-grid">

        {/* INSTAGRAM */}
        <a
          href="https://instagram.com"
          target="_blank"
          className="red-card instagram"
        >
          <FaInstagram className="red-icon" />
          <span>Instagram</span>
        </a>

        {/* TIKTOK */}
        <a
          href="https://tiktok.com"
          target="_blank"
          className="red-card tiktok"
        >
          <FaTiktok className="red-icon" />
          <span>TikTok</span>
        </a>

        {/* FACEBOOK */}
        <a
          href="https://facebook.com"
          target="_blank"
          className="red-card facebook"
        >
          <FaFacebookF className="red-icon" />
          <span>Facebook</span>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/34123456789"
          target="_blank"
          className="red-card whatsapp"
        >
          <FaWhatsapp className="red-icon" />
          <span>WhatsApp</span>
        </a>

      </div>
    </div>
  );
};

export default NuestrasRedes;

