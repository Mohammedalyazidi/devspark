import { useTranslation } from 'react-i18next';
import './Footer.css';
import logo from '../../assets/images/logo.svg';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="footer">
            <div className="cont-footer">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <div className="sm-links">
                        <a href="https://wa.me/" target="_blank" rel="noopener"><i className="fab fa-whatsapp"></i></a>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-x"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="lo">
                    <div className="add">
                        <div className="location">
                            <i className="fas fa-map-marker-alt"></i>
                            <h4>{t('footer.address')}</h4>
                        </div>
                        <div className="conta">
                            <div className="mail">
                                <i className="fas fa-envelope"></i>
                                <a href="mailto:support@devspark.info">support@devspark.info</a>
                            </div>
                            <div className="phone">
                                <i className="fas fa-phone-alt"></i>
                                <p>+967 7******</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-links">
                        <a href="#hero">{t('header.home')}</a>
                        <a href="#about">{t('header.about')}</a>
                        <a href="#services">{t('header.services')}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
