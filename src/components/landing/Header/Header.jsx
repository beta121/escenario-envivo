import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './style.css';

export const Header = ({ scrollRef, navItems, scrollPoints }) => {
  const itemsRef = useRef([]);
  const [navLayout, setNavLayout] = useState({ positions: [], widths: [] });

  useEffect(() => {
    const calculateLayout = () => {
      const positions = itemsRef.current.map((li) => li?.offsetLeft || 0);
      const widths = itemsRef.current.map((li) => li?.offsetWidth || 0);
      setNavLayout({ positions, widths });
    };

    const timer = setTimeout(calculateLayout, 100);

    window.addEventListener('resize', calculateLayout);
    return () => {
      window.removeEventListener('resize', calculateLayout);
      clearTimeout(timer);
    };
  }, [navItems]);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 35,
    restDelta: 0.001,
  });

  const defaultPoints = navItems.map((_, i) => i / (navItems.length - 1));
  const inputRange =
    scrollPoints && scrollPoints.length === navItems.length ? scrollPoints : defaultPoints;

  const xMovement = useTransform(
    smoothProgress,
    inputRange,
    navLayout.positions.length ? navLayout.positions : [0, 0, 0, 0],
    { clamp: true }
  );

  const widthMovement = useTransform(
    smoothProgress,
    inputRange,
    navLayout.widths.length ? navLayout.widths : [0, 0, 0, 0],
    { clamp: true }
  );

  return (
    <nav className="features-nav">
      <div className="nav-container-dynamic">
        <ul className="features-nav-list" style={{ position: 'relative' }}>
          {navLayout.positions.length > 0 && (
            <motion.div
              className="active-orange-slide"
              style={{
                x: xMovement,
                width: widthMovement,
              }}
            />
          )}

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
