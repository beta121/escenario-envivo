import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './style.css';

export const Header = ({ scrollRef, navItems }) => {
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
    target: scrollRef,
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
  );
};
