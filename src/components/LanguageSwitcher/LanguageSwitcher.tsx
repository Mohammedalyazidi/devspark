import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

interface Props {
    onLanguageChange?: () => void;
}

const LanguageSwitcher = ({ onLanguageChange }: Props) => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        if (onLanguageChange) {
            onLanguageChange();
        }
    };

    return (
        <div className="language-switcher">
            <button
                onClick={() => changeLanguage('en')}
                className={i18n.language === 'en' ? 'active' : ''}
            >
                English
            </button>
            <button
                onClick={() => changeLanguage('ar')}
                className={i18n.language === 'ar' ? 'active' : ''}
            >
                العربية
            </button>
        </div>
    );
};

export default LanguageSwitcher;
