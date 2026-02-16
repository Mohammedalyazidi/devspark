import { useTranslation } from 'react-i18next';
import './Values.css';
import valuesIcon from '../../assets/images/our values icon.svg';
import innovationIcon from '../../assets/images/innovation icon.svg';
import qualityIcon from '../../assets/images/Quality icon.svg';
import partnershipIcon from '../../assets/images/partnership icon.svg';

const Values = () => {
    const { t } = useTranslation();

    return (
        <div className="our-values" id="values">
            <div className="main-heading">
                <div className="address">
                    <img src={valuesIcon} alt="value" />
                    <h2>{t('values.title')}</h2>
                </div>
            </div>
            <div className="container">
                <div className="box">
                    <img src={innovationIcon} alt="innovation" />
                    <div className="text">
                        <h3>{t('values.innovation.title')}</h3>
                        <p> {t('values.innovation.description')} </p>
                    </div>
                </div>
                <div className="box">
                    <img src={qualityIcon} alt="quality" />
                    <div className="text">
                        <h3>{t('values.quality.title')}</h3>
                        <p> {t('values.quality.description')}</p>
                    </div>
                </div>
                <div className="box">
                    <img src={partnershipIcon} alt="partnership" />
                    <div className="text">
                        <h3>{t('values.partnership.title')}</h3>
                        <p> {t('values.partnership.description')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Values;
