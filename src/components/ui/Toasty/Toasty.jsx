import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './style.css';

export const Toasty = ({ text, setIsOpenTost, error }) => {
  const portals = document.getElementById('modal');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpenTost(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setIsOpenTost]);

  if (!portals) return null;

  return createPortal(
    <div className="toasty" style={{ background: error ? 'red' : '#E35D25' }}>
      {text}
    </div>,
    portals
  );
};
