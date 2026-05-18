import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button, CustomSelect } from '../../../ui';
import { useTranslation } from 'react-i18next';
import logo from '../../../../shared/assets/Logo.png';
import './style.css';

const languages = [
  { name: 'EN', code: 'us' },
  { name: 'ES', code: 'es' },
];

export const HeaderAi = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(() => {
    const currentLangCode = i18n?.language || 'us';
    return languages.find((l) => l.code === currentLangCode) || languages[0];
  });

  useEffect(() => {
    const current = languages.find((l) => l.code === i18n.language);
    if (current && current.code !== lang.code) {
      setLang(current);
    }
  }, [i18n.language]);

  const handleLanguageChange = (selected) => {
    setLang(selected);
    i18n.changeLanguage(selected.code);
  };

  return (
    <header className="headerAi-container">
      <div className="headerAi-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="headerAi-action">
        <div className="headerAi-right-section">
          <CustomSelect
            items={languages}
            selectedItem={lang}
            onSelect={handleLanguageChange}
            type="lang"
          />
        </div>
        <Link to="/contact">
          <Button>GET IN TOUCH</Button>
        </Link>
        <Link to="/">
          <Button variant="outline">TRY THE BETA</Button>
        </Link>
      </div>
    </header>
  );
};
