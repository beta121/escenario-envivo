import { createPortal } from 'react-dom';
import './style.css';

export const Modal = ({ children, innerRef }) => {
  const portals = document.getElementById('modal');

  if (!portals) return null;

  return createPortal(
    <div className="modal-container">
      <div className="modal-content" ref={innerRef}>
        {children}
      </div>
    </div>,
    portals
  );
};
