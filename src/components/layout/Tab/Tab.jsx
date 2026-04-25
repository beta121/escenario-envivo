import { useEffect, useState, useRef } from 'react';
import { CategoryAction, SearchBar } from '../../ui';
import search from '../../../shared/assets/svg/search.svg';
import './style.css';

export const Tab = ({ items, filterCategory, active, onSelect, showFilter }) => {
  const [activeId, setActiveId] = useState(0);
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [lineStyle, setLineStyle] = useState({ width: 0, transform: 'translateX(0px)' });
  const itemsRef = useRef([]);

  useEffect(() => {
    setIsActiveSearch(false);
    const activeItem = itemsRef.current[activeId];

    if (activeItem) {
      setLineStyle({
        width: `${activeItem.offsetWidth}px`,
        transform: `translateX(${activeItem.offsetLeft}px)`,
      });
    }
  }, [activeId]);

  return (
    <div className="tabs-container">
      <div style={{ display: 'flex', gap: '20px' }}>
        <ul className="tabs-list" style={{ width: '340px' }}>
          {items.map((tab, i) => (
            <li
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className={`tab-item ${activeId === i ? 'active' : ''}`}
              data-label={tab.label}
              onClick={() => setActiveId(i)}
            >
              {tab.label}
            </li>
          ))}
          <div
            className="tabs-underline"
            style={{
              width: lineStyle.width,
              transform: lineStyle.transform,
            }}
          />
        </ul>

        {items[activeId].label === showFilter && (
          <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div>
                {isActiveSearch ? (
                  <SearchBar />
                ) : (
                  <img
                    style={{ cursor: 'pointer' }}
                    src={search}
                    onClick={() => setIsActiveSearch(true)}
                  />
                )}
              </div>
              <CategoryAction
                onSelect={onSelect}
                active={active}
                categories={filterCategory}
                showGradient={false}
              />
            </div>
          </div>
        )}
      </div>

      <div className="tabs-content">{items[activeId].content}</div>
    </div>
  );
};
