import { AnimatedPercentage } from './components';
import './styles.css';

export const Section2 = () => {
  return (
    <div className="opportunity-percent_container">
      <div className="opportunity-percent_wrapper">
        <h1 className="opportunity-percent_title orang">North American Market Opportunity</h1>
        <div className="opportunity-animation_wrapper">
          <div className="opportunity-animation_container">
            <div>
              <AnimatedPercentage targetPercentage={67} />
            </div>
            <div className="opportunity-animation_text">
              of all current global Live Sales are in Asia, and on platforms that are not popular in
              the West.  
            </div>
          </div>
          <div className="opportunity-animation_container">
            <div>
              <AnimatedPercentage targetPercentage={72} />
            </div>
            <div className="opportunity-animation_text">
              of global consumer spending power is outside of Asia and mostly uncaptured by Live
              Sales.
            </div>
          </div>
          <div className="opportunity-animation_container">
            <div>
              <AnimatedPercentage targetPercentage={31} />
            </div>
            <div className="opportunity-animation_text">
              of all global private consumer spending is in North America, with 95% of that being
              USA and Canada. 
            </div>
          </div>
        </div>
      </div>
      <div className="opportunity-percent_wrapper orang">
        <h1 className="opportunity-percent_title">Targeting American Consumers </h1>
        <div className="opportunity-animation_wrapper">
          <div className="opportunity-animation_container">
            <div>
              <AnimatedPercentage targetPercentage={84} border />
            </div>
            <div className="opportunity-animation_text">
              of consumers in Asia have watched or purchased from a livestream, primarily clothing
              and shoes.
            </div>
          </div>
          <div className="opportunity-animation_container">
            <div>
              <AnimatedPercentage targetPercentage={12} border />
            </div>
            <div className="opportunity-animation_text">
              of US consumers in 2024 have purchased from a LiveStream, which may rise to 20% by end
              of 2025.
            </div>
          </div>
          <div className="opportunity-animation_container">
            <div>
              <AnimatedPercentage targetPercentage={25} border />
            </div>
            <div className="opportunity-animation_text">
              of Gen-Z consumers have made live purchases, followed by Gen-Alpha and Millennials.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
