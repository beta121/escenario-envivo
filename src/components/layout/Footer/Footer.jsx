import { NavLink, useLocation } from 'react-router-dom';
import LogoFooter from '../../../shared/assets/interface/Logo-footer.svg';

import './styles.css';

export const Footer = () => {
  const location = useLocation();
  const isInvestorPage = location.pathname.includes('/investor');

  const getLinkStyle = ({ isActive }) => {
    if (isActive) {
      return { color: '#e85d26', fontWeight: 'bold' };
    }
    return { color: isInvestorPage ? 'white' : 'black' };
  };

  return (
    <footer
      className="site-footer"
      style={{
        background: isInvestorPage ? 'black' : '#f5f5f5',
      }}
    >
      <div className="footer-container">
        <div className="footer-top">
          <NavLink
            to="/"
            className="footer-logo"
            style={{
              color: isInvestorPage ? 'white' : 'black',
            }}
          >
            <img src={LogoFooter} />
          </NavLink>

          <nav className="footer-nav">
            <NavLink
              className={isInvestorPage ? 'nav-link-investor' : 'nav-link-default'}
              to="/seller"
              style={getLinkStyle}
            >
              Seller
            </NavLink>
            <NavLink
              className={isInvestorPage ? 'nav-link-investor' : 'nav-link-default'}
              to="/buyer"
              style={getLinkStyle}
            >
              Buyer
            </NavLink>
            <NavLink
              className={isInvestorPage ? 'nav-link-investor' : 'nav-link-default'}
              to="/investor"
              style={getLinkStyle}
            >
              Investor
            </NavLink>
            <NavLink
              className={isInvestorPage ? 'nav-link-investor' : 'nav-link-default'}
              to="/contact"
              style={getLinkStyle}
            >
              Contact
            </NavLink>
            <NavLink
              className={isInvestorPage ? 'nav-link-investor' : 'nav-link-default'}
              to="/ai-features"
              style={getLinkStyle}
            >
              AI Features
            </NavLink>
          </nav>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="chat-link">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.81132 16C4.90566 16 5 15.966 5.09434 15.8981L9.43396 12.2972C9.55975 12.2972 9.65409 12.2972 9.74843 12.2972C9.81132 12.2972 9.90566 12.2972 10 12.2972C15.5975 12.2972 20 9.57962 20 6.14862C20 2.68365 15.5975 0 10 0C4.40252 0 0 2.71762 0 6.14862C0 6.69214 0.0943394 7.23567 0.283018 7.74522C0.377357 8.01699 0.660378 8.1189 0.911949 8.01699C1.16352 7.91507 1.25786 7.60934 1.16352 7.33758C1.00629 6.92994 0.943396 6.52229 0.943396 6.11465C0.943396 3.32909 5.09434 0.985138 10 0.985138C14.9057 0.985138 19.0566 3.32909 19.0566 6.11465C19.0566 8.90021 14.9057 11.2442 10 11.2442C9.90566 11.2442 9.81132 11.2442 9.71698 11.2442C9.59119 11.2442 9.46541 11.2442 9.27673 11.2442C9.15094 11.2442 9.0566 11.2781 8.96226 11.3461L5.37736 14.3355L5.75472 11.1762C5.78616 10.9384 5.62893 10.7006 5.40881 10.6327C4.71698 10.4289 4.0566 10.1571 3.49056 9.81741C3.27044 9.68153 2.98742 9.78344 2.86163 10.0212C2.73585 10.259 2.83019 10.5648 3.05032 10.7006C3.55346 11.0064 4.1195 11.2442 4.74843 11.448L4.33962 15.4225C4.30818 15.6263 4.40252 15.8302 4.55975 15.9321C4.65409 16 4.74843 16 4.81132 16Z"
                fill={isInvestorPage ? 'white' : 'black'}
              />
            </svg>
            <NavLink
              to="/contact"
              style={{
                color: isInvestorPage ? 'white' : 'black',
              }}
            >
              <span>Let’s chat</span>
            </NavLink>
          </div>

          <div className="social-icons">
            <a href="#" className="social-link" aria-label="Twitter">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={isInvestorPage ? 'white' : 'currentColor'}
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a href="#" className="social-link" aria-label="Facebook">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={isInvestorPage ? 'white' : 'currentColor'}
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            <a href="#" className="social-link" aria-label="Instagram">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isInvestorPage ? 'white' : 'currentColor'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            <a href="#" className="social-link" aria-label="TikTok">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={isInvestorPage ? 'white' : 'currentColor'}
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
