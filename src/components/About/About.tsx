import { useTranslation } from 'react-i18next';
import './About.css';
import aboutIcon from '../../assets/images/about icon.svg';

const About = () => {
    const { t } = useTranslation();
    return (
        <div className="about" id="about">
            <div className="main-heading">
                <div className="address">
                    <h2>{t('about_section.title')}</h2>
                    <img src={aboutIcon} alt="we" />
                </div>
            </div>
            <div className="container">
                <p>{t('about_section.description')}</p>
            </div>
        </div>
    );
};

export default About;
