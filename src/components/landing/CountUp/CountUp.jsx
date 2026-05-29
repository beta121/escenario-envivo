import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

export const CountUp = ({ to, duration = 2 }) => {
  const nodeRef = useRef(null);

  const isInView = useInView(nodeRef, { once: false, margin: '0px', amount: 1 });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = latest;
      }
    });

    if (isInView) {
      const targetNumber = Number(to) || 0;

      const controls = animate(count, targetNumber, {
        duration: duration,
        ease: [0.16, 1, 0.3, 1],
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    } else {
      count.set(0);
    }

    return unsubscribe;
  }, [isInView, to, count, duration, rounded]);

  return (
    <span ref={nodeRef} style={{ display: 'inline-block' }}>
      0
    </span>
  );
};
