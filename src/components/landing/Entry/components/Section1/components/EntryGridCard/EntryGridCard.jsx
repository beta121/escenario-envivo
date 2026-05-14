import './style.css';

export const EntryGridCard = ({ value, country, code, highlight }) => {
  const flagUrl = `https://flagcdn.com/w40/${code}.png`;
  const bigFlagUrl = `url('https://flagcdn.com/w640/${code}.png')`;

  return (
    <div
      className={`grid-item ${highlight ? 'highlight' : ''}`}
      style={{ '--bg-flag': bigFlagUrl }}
    >
      <span className="value">{value}</span>
      <span className="country">{country}</span>
      <img src={flagUrl} alt={country} />
    </div>
  );
};
