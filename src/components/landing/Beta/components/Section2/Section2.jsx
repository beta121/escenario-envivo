import { useEffect, useState } from 'react';
import Buyer from '../../../../../shared/assets/landing/MockupScreen/Buyer.png';
import Shopping from '../../../../../shared/assets/landing/MockupScreen/Shopping.png';
import Streams from '../../../../../shared/assets/landing/MockupScreen/Streams.png';
import Focus from '../../../../../shared/assets/landing/MockupScreen/Focus.png';
import Highlights from '../../../../../shared/assets/landing/MockupScreen/Highlights.png';

import { TabButton, TabContent } from './components';
import './style.css';

const TABS_DATA = {
  1: {
    content: (
      <TabContent
        description="The platform is optimized for shopping via live streams, shorts, videos and shops."
        img={Streams}
      />
    ),
  },
  2: {
    content: (
      <TabContent
        description="Live shows where potential buyers can interact with merchants and product promoters have shown to drastically increase online sales."
        img={Shopping}
      />
    ),
  },
  3: {
    content: (
      <TabContent
        description="Our customer communications and inventory management AI assistants allow sellers to focus on interacting with customers to increase sales."
        img={Focus}
      />
    ),
  },
  4: {
    content: (
      <TabContent
        description="Shops are encouraged to promote regular or unique products to customers through a variety of media."
        img={Highlights}
      />
    ),
  },
  5: {
    content: (
      <TabContent
        description="Customers get entertained, form emotional connections with shops and build a relationship that results in increased purchases."
        img={Buyer}
      />
    ),
  },
};

export const Section2 = () => {
  const [activeTabId, setActiveTabId] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTabId((prev) => (prev === Object.keys(TABS_DATA).length ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [activeTabId]);

  const activeTabContent = TABS_DATA[activeTabId]?.content;

  return (
    <div className="beta-section1-wrapper">
      <h3 className="beta-section1-title">App interface</h3>
      <div>
        <TabButton activeTabId={activeTabId} onTabChange={setActiveTabId} />
        <div className="beta-tab-content">{activeTabContent}</div>
      </div>
    </div>
  );
};
