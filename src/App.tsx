import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header.tsx';
import Landing from './components/Landing/Landing.tsx';
import About from './components/About/About.tsx';
import Values from './components/Values/Values.tsx';
import Services from './components/Services/Services.tsx';
import Contact from './components/Contact/Contact.tsx';
import Footer from './components/Footer/Footer.tsx';
import './App.css';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n, i18n.language]);

  return (
    <div className="main-app-container" style={{ overflowX: 'hidden', width: '100%', position: 'relative' }}>
      <Header />
      <Landing />
      <About />
      <Values />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
