import { useParams } from 'react-router-dom';
import { ProductCarousel, ChatSidebar, VideoPlayer } from '../../components/layout';
import { streamsData } from '../../shared/assets/user/streamsData';
import { products } from '../../shared/assets/products/products';
import './style.css';

const VideoProfile = () => {
  const { id } = useParams();

  const currentVideo = Object.fromEntries(streamsData.map((item) => [item.videoId, item]));
  const currentProduct = Object.fromEntries(products.map((item) => [item.userId, item]));

  const prods = currentProduct[currentVideo[id].userId].products.filter(
    (product) =>
      product.type === 'discount' || (product.type === 'default' && product.variant === 'default')
  );

  return (
    <section className="broadcast-page">
      <div className="main-layout">
        <h3 className="broadcast-title">{currentVideo[id].videoTitle}</h3>

        <div className="view-section">
          <VideoPlayer
            streamerData={currentVideo[id]}
            videoUrl={currentVideo[id]?.streamVideo}
            status={currentVideo[id]?.status}
          />
          <ChatSidebar />
        </div>

        <footer className="products-shelf">
          <ProductCarousel currentProduct={prods} />
        </footer>
      </div>
    </section>
  );
};

export default VideoProfile;
