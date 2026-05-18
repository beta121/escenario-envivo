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
        title="Lorem ipsum dolor 1"
        description="Lorem ipsum dolor sit amet consectetur. Venenatis pretium eu turpis egestas lectus. Sit odio lacus eu viverra enim."
        img={Streams}
      />
    ),
  },
  2: {
    content: (
      <TabContent
        title="Lorem ipsum dolor 2"
        description="Lorem ipsum dolor sit amet consectetur. Venenatis pretium eu turpis egestas lectus. Sit odio lacus eu viverra enim."
        img={Shopping}
      />
    ),
  },
  3: {
    content: (
      <TabContent
        title="Lorem ipsum dolor 3"
        description="Lorem ipsum dolor sit amet consectetur. Venenatis pretium eu turpis egestas lectus. Sit odio lacus eu viverra enim."
        img={Focus}
      />
    ),
  },
  4: {
    content: (
      <TabContent
        title="Lorem ipsum dolor 4"
        description="Lorem ipsum dolor sit amet consectetur. Venenatis pretium eu turpis egestas lectus. Sit odio lacus eu viverra enim."
        img={Highlights}
      />
    ),
  },
  5: {
    content: (
      <TabContent
        title="Lorem ipsum dolor 5"
        description="Lorem ipsum dolor sit amet consectetur. Venenatis pretium eu turpis egestas lectus. Sit odio lacus eu viverra enim."
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
