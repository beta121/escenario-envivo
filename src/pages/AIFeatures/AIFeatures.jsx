import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './style.css';

const navItems = [
  { id: 'market', label: 'New Emerging Market' },
  { id: 'opportunity', label: 'US Opportunity' },
  { id: 'entry', label: 'Market Entry' },
  { id: 'beta', label: 'Our Beta Platform' },
];

const AIFeatures = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  const [navLayout, setNavLayout] = useState({ positions: [0, 0, 0, 0], widths: [0, 0, 0, 0] });

  useEffect(() => {
    const calculateLayout = () => {
      const positions = itemsRef.current.map((li) => li?.offsetLeft || 0);
      const widths = itemsRef.current.map((li) => li?.offsetWidth || 0);
      setNavLayout({ positions, widths });
    };

    calculateLayout();
    window.addEventListener('resize', calculateLayout);
    return () => window.removeEventListener('resize', calculateLayout);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 35,
    restDelta: 0.001,
  });

  const xMovement = useTransform(smoothProgress, [0, 0.33, 0.66, 0.95], navLayout.positions, {
    clamp: true,
  });

  const widthMovement = useTransform(smoothProgress, [0, 0.33, 0.66, 0.95], navLayout.widths, {
    clamp: true,
  });

  return (
    <div className="ai-features-wrapper">
      <section className="ai-features-hero" />

      <div className="scroll-track-container" ref={containerRef}>
        <nav className="features-nav">
          <div className="nav-container-dynamic">
            <ul className="features-nav-list">
              <motion.div
                className="active-orange-slide"
                style={{
                  x: xMovement,
                  width: widthMovement,
                }}
              />

              {navItems.map((item, index) => (
                <li key={item.id} className="nav-li" ref={(el) => (itemsRef.current[index] = el)}>
                  <a href={`#${item.id}`} className="nav-link">
                    <span className="nav-text">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

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

export default AIFeatures;
