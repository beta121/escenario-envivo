import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import './styles.css';

const Arrow = ({ style }) => {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M10.8014 0.137169L5.803 5.00904L0.804564 0.137169C0.715288 0.0502196 0.595591 0.0015626 0.47097 0.0015626C0.346349 0.0015626 0.226652 0.0502196 0.137376 0.137169C0.0939067 0.179401 0.0593513 0.229924 0.0357547 0.285748C0.0121581 0.341573 0 0.401563 0 0.46217C0 0.522776 0.0121581 0.582766 0.0357547 0.63859C0.0593513 0.694414 0.0939067 0.744937 0.137376 0.787169L5.45456 5.96998C5.54789 6.06066 5.67288 6.11139 5.803 6.11139C5.93312 6.11139 6.05812 6.06066 6.15144 5.96998L11.4686 0.787169C11.5123 0.744914 11.5471 0.694294 11.5708 0.638326C11.5946 0.582357 11.6068 0.522183 11.6068 0.461388C11.6068 0.400593 11.5946 0.340419 11.5708 0.284451C11.5471 0.228482 11.5123 0.177862 11.4686 0.135607C11.3793 0.048657 11.2597 0 11.135 0C11.0104 0 10.8907 0.048657 10.8014 0.135607V0.137169Z"
        fill="#E35D25"
      />
    </svg>
  );
};

export function ExpandableBox({ children, showGradient = true, showMo, gap = 16 }) {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [heights, setHeights] = useState({ closed: 0, full: 0 });

  useEffect(() => {
    setIsOpen(false);
  }, [children]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const calculateHeights = () => {
      const childrenElements = Array.from(container.children);
      const fullHeight = container.scrollHeight;

      if (childrenElements.length === 0) {
        setHeights({ closed: 0, full: fullHeight });
        return;
      }

      const firstChildTop = childrenElements[0].offsetTop;
      let firstRowMaxBottom = 0;

      childrenElements.forEach((child) => {
        if (child.offsetTop === firstChildTop) {
          const childBottom = child.offsetTop + child.offsetHeight;
          if (childBottom > firstRowMaxBottom) {
            firstRowMaxBottom = childBottom;
          }
        }
      });

      const containerPaddingTop = parseInt(window.getComputedStyle(container).paddingTop, 10) || 0;
      const closedHeight = firstRowMaxBottom + containerPaddingTop;

      const finalClosedHeight = Math.min(closedHeight, fullHeight);

      setHeights({ closed: finalClosedHeight, full: fullHeight });
    };

    const observer = new ResizeObserver(calculateHeights);
    observer.observe(container);

    calculateHeights();

    return () => observer.disconnect();
  }, [children]);

  return (
    <div className="expandable-container">
      <div
        ref={containerRef}
        className="expandable-box"
        style={{
          gap: gap,
          height: heights.closed === 0 ? 'auto' : `${isOpen ? heights.full : heights.closed}px`,
          '--gradient-opacity': showGradient && !isOpen ? 1 : 0,
        }}
      >
        {children}
      </div>

      {showMo > 5 && (
        <div className="expandable-footer" onClick={() => setIsOpen(!isOpen)}>
          <button className="expandable-btn">{isOpen ? 'Show less' : 'Show more'}</button>
          <Arrow
            style={{
              cursor: 'pointer',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          />
        </div>
      )}
    </div>
  );
}
