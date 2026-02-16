import { useTranslation } from 'react-i18next';
import './Landing.css';
import heroImage from '../../assets/images/hero devspark.svg';

const Landing = () => {
    const { t } = useTranslation();
    return (
        <div className="landing">
            <div className="hero" id="hero">
                <div className="content">
                    <img src={heroImage} alt="hero image" />
                    <p>{t('landing.hero_text')}</p>
                </div>
            </div>
            <button>
                <a href="#contact">
                    {t('landing.contact_us')}
                </a>
            </button>
        </div>
    );
};

export default Landing;
