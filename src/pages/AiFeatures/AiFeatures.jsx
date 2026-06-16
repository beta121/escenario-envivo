import sellerWorking from '../../shared/assets/interface/aifeatures-hero.png';
import streamingShoes from '../../shared/assets/interface/aifeatures-angel.png';
import './style.css';

const AiFeatures = () => {
  return (
    <main className="ai-page">
      <section className="ai-hero">
        <h1 className="ai-main-title">Unique AI Features for Sellers and Buyers</h1>
        <div className="ai-banner">
          <img src={sellerWorking} alt="Our sellers team" className="ai-banner-img" />
        </div>
      </section>

      <section className="ai-info-section">
        <article className="ai-article">
          <p className="ai-text">
            Lorem ipsum dolor sit amet consectetur. Turpis a nunc mi justo scelerisque cursus netus
            vivamus. Arcu sem id aenean id ac magna viverra. Vulputate nibh gravida viverra integer
            sem ut nibh accumsan leo. Consequat nunc et venenatis a.
          </p>
          <ul className="ai-check-list">
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Lorem ipsum dolor sit amet consectetur</li>
          </ul>
        </article>
      </section>

      <section className="ai-split-block">
        <h2 className="ai-sub-title">Title</h2>

        <div className="ai-grid">
          <div className="ai-image-column">
            <img src={streamingShoes} alt="Streaming shoes" className="ai-grid-img" />
          </div>

          <div className="ai-content-column">
            <p className="ai-text">
              Lorem ipsum dolor sit amet consectetur. Turpis a nunc mi justo scelerisque cursus
              netus vivamus. Arcu sem id aenean id ac magna viverra. Vulputate nibh gravida viverra
              integer sem ut nibh accumsan leo. Consequat nunc et venenatis a. Dictum eu tellus
              condimentum ultrices amet. Lobortis amet tellus lacus leo etiam. Eu at sit mattis
              turpis faucibus vitae quis fusce. Urna etiam proin sed arcu. Eu aliquet massa commodo
              tincidunt quam. Suspendisse a molestie massa orci ut volutpat cursus blandit vitae.
              Lectus lacus lorem scelerisque vitae donec sodales mattis tincidunt. Viverra non
              sceptit tristique dolor
            </p>
            <ul className="ai-check-list">
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
            </ul>
          </div>

          <div className="ai-full-width-text">
            <p className="ai-text">
              Lorem ipsum dolor sit amet consectetur. Turpis a nunc mi justo scelerisque cursus
              netus vivamus. Arcu sem id aenean id ac magna viverra. Vulputate nibh gravida viverra
              integer sem ut nibh accumsan leo. Consequat nunc et venenatis a. Dictum eu tellus
              condimentum ultrices amet. Lobortis urna ante ultrices metus dictum quam non. Lobortis
              amet tellus lacus leo etiam. Eu at sit mattis turpis faucibus vitae quis fusce. Urna
              etiam proin sed arcu. Eu aliquet massa commodo tincidunt quam. Suspendisse a molestie
              massa orci ut volutpat cursus blandit vitae. Tristique scelerisque tempus eu posuere.
              Lectus lacus lorem scelerisque vitae donec sodales mattis tincidunt. Viverra non
              suscipit tristique dolor.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AiFeatures;
