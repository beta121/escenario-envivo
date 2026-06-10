import { Link } from 'react-router-dom';
import { CustomSelect, Button } from '../../../ui';
import './style.css';

export const MobileDrawer = ({
  isOpen,
  onClose,
  regions,
  region,
  setRegion,
  languages,
  lang,
  handleLanguageChange,
  openModal,
}) => {
  return (
    <>
      <div className={`mobile-drawer-overlay ${isOpen ? 'active' : ''}`} onClick={onClose} />

      <div className={`mobile-drawer ${isOpen ? 'active' : ''}`}>
        <div className="drawer-header">
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="drawer-content">
          <Button
            style={{ padding: '15px 0' }}
            variant="outline"
            onClick={() => {
              openModal('selling');
              onClose();
            }}
          >
            START SELLING
          </Button>

          <Button
            style={{ padding: '15px 0' }}
            onClick={() => {
              openModal('shopping');
              onClose();
            }}
          >
            START SHOPPING
          </Button>

          <Link className="login-link-mobile" to="/login" onClick={onClose}>
            Log in <span style={{ marginLeft: '8px' }}>→</span>
          </Link>

          <div className="drawer-selectors">
            <CustomSelect
              items={regions}
              selectedItem={region}
              onSelect={setRegion}
              type="region"
            />
            <CustomSelect
              items={languages}
              selectedItem={lang}
              onSelect={handleLanguageChange}
              type="lang"
            />
          </div>
        </div>
      </div>
    </>
  );
};
