import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Merci!</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              À propos
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Compétences
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">
              Qualification
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/Theo-Everaere"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/th%C3%A9o-everaere/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Theo Everaere - Tous droits réservés
        </span>
      </div>
    </footer>
  );
};

export default Footer;
