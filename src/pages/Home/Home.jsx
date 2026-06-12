import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CategoryAction, HighlightCard, Short, SearchBar, StreamCard } from '../../components/ui';
import { ExpandableBox, FavoriteSellers } from '../../components/layout';
import { streamsData } from '../../shared/assets/user/streamsData';
import { products } from '../../shared/assets/products/products';
import { shorts } from '../../shared/assets/user/shorts';
import { useHeader } from '../../shared/context/HeaderContext';

import AppliancesIcon from '../../shared/assets/svg/AppliancesIcon';
import GadgetsIcon from '../../shared/assets/svg/GadgetsIcon';
import PhonesIcon from '../../shared/assets/svg/PhonesIcon';
import ToysIcon from '../../shared/assets/svg/ToysIcon';
import ScreensIcon from '../../shared/assets/svg/ScreensIcon';
import ConsolesIcon from '../../shared/assets/svg/ConsolesIcon';
import CamerasIcon from '../../shared/assets/svg/CamerasIcon';
import DevicesIcon from '../../shared/assets/svg/DevicesIcon';
import OfficeIcon from '../../shared/assets/svg/OfficeIcon';
import RefrigeratorIcon from '../../shared/assets/svg/RefrigeratorIcon';

import './styles.css';

const categoryIcons = {
  Accessories: <RefrigeratorIcon />,
  Gadgets: <GadgetsIcon />,
  Phones: <PhonesIcon />,
  Toys: <ToysIcon />,
  Screens: <ScreensIcon />,
  Gaming: <ConsolesIcon />,
  Cameras: <CamerasIcon />,
  Devices: <DevicesIcon />,
  Office: <OfficeIcon />,
  Appliances: <AppliancesIcon />,
};

const Home = () => {
  const [category, setCategory] = useState('all');
  const { isSearchVisible } = useHeader();

  const handleClick = (key) => {
    setCategory((prev) => (prev === key ? 'all' : key));
  };

  const combinedStreams = useMemo(() => {
    if (category === 'all') return streamsData;
    const filtered = streamsData.filter((item) => item.category === category);
    return filtered.length > 0 ? filtered : streamsData;
  }, [category, streamsData]);

  const currentProducts = products.map((product) => product.products[0]);

  const limitShorts = useMemo(() => {
    const firsts = Object.values(
      shorts.reduce((acc, short) => {
        if (!acc[short.userId]) {
          acc[short.userId] = short;
        }
        return acc;
      }, {})
    );

    if (shorts.length <= 12) return shorts;
    if (firsts.length >= 12) return firsts.slice(0, 12);

    const takenIds = new Set(firsts.map((s) => s.id));

    const remaining = shorts.filter((short) => !takenIds.has(short.id));

    const needed = 12 - firsts.length;

    return [...firsts, ...remaining.slice(0, needed)];
  }, []);

  return (
    <div className="main-container">
      <AnimatePresence>
        {isSearchVisible && (
          <motion.div
            className="main-search-container"
            style={{ paddingRight: '16px', marginBottom: '20px' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <SearchBar onSearch={(val) => console.log(val)} />
          </motion.div>
        )}
      </AnimatePresence>

      <CategoryAction onSelect={handleClick} active={category} categories={categoryIcons} />

      {/* Блок с стримами */}
      <div style={{ margin: '15px 0 24px' }}>
        <ExpandableBox showGradient={false} showMo={combinedStreams.length}>
          {(combinedStreams || []).map((stream) => (
            <StreamCard stream={stream} key={`stream-${stream.videoId}`} />
          ))}
        </ExpandableBox>
      </div>

      {/* Блок с продуктами */}
      <div style={{ margin: '15px 0 24px' }}>
        <ExpandableBox showGradient={false} showMo={currentProducts.length} gap={20}>
          {(currentProducts || []).map((product, index) => {
            const productId = product?.id || product?.productId || product?._id || index;

            return <HighlightCard product={product} key={`product-${productId}`} />;
          })}
        </ExpandableBox>
      </div>

      <div style={{ margin: '15px 0 24px' }}>
        <ExpandableBox showGradient={false} showMo={limitShorts.length}>
          {(limitShorts || []).map((short) => (
            <Short key={`short-${short.id}`} short={short} showInfo={false} />
          ))}
        </ExpandableBox>
      </div>

      <FavoriteSellers title="TRENDING SELLERS" />
    </div>
  );
};

export default Home;
