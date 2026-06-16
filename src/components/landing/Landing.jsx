import { useRef, useState, useEffect } from 'react';
import { Header, MarketSection, Opportunity, Entry, Beta } from '../landing';
import { Loader } from '../ui';

import './style.css';

const navItems = [
  { id: 'market', label: 'New Emerging Market' },
  { id: 'opportunity', label: 'US Opportunity' },
  { id: 'entry', label: 'Market Entry' },
  { id: 'beta', label: 'Our Beta Platform' },
];

export const Landing = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const [scrollPoints, setScrollPoints] = useState([0, 0.25, 0.5, 0.75]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const bgImage = new URL('../../shared/assets/landing/ai-features/AiFrame.png', import.meta.url)
    .href;

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  useEffect(() => {
    if (!isImageLoaded) return;

    const calculatePoints = () => {
      const sections = sectionsRef.current.filter(Boolean);
      if (sections.length === 0) return;

      const totalHeight = containerRef.current.scrollHeight - window.innerHeight;

      let currentHeight = 0;
      const points = sections.map((section) => {
        const point = currentHeight / totalHeight;
        currentHeight += section.offsetHeight;
        return Math.min(point, 1);
      });

      setScrollPoints(points);
    };

    calculatePoints();
    window.addEventListener('resize', calculatePoints);
    return () => window.removeEventListener('resize', calculatePoints);
  }, [isImageLoaded]);

  if (!isImageLoaded) return <Loader />;

  return (
    <div className="ai-features-wrapper">
      <section className="ai-features-hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <h3>The Evolution of Live Shopping</h3>
      </section>

      <Header scrollRef={containerRef} navItems={navItems} scrollPoints={scrollPoints} />

      <div className="scroll-track-container" ref={containerRef}>
        <section
          id="market"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="ai-features-section section-market"
          style={{ height: 'auto', minHeight: '100vh' }}
        >
          <MarketSection />
        </section>

        <section
          id="opportunity"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="ai-features-section section-opportunity"
          style={{ height: 'auto', minHeight: '100vh' }}
        >
          <Opportunity />
        </section>

        <section
          id="entry"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="ai-features-section section-entry"
          style={{ height: 'auto', minHeight: '100vh' }}
        >
          <Entry />
        </section>

        <section
          id="beta"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="ai-features-section section-beta"
          style={{ height: 'auto', minHeight: '100vh' }}
        >
          <Beta />
        </section>
      </div>

      <div style={{ height: '20vh', background: '#000' }} />
    </div>
  );
};
