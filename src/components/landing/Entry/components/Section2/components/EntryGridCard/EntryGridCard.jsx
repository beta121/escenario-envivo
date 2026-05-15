import Argentina from '../../../../../../../shared/assets/landing/FlagBack/Argentina.png';
import Chile from '../../../../../../../shared/assets/landing/FlagBack/Chile.png';
import Colombia from '../../../../../../../shared/assets/landing/FlagBack/Colombia.png';
import Ecuador from '../../../../../../../shared/assets/landing/FlagBack/Ecuador.png';
import Guatemala from '../../../../../../../shared/assets/landing/FlagBack/Guatemala.png';
import Mexico from '../../../../../../../shared/assets/landing/FlagBack/Mexico.png';
import Peru from '../../../../../../../shared/assets/landing/FlagBack/Peru.png';
import Spain from '../../../../../../../shared/assets/landing/FlagBack/Spain.png';
import USA from '../../../../../../../shared/assets/landing/FlagBack/USA.png';
import Venezuela from '../../../../../../../shared/assets/landing/FlagBack/Venezuela.png';

import './style.css';

const flags = {
  mx: Mexico,
  us: USA,
  co: Colombia,
  es: Spain,
  ar: Argentina,
  pe: Peru,
  ve: Venezuela,
  cl: Chile,
  gt: Guatemala,
  ec: Ecuador,
};

export const EntryGridCard = ({ value, country, code, highlight }) => {
  const bigFlagUrl = flags[code];
  const flagUrl = `https://flagcdn.com/w40/${code.toLowerCase()}.png`;

  return (
    <div
      className={`grid-item ${highlight ? 'highlight' : ''}`}
      style={{
        '--bg-flag': bigFlagUrl ? `url(${bigFlagUrl})` : 'none',
      }}
    >
      <span className="value">{value}</span>
      <span className="country">{country}</span>
      <img src={flagUrl} alt={country} />
    </div>
  );
};
