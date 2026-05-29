import { MarketProjectionCard } from './components';
import './style.css';

const data2027 = {
  title: 'Minimal Market Entry (2027)',
  subtitle: 'Spanish Language North America Focus',
  tam: {
    value: '$37.2 Billion',
    label: 'Total Available Market (TAM)',
    description:
      'This includes all projected Live E-Commerce sales within the Spanish speaking Americas that FleetCast could theoretically capture.',
  },
  sam: {
    value: '$740 Million',
    badge: '2% of TAM',
    label: 'Serviceable Available Market (SAM)',
    description:
      'Focus market share among Spanish speakers in North America, targeting specific demographics.',
  },
  som: {
    value: '$7.4 MILLION',
    badge: '1% of SAM',
    label: 'Serviceable Obtainable Market (SOM)',
    description:
      '1% market capture within the Spanish speaking region, considering conservative penetration estimates.',
  },
  footnote: `* Projecting 2027 as the time for full commercial release 
in US, Mexico and Central America.`,
};

const data2032 = {
  title: '5-Year Projection (2032)',
  subtitle: 'Conservative Profitability Calculation',
  tam: {
    value: '$160 Billion',
    label: 'Total Available Market for 2032 (TAM)',
    description:
      'Projected TAM across the initial Americas focus markets and including early entry into Western Europe.',
  },
  sam: {
    value: '$24 Billion',
    badge: '15% of TAM',
    label: 'Serviceable Available Market (SAM)',
    description:
      'Market capture among total available Spanish and English speakers in established target markets.',
  },
  som: {
    value: '$480 MILLION',
    badge: '2% of SAM',
    label: 'speakers in established target markets.',
    description: `From capturing at least 2% of SAM consumer 
spending for 2032 in selected markets.`,
  },
  footnote: `* Projecting 5 years of stable expansion as a niche marketplace 
for specific goods categories.`,
};

export const Section1 = () => {
  return (
    <div className="entity-expansion__wrapper">
      <div className="entity-expansion__container">
        <div className="entity-expansion__title">
          <h4>Strategic Expansion: 2027 vs 2032</h4>
          <p>From minimal market entry to global platform expansion.</p>
        </div>
        <div className="entity-expansion__card-wrapper">
          <MarketProjectionCard {...data2027} />
          <div className="card-line"></div>
          <MarketProjectionCard {...data2032} />
        </div>
      </div>
    </div>
  );
};
