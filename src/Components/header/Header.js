import { useState } from "react";
import "./header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function showMenuHandler() {
    setShowMenu(!showMenu);
  }

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Portfolio
        </a>

        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>À-propos
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>Compétences
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Qualification
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Mes projets
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Me contacter
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={showMenuHandler}></i>
        </div>
        <div className="nav__toggle" onClick={showMenuHandler}>
          Navigation <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
