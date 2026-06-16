import sellerWorking from '../../shared/assets/interface/seller-working.png';
import streamingShoes from '../../shared/assets/interface/streaming-shoes.png';
import streamingGirl from '../../shared/assets/interface/streaming-girl.png';

import './style.css';

const Seller = () => {
  return (
    <main className="seller-page">
      <section className="seller-hero">
        <h1 className="seller-main-title">Benefits for our Sellers</h1>
        <div className="seller-banner">
          <img src={sellerWorking} alt="Our sellers team" className="seller-banner-img" />
        </div>
      </section>

      <section className="seller-info-section">
        <article className="seller-article">
          <p className="seller-text">
            Lorem ipsum dolor sit amet consectetur. Turpis a nunc mi justo scelerisque cursus netus
            vivamus. Arcu sem id aenean id ac magna viverra. Vulputate nibh gravida viverra integer
            sem ut nibh accumsan leo. Consequat nunc et venenatis a.
          </p>
          <ul className="seller-check-list">
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Lorem ipsum dolor sit amet consectetur</li>
          </ul>
        </article>
      </section>

      <section className="seller-split-block">
        <h2 className="seller-sub-title">Title</h2>

        <div className="seller-grid">
          <div className="seller-image-column">
            <img src={streamingShoes} alt="Streaming shoes" className="seller-grid-img" />
          </div>

          <div className="seller-content-column">
            <p className="seller-text">
              Lorem ipsum dolor sit amet consectetur. Turpis a nunc mi justo scelerisque cursus
              netus vivamus. Arcu sem id aenean id ac magna viverra. Vulputate nibh gravida viverra
              integer sem ut nibh accumsan leo. Consequat nunc et venenatis a. Dictum eu tellus
              condimentum ultrices amet. Lobortis urna ante ultrices metus dictum quam non.
            </p>
            <ul className="seller-check-list">
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="seller-bottom-section">
        <p className="seller-text">
          Lorem ipsum dolor sit amet consectetur. Turpis a nunc mi justo scelerisque cursus netus
          vivamus. Arcu sem id aenean id ac magna viverra. Vulputate nibh gravida viverra integer
          sem ut nibh accumsan leo. Consequat nunc et venenatis a. Dictum eu tellus condimentum
          ultrices amet. Lobortis urna ante ultrices metus dictum quam non. Lobortis amet tellus
          lacus leo etiam. Eu at sit mattis turpis faucibus vitae quis fusce. Urna etiam proin sed
          arcu. Eu aliquet massa commodo tincidunt quam. Suspendisse a molestie massa orci ut
          volutpat cursus blandit vitae. Tristique scelerisque tempus eu posuere. Lectus lacus lorem
          scelerisque vitae donec sodales mattis tincidunt. Viverra non suscipit tristique dolor.
        </p>
      </section>

      <section className="seller-split-block reversed">
        <h2 className="seller-sub-title">Title</h2>
        <div className="seller-grid">
          <div className="seller-content-column">
            <ul className="seller-check-list">
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
            </ul>
          </div>
          <div className="seller-image-column">
            <img src={streamingGirl} alt="Streaming process" className="seller-grid-img" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Seller;
