import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import './style.css';

export const AnimatedPercentage = ({ targetPercentage = 67, size = 100, border }) => {
  const count = useMotionValue(0);
  const [rounded, setRounded] = useState(0);

  useEffect(() => count.on('change', (v) => setRounded(Math.floor(v))), [count]);

  const background = useTransform(
    count,
    (v) => `conic-gradient(#fff ${v * 3.6}deg, transparent 0deg)`
  );

  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => {
        count.set(0);
        animate(count, targetPercentage, { duration: 3, ease: 'easeOut' });
      }}
      viewport={{ once: false, amount: 0.3 }}
      style={{
        position: 'relative',
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: size - 7,
          height: size - 7,
          borderRadius: '50%',
          border: `3px solid ${border ? '#010201' : '#E55C28'}`,
          boxSizing: 'border-box',
        }}
      />

      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          width: size - 20,
          height: size - 20,
          backgroundColor: '#000',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          {rounded}%
        </span>
      </div>
    </motion.div>
  );
};
