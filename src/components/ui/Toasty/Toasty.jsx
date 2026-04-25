import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './style.css';

export const Toasty = ({ text, setIsOpenTost }) => {
  const portals = document.getElementById('modal');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpenTost(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setIsOpenTost]);

  if (!portals) return null;

  return createPortal(<div className="toasty">{text}</div>, portals);
};
