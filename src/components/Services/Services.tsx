import { useTranslation } from 'react-i18next';
import './Services.css';
import servicesIcon from '../../assets/images/our service icon.svg';
import webIcon from '../../assets/images/web icon.svg';
import mobileIcon from '../../assets/images/mobile dev. icon.svg';
import systemIcon from '../../assets/images/system dev icon.svg';
import supportIcon from '../../assets/images/support icon.svg';

const Services = () => {
    const { t } = useTranslation();
    return (
        <div className="services" id="services">
            <div className="main-heading">
                <div className="address">
                    <h2>{t('services_section.title')}</h2>
                    <img src={servicesIcon} alt="services" />
                </div>
            </div>
            <div className="container">
                <div className="container-service">
                    <div className="card">
                        <img src={webIcon} alt="web development" />
                        <div className="text">
                            <h3>{t('services_section.web_dev.title')}</h3>
                            <p>{t('services_section.web_dev.description')}</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={mobileIcon} alt="mobile development" />
                        <div className="text">
                            <h3>{t('services_section.app_dev.title')}</h3>
                            <p>{t('services_section.app_dev.description')}</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={systemIcon} alt="digital marketing" />
                        <div className="text">
                            <h3>{t('services_section.digital_marketing.title')}</h3>
                            <p>{t('services_section.digital_marketing.description')}</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={supportIcon} alt="support" />
                        <div className="text">
                            <h3>{t('services_section.support.title')}</h3>
                            <p>{t('services_section.support.description')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
