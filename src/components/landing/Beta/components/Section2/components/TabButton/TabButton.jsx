import './style.css';

const buttons = [
  { id: 1, text: 'Live Streams' },
  { id: 2, text: 'Live Shopping' },
  { id: 3, text: 'Seller Focus' },
  { id: 4, text: 'Products Highlights' },
  { id: 5, text: 'Buyer Engagement' },
];

export const TabButton = ({ activeTabId, onTabChange }) => {
  return (
    <ul className="beta-tabs-button">
      {buttons.map(({ id, text }) => (
        <li
          key={id}
          className="beta-tab"
          onClick={() => onTabChange(id)}
          style={{
            background: activeTabId === id ? 'white' : 'transparent',
            color: activeTabId === id ? 'black' : 'white',
          }}
        >
          {text}
        </li>
      ))}
    </ul>
  );
};
