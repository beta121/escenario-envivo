import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { StoreTabsController } from '../../layout';
import { Button, ProductCard, Toasty } from '../../ui';
import { sellersUsers } from '../../../shared/mocks/sellersData';
import { products as allProducts } from '../../../shared/mocks/productsData';
import ing from '../../../shared/assets/svg/Vector.svg';
import star from '../../../shared/assets/svg/star.svg';

import './style.css';

export const SellerStore = () => {
  const [isOpenTost, setIsOpenTost] = useState(false);
  const [isFollow, setIsFollow] = useState(false);
  const { id } = useParams();

  const seller = sellersUsers.find((u) => Number(u.id) === Number(id));
  const { products = [] } = allProducts.find((p) => Number(p.userId) === Number(id)) || {};

  const filteredProducts = products.filter((p) => p.type === 'giveaway' || p.type === 'discount');

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
                  <img src={star} />
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
          <Button
            onClick={() => setIsFollow((prev) => !prev)}
            style={{ background: isFollow ? 'rgb(20, 170, 58)' : '#e85d26' }}
          >
            {isFollow ? 'Following' : 'Follow'}
          </Button>
          <Button
            variant="gray"
            onClick={() => {
              setIsOpenTost(true);
            }}
          >
            Message
          </Button>
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
        {filteredProducts.slice(0, 4).map((product, index) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>

      <div className="tab-container">
        <StoreTabsController />
      </div>
      {isOpenTost && (
        <Toasty error text="Please create an account." setIsOpenTost={setIsOpenTost} />
      )}
    </div>
  );
};

const StatItem = ({ value, label }) => (
  <p className="info-item">
    {value} <span>{label}</span>
  </p>
);

const Separator = () => <span className="separator">•</span>;
