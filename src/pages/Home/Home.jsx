import { useMemo, useState } from 'react';
import { CategoryAction, HighlightCard, Short } from '../../components/ui';
import { ExpandableBox, FavoriteSellers } from '../../components/layout';
import { streamsData } from '../../shared/assets/user/streamsData';
import { products } from '../../shared/assets/products/products';
import { shorts } from '../../shared/assets/user/shorts1';
import { StreamCard } from '../../components/ui';

import AppliancesIcon from '../../shared/assets/svg/AppliancesIcon';
import GadgetsIcon from '../../shared/assets/svg/GadgetsIcon';
import PhonesIcon from '../../shared/assets/svg/PhonesIcon';
import ToysIcon from '../../shared/assets/svg/ToysIcon';
import ScreensIcon from '../../shared/assets/svg/ScreensIcon';
import ConsolesIcon from '../../shared/assets/svg/ConsolesIcon';
import CamerasIcon from '../../shared/assets/svg/CamerasIcon';

import './styles.css';

const categoryIcons = {
  Appliances: <AppliancesIcon />,
  Gadgets: <GadgetsIcon />,
  Phones: <PhonesIcon />,
  Toys: <ToysIcon />,
  Screens: <ScreensIcon />,
  'Game Consoles': <ConsolesIcon />,
  Cameras: <CamerasIcon />,
};

const Home = () => {
  const [category, setCategory] = useState('all');

  const handleClick = (key) => {
    setCategory((prev) => (prev === key ? 'all' : key));
  };

  const combinedStreams = useMemo(() => {
    const filteredData =
      category === 'all' ? streamsData : streamsData.filter((item) => item.category === category);

    const live = filteredData.filter((item) => item.status === 'live');
    const upcoming = filteredData.filter((item) => item.status === 'upcoming');
    const video = filteredData.filter((item) => item.status === 'video');

    return [...live, ...upcoming, ...video];
  }, [category, streamsData]);

  const currentProducts = products.map((product) => product.products[0]);

  return (
    <div className="main-container">
      <CategoryAction onSelect={handleClick} active={category} categories={categoryIcons} />

      <div style={{ margin: '15px 0 24px' }}>
        <ExpandableBox showGradient={false} showMo={combinedStreams.length}>
          {combinedStreams?.map((stream) => (
            <StreamCard stream={stream} key={stream.videoId} />
          ))}
        </ExpandableBox>
      </div>

      <div style={{ margin: '15px 0 24px' }}>
        <ExpandableBox showGradient={false} showMo={currentProducts.length} gap="20px">
          {currentProducts?.map((product) => (
            <HighlightCard product={product} key={product.id} />
          ))}
        </ExpandableBox>
      </div>

      <ExpandableBox showGradient={false} showMo={shorts.length}>
        {shorts.map((short) => {
          return <Short key={short.id} short={short} size="small" showInfo={false} />;
        })}
      </ExpandableBox>

      <FavoriteSellers title="TRENDING SELLERS" />
    </div>
  );
};

export default Home;
