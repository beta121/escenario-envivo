import { useParams } from 'react-router-dom';
import { StoreTabsController } from '../../layout';
import { Button, ProductCard } from '../../ui';
import { sellersUsers } from '../../../shared/assets/user/sellersUsers';
import { products as allProducts } from '../../../shared/assets/products/products';
import ing from '../../../shared/assets/products/Vector.svg';
import './style.css';

const Star = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.13406 11.4167L3.67573 13.5C3.52295 13.5972 3.36323 13.6389 3.19656 13.625C3.0299 13.6111 2.88406 13.5556 2.75906 13.4583C2.63406 13.3611 2.53684 13.2397 2.4674 13.0942C2.39795 12.9486 2.38406 12.7853 2.42573 12.6042L3.3424 8.66667L0.279897 6.02083C0.141008 5.89583 0.0543409 5.75333 0.0198965 5.59333C-0.0145479 5.43333 -0.00427022 5.27722 0.0507298 5.125C0.10573 4.97278 0.189063 4.84778 0.30073 4.75C0.412396 4.65222 0.565174 4.58972 0.759063 4.5625L4.80073 4.20833L6.36323 0.5C6.43267 0.333333 6.54045 0.208333 6.68656 0.125C6.83267 0.0416665 6.98184 0 7.13406 0C7.28629 0 7.43545 0.0416665 7.58156 0.125C7.72767 0.208333 7.83545 0.333333 7.9049 0.5L9.4674 4.20833L13.5091 4.5625C13.7035 4.59028 13.8563 4.65278 13.9674 4.75C14.0785 4.84722 14.1618 4.97222 14.2174 5.125C14.273 5.27778 14.2835 5.43417 14.2491 5.59417C14.2146 5.75417 14.1277 5.89639 13.9882 6.02083L10.9257 8.66667L11.8424 12.6042C11.8841 12.7847 11.8702 12.9481 11.8007 13.0942C11.7313 13.2403 11.6341 13.3617 11.5091 13.4583C11.3841 13.555 11.2382 13.6106 11.0716 13.625C10.9049 13.6394 10.7452 13.5978 10.5924 13.5L7.13406 11.4167Z"
        fill="#F7C040"
      />
    </svg>
  );
};

export const SellerStore = () => {
  const { id } = useParams();

  const seller = sellersUsers.find((u) => Number(u.id) === Number(id));
  const { products } = allProducts.find((p) => Number(p.userId) === Number(id));

  if (!seller) return <div>Seller not found</div>;

  return (
    <div className="store-container">
      <div className="store-content">
        <div className="content-store">
          <div className="store-avatar">
            <img
              src={seller.avatar}
              alt={seller.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div className="store-box">
            <h3 className="store-title">{seller.name}</h3>
            <p className="store-description">{seller.description}</p>

            <div className="store-rating-wrapper">
              <div className="store-rating">
                <i>
                  <Star />
                </i>
                <span className="rating-number">{seller.rating}</span>
                <span className="rating-label">Rating</span>
              </div>
              <p className="rating-followers">
                {seller.followers.toLocaleString()} <span>Followers</span>
              </p>
            </div>
          </div>
        </div>
        <div className="store-actions">
          <Button variant="gray">
            <img src={ing} />
          </Button>
          <Button>Follow</Button>
          <Button variant="gray">Message</Button>
        </div>
      </div>

      <div className="store-info">
        <div className="info-container">
          <StatItem value={seller.reviewsCount.toLocaleString()} label="Reviews" />
          <Separator />
          <StatItem value={seller.unitsSold.toLocaleString()} label="Units sold" />
          <Separator />
          <StatItem value={seller.avgShippingTime} label="Average shipping time" />
          <Separator />
          <StatItem value={seller.upcomingStreams} label="Upcoming streams" />
          <Separator />
          <StatItem value={seller.finishedStreams} label="Finished streams" />
        </div>
      </div>

      <div className="store-footer">
        <p className="following">
          Follow us on IG:{' '}
          <a
            href={`https://instagram.com/${seller.igHandle.replace('@', '')}`}
            target="_blank"
            rel="noreferrer"
          >
            {seller.igHandle}
          </a>
        </p>
        <p className="following-description">
          if you have any problems, please send us a message before leaving a review; We respond the
          next business day. Thank you for your patience!
        </p>
      </div>

      <div className="product-container">
        {products.slice(0, 4).map((product, index) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>

      <div className="tab-container">
        <StoreTabsController />
      </div>
    </div>
  );
};

const StatItem = ({ value, label }) => (
  <p className="info-item">
    {value} <span>{label}</span>
  </p>
);

const Separator = () => <span className="separator">•</span>;
