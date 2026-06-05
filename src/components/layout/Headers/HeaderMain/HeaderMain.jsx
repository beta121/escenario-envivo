import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CustomSelect, SearchBar, Modal, TextField, Button, Toasty } from '../../../ui';
import { SellerSignupForm, ShoppingSignupForm } from '../../../layout';
import { useTranslation } from 'react-i18next';
import { useOutsideClick } from '../../../../shared/hooks/useOutsideClick';
import logo from '../../../../shared/assets/Logo.svg';
import burger from '../../../../shared/assets/burger.svg';
import search from '../../../../shared/assets/search.svg';

import './styles.css';

const regions = [
  { name: 'USA', code: 'us' },
  { name: 'MEXICO', code: 'mx' },
  { name: 'GUATEMALA', code: 'gt' },
  { name: 'DOMINICAN REP.', code: 'do' },
  { name: 'HONDURAS', code: 'hn' },
  { name: 'EL SALVADOR', code: 'sv' },
  { name: 'NICARAGUA', code: 'ni' },
  { name: 'COSTA RICA', code: 'cr' },
  { name: 'PANAMA', code: 'pa' },
  { name: 'PUERTO RICO', code: 'pr' },
  { name: 'CANADA', code: 'ca' },
];

const languages = [
  { name: 'EN', code: 'us' },
  { name: 'ES', code: 'es' },
];

export const HeaderMain = () => {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const { i18n } = useTranslation();
  const [region, setRegion] = useState(regions[0]);
  const [lang, setLang] = useState(() => {
    const currentLangCode = i18n?.language || 'us';
    return languages.find((l) => l.code === currentLangCode) || languages[0];
  });
  const [isOpenTost, setIsOpenTost] = useState(false);
  const modalRef = useOutsideClick(() => setModalType(null));
  const [modalType, setModalType] = useState(null); // 'selling' | 'shopping' | null

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

  const openModal = (type) => {
    setModalType(type);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="desktop-menu">
          <CustomSelect items={regions} selectedItem={region} onSelect={setRegion} type="region" />

          <SearchBar onSearch={(val) => console.log(val)} />

          <div className="header-right-section">
            <CustomSelect
              items={languages}
              selectedItem={lang}
              onSelect={handleLanguageChange}
              type="lang"
            />

            <Link className="login-link" to="/login">
              Log in
            </Link>

            <div className="cta-buttons">
              <Button variant="outline" onClick={() => openModal('selling')}>
                START SELLING
              </Button>
              <Button onClick={() => openModal('shopping')}>START SHOPPING</Button>
            </div>
          </div>
        </div>

        <div className="mobile-menu">
          <button>
            <img className="search-icon" src={search} />
          </button>

          <button onClick={() => setIsOpenBurger((prev) => !prev)}>
            <img className="burger-icon" src={burger} />
          </button>
        </div>
      </div>
      {modalType && (
        <Modal innerRef={modalRef}>
          {modalType === 'selling' && (
            <SellerSignupForm
              onSuccess={() => {
                setIsOpenTost(true);
                setModalType(null);
              }}
            />
          )}

          {modalType === 'shopping' && (
            <ShoppingSignupForm
              onSuccess={() => {
                setIsOpenTost(true);
                setModalType(null);
              }}
            />
          )}
        </Modal>
      )}
      {isOpenTost && (
        <Toasty
          text="Thank you for joining. Our team will be in touch soon."
          setIsOpenTost={setIsOpenTost}
        />
      )}
    </header>
  );
};
