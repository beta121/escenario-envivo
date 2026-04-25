import { useState } from 'react';
import './style.css';

export const Select = ({ items, selectedItem, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="custom-select-container">
      <div
        className={`select-header ${isOpen ? 'is-open' : ''} ${!selectedItem ? 'placeholder' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="selected-value">
          {selectedItem ? (
            <>
              {selectedItem.img && (
                <img src={selectedItem.img} width="20" alt="" className="select-icon" />
              )}
              <span>{selectedItem.name}</span>
            </>
          ) : (
            placeholder
          )}
        </div>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }}
        >
          <path d="M1 1L6 6L11 1" stroke="#757575" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {isOpen && (
        <ul className="select-list">
          {items.map((item, index) => (
            <li
              key={index}
              className="select-item"
              onClick={() => {
                onSelect(item);
                setIsOpen(false);
              }}
            >
              {item.img && <img src={item.img} width="24" alt="" className="select-icon" />}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
