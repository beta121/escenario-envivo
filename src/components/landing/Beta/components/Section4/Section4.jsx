import { Link } from 'react-router-dom';
import './style.css';

export const Section4 = () => {
  return (
    <section className="beta-section4-wrapper">
      <div className="container">
        <div className="content-block">
          <h2 className="title">
            TRY THE BETA <br /> PLATFORM
          </h2>
          <p className="beta-section4-description">
            Our full website is currently finishing development, with a full launch date set for the
            end of 2026.
          </p>
          <div className="button-group">
            <Link className="btn-section4 section4-btn-blue">ENGLISH VERSION</Link>
            <Link className="btn-section4 section4-btn-orange">SPANISH VERSION</Link>
            <Link to="/contact" className="btn-section4 section4-btn-red">
              STAY UPDATED
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
