import { useState, useEffect } from 'react';
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
        <a href="/escenario-envivo/">
          <img src={logo} alt="Logo" />
        </a>
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
        <Button>GET A TOUCH</Button>
        <Button variant="outline">TRY THE BETA</Button>
      </div>
    </header>
  );
};
