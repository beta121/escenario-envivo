import { useState } from 'react';
import { Tab } from '../../layout';
import { Products, Streams, Videos, Shorts, Reviews } from './Tabs';

const categories = ['iPhone', 'iPad', 'Mac', 'Macbook'];

export const StoreTabsController = () => {
  const [category, setCategory] = useState('Macbook');

  const tabData = [
    { label: 'Streams', content: <Streams /> },
    { label: 'Products', content: <Products /> },
    { label: 'Videos', content: <Videos /> },
    { label: 'Shorts', content: <Shorts /> },
    { label: 'Reviews', content: <Reviews /> },
  ];

  // ------ delete height

  return (
    <div style={{ margin: '25px 0 25px 0', height: '1100px' }}>
      <Tab
        items={tabData}
        filterCategory={categories}
        active={category}
        onSelect={setCategory}
        showFilter="Products"
      />
    </div>
  );
};
