import { useState } from 'react';
import { useOutsideClick } from '../../../shared/hooks';
import planetIcon from '../../../shared/assets/svg/planet.svg';
import './styles.css';

export const CustomSelect = ({ items, selectedItem, onSelect, type, planet }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <div className={`select-custom ${type}`} ref={ref}>
      <div className="select-custom-btn" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={planet ? planetIcon : `https://flagcdn.com/w40/${selectedItem.code}.png`}
          alt="flag"
          className="select-custom-flag"
        />
        <span className="select-custom-text">{selectedItem.name}</span>
        <span className="select-custom-arrow">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }}
          >
            <path d="M1 1L6 6L11 1" stroke="#757575" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </div>

      <div className={`select-custom-dropdown ${isOpen ? 'open' : ''}`}>
        {items.map((item, idx) => (
          <div
            key={item.code ?? `option-${idx}`}
            className="select-custom-option"
            onClick={() => {
              onSelect(item);
              setIsOpen(false);
            }}
          >
            {!planet && (
              <img src={`https://flagcdn.com/w40/${item.code}.png`} width="24" alt={item.name} />
            )}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
