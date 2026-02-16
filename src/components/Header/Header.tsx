import { useState } from 'react';
import './Header.css';
import logo from '../../assets/images/logo.svg';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <i className="fas fa-bars humburger" onClick={toggleMenu}></i>
          <ul className={isMenuOpen ? "show-menu" : ""}>
            <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>{t('header.home')}</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>{t('header.about')}</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>{t('header.services')}</a></li>

            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('header.contact')}</a></li>
            <br />
            <li>
              <div className="lan">
                <i className="fas fa-globe"></i>
                <LanguageSwitcher onLanguageChange={() => setIsMenuOpen(false)} />
              </div>
            </li>
          </ul>
        </nav>
        <div className="lang">
          <i className="fas fa-globe"></i>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
