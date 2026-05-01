import { useMemo, useState } from 'react';
import { CategoryAction, HighlightCard } from '../../components/ui';
import { ExpandableBox, FavoriteSellers } from '../../components/layout';
import { streamsData } from '../../shared/assets/user/streamsData';
import { productHighlights } from '../../shared/assets/products/productHighlights';
import { StreamCard } from '../../components/ui';
import './styles.css';

const categoriesFilters = [
  'Appliances',
  'Computers',
  'Telephones',
  'Electric toys',
  'Accessories',
  'Televisions',
  'Laptops',
  'Video game consoles',
  'Digital cameras',
];

const Home = () => {
  const [category, setCategory] = useState('all');

  const handleClick = (key) => {
    setCategory((prev) => (prev === key ? 'all' : key));
  };

  const liveStreams = useMemo(() => {
    const live = streamsData.filter((item) => item.status === 'live');
    const video = streamsData.filter((item) => item.status === 'video');

    if (category === 'all') return [...live, ...video];

    const currentCategoryLive = live.filter((item) => item.category === category);
    const otherLive = live.filter((item) => item.category !== category);
    const currentCategoryVideo = video.filter((item) => item.category === category);

    return [...currentCategoryLive, ...otherLive, ...currentCategoryVideo];
  }, [category, streamsData]);

  const upcomingSorted = useMemo(() => {
    const raw = streamsData.filter((item) => item.status === 'upcoming');

    if (category === 'all') return raw;

    return [
      ...raw.filter((item) => item.category === category),
      ...raw.filter((item) => item.category !== category),
    ];
  }, [category]);

  return (
    <div className="main-container">
      <CategoryAction onSelect={handleClick} active={category} categories={categoriesFilters} />
      <div style={{ marginTop: '15px' }}>
        <ExpandableBox title="LIVE NOW" showGradient={false} showMo={liveStreams.length}>
          {liveStreams?.map((stream) => (
            <StreamCard stream={stream} key={stream.videoId} />
          ))}
        </ExpandableBox>
      </div>

      <ExpandableBox title="UPCOMING Streams" showGradient={false} showMo={upcomingSorted.length}>
        {upcomingSorted?.map((stream) => (
          <StreamCard stream={stream} key={stream.videoId} />
        ))}
      </ExpandableBox>

      <ExpandableBox
        title="Product highlights"
        showGradient={false}
        showMo={productHighlights.length}
      >
        {productHighlights?.map((product) => (
          <HighlightCard product={product} key={product.id} />
        ))}
      </ExpandableBox>

      <FavoriteSellers title="DISCOVER AMAZING SELLERS" />
    </div>
  );
};

export default Home;
