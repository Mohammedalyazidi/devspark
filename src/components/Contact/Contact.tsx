import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';
import contactIcon from '../../assets/images/contact-with-us icon.svg';
import contactImg from '../../assets/images/contact img.svg';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        message: '',
        _gotcha: '' // Honeypot field
    });

    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Spam check: if honeypot is filled, silently fail or return success to fool bots
        if (formData._gotcha) {
            setStatus({ type: 'success', message: t('contact_section.form.success_message') || 'Message sent successfully!' });
            setFormData({ name: '', number: '', email: '', message: '', _gotcha: '' });
            return;
        }

        setIsLoading(true);
        setStatus({ type: null, message: '' });

        try {
            const googleAppsScriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
            
            if (!googleAppsScriptUrl) {
                throw new Error('Google Apps Script URL is not configured. Please set VITE_GOOGLE_APPS_SCRIPT_URL in your environment variables.');
            }

            console.log('Sending request to Google Apps Script:', googleAppsScriptUrl);

            // Prepare data for Google Apps Script
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.number);
            formDataToSend.append('message', formData.message);

            const response = await fetch(googleAppsScriptUrl, {
                method: 'POST',
                mode: 'cors',
                body: formDataToSend,
            });

            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error response:', errorText);
                throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
            }

            const result = await response.json();
            console.log('Response data:', result);

            if (result.status === 'success') {
                setStatus({ type: 'success', message: t('contact_section.form.success_message') });
                setFormData({ name: '', number: '', email: '', message: '', _gotcha: '' });
            } else {
                setStatus({ type: 'error', message: result.message || t('contact_section.form.error_message') });
            }

        } catch (error) {
            console.error('Error sending message:', error);
            setStatus({ type: 'error', message: t('contact_section.form.error_message') });
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    return (
        <div className="contact" id="contact">
            <div className="container">
                <div className="main-heading">
                    <div className="address">
                        <img src={contactIcon} alt="contact" />
                        <h2>{t('contact_section.title')}</h2>
                    </div>
                </div>
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">{t('contact_section.form.name')}</label>
                            <input
                                type="text"
                                id="name"
                                placeholder={t('contact_section.form.name_placeholder')}
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">{t('contact_section.form.number')}</label>
                            <input
                                type="number"
                                id="number"
                                placeholder={t('contact_section.form.number_placeholder')}
                                value={formData.number}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">{t('contact_section.form.email')}</label>
                            <input
                                type="email"
                                id="email"
                                placeholder={t('contact_section.form.email_placeholder')}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">{t('contact_section.form.message')}</label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder={t('contact_section.form.message_placeholder')}
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        {/* Honeypot field (hidden) */}
                        <div style={{ display: 'none' }}>
                            <label htmlFor="_gotcha">Don't fill this out if you're human:</label>
                            <input
                                type="text"
                                id="_gotcha"
                                name="_gotcha"
                                value={formData._gotcha}
                                onChange={handleChange}
                                tabIndex={-1}
                                autoComplete="off"
                            />
                        </div>

                        {status.message && (
                            <div className={`form-message ${status.type}`}>
                                {status.message}
                            </div>
                        )}
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? 'Sending...' : t('contact_section.form.submit')}
                        </button>
                    </form>
                    <img src={contactImg} alt="contact image" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
