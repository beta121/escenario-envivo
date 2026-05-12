import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './style.css';

export const Header = ({ scrollRef, navItems, scrollPoints }) => {
  const itemsRef = useRef([]);
  // Инициализируем пустыми массивами, так как количество пунктов может меняться
  const [navLayout, setNavLayout] = useState({ positions: [], widths: [] });

  // 1. Измеряем ширину и положение кнопок в меню
  useEffect(() => {
    const calculateLayout = () => {
      const positions = itemsRef.current.map((li) => li?.offsetLeft || 0);
      const widths = itemsRef.current.map((li) => li?.offsetWidth || 0);
      setNavLayout({ positions, widths });
    };

    // Небольшая задержка, чтобы шрифты успели прогрузиться и размеры были точными
    const timer = setTimeout(calculateLayout, 100);

    window.addEventListener('resize', calculateLayout);
    return () => {
      window.removeEventListener('resize', calculateLayout);
      clearTimeout(timer);
    };
  }, [navItems]);

  // 2. Получаем прогресс скролла относительно контейнера с секциями
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  // 3. Делаем движение плавным (пружина)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 35,
    restDelta: 0.001,
  });

  /**
   * 4. Самое важное:
   * Вместо статичных [0, 0.33...] используем scrollPoints,
   * которые мы передали из Landing.jsx.
   * Если scrollPoints еще не доехали, используем дефолтные значения, чтобы не было ошибки.
   */
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
          {/* Оранжевая плашка (слайдер) */}
          {navLayout.positions.length > 0 && (
            <motion.div
              className="active-orange-slide"
              style={{
                x: xMovement,
                width: widthMovement,
              }}
            />
          )}

          {/* Пункты меню */}
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
