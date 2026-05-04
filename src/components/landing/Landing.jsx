import { useRef } from 'react';
import { Header } from './Header';

import './style.css';

const navItems = [
  { id: 'market', label: 'New Emerging Market' },
  { id: 'opportunity', label: 'US Opportunity' },
  { id: 'entry', label: 'Market Entry' },
  { id: 'beta', label: 'Our Beta Platform' },
];

export const Landing = () => {
  const containerRef = useRef(null);

  return (
    <div className="ai-features-wrapper">
      <section className="ai-features-hero" />

      <Header scrollRef={containerRef} navItems={navItems} />

      <div className="scroll-track-container" ref={containerRef}>
        <section className="ai-features-section section-market" id="market">
          MARKET
        </section>
        <section className="ai-features-section section-opportunity" id="opportunity">
          OPPORTUNITY
        </section>
        <section className="ai-features-section section-entry" id="entry">
          ENTRY
        </section>
        <section className="ai-features-section section-beta" id="beta">
          BETA
        </section>
      </div>
      <div style={{ height: '20vh', background: '#000' }} />
    </div>
  );
};
