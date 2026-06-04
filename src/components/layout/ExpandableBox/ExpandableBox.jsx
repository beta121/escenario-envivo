import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import ExpandArrow from '../../../shared/assets/svg/ExpandArrow';
import './styles.css';

const DESKTOP_BREAKPOINT = 1400;

export function ExpandableBox({ children, showGradient = true, showMo, gap = 16 }) {
  const containerRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= DESKTOP_BREAKPOINT);

  const [heights, setHeights] = useState({
    closed: 0,
    full: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [children]);

  useLayoutEffect(() => {
    if (!isDesktop) return;

    const container = containerRef.current;

    if (!container) return;

    const calculateHeights = () => {
      const childrenElements = Array.from(container.children);
      const fullHeight = container.scrollHeight;

      if (!childrenElements.length) return;

      const firstChildTop = childrenElements[0].offsetTop;

      let firstRowMaxBottom = 0;

      childrenElements.forEach((child) => {
        if (child.offsetTop === firstChildTop) {
          firstRowMaxBottom = Math.max(firstRowMaxBottom, child.offsetTop + child.offsetHeight);
        }
      });

      setHeights({
        closed: firstRowMaxBottom,
        full: fullHeight,
      });
    };

    const observer = new ResizeObserver(calculateHeights);

    observer.observe(container);

    calculateHeights();

    return () => observer.disconnect();
  }, [children, isDesktop]);

  return (
    <div className="expandable-container">
      <div
        ref={containerRef}
        className={`expandable-box ${!isDesktop ? 'mobile-scroll' : ''}`}
        style={{
          gap,
          ...(isDesktop && {
            maxHeight: isOpen ? `${heights.full}px` : `${heights.closed}px`,
            '--gradient-opacity': showGradient && !isOpen ? 1 : 0,
          }),
        }}
      >
        {children}
      </div>

      {isDesktop && showMo > 5 && (
        <div className="expandable-footer" onClick={() => setIsOpen((prev) => !prev)}>
          <button className="expandable-btn">{isOpen ? 'Show less' : 'Show more'}</button>

          <ExpandArrow
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          />
        </div>
      )}
    </div>
  );
}
