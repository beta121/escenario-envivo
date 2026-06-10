import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Gallery, Toasty } from '../../components/ui';
import avatar1 from '../../shared/assets/user/img/avatar1.png';
import com1 from '../../shared/assets/products/comp/item-buy1.png';
import com2 from '../../shared/assets/products/comp/item-buy2.png';
import com3 from '../../shared/assets/products/comp/item-buy3.png';
import com4 from '../../shared/assets/products/comp/item-buy4.png';
import com5 from '../../shared/assets/products/comp/item-buy5.png';
import com12 from '../../shared/assets/products/comp/highlights1.png';
import card1 from '../../shared/assets/svg/card4.svg';
import card2 from '../../shared/assets/svg/card2.svg';
import card3 from '../../shared/assets/svg/card3.svg';
import card4 from '../../shared/assets/svg/card1.svg';

import './style.css';

const footerCard = [card1, card2, card3, card4];
const imgArr = [com1, com2, com3, com4, com5, com12];

const ProductPage = () => {
  const [isOpenTost, setIsOpenTost] = useState(false);
  const [counter, setCounter] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();

  const handleClickNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imgArr.length);
  };

  const handleClickPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? imgArr.length - 1 : prev - 1));
  };

  return (
    <div className="product">
      <div className="product__gallery">
        <Gallery
          src={imgArr[currentIndex]}
          imgArr={imgArr}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          onClickNext={handleClickNext}
          onClickPrev={handleClickPrev}
        />
        <div className="product__footer">
          <h5>100% secure payment guarantee.</h5>
          <ul style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {footerCard.map((card, idx) => (
              <li key={idx}>
                <img src={card} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="product__info">
        <div className="product__heder">
          <div className="user__avatar">
            <img src={avatar1} />
          </div>

          <Link to={`/user/1`}>
            <h3 className="product__shop-title">
              Live Haul Hub <span className="product__rating">★ 4.7</span>{' '}
              <span className="product__reviews">(21,671 reviews)</span>
            </h3>
          </Link>
        </div>

        <p className="product__title">
          2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space
          Gray
        </p>

        <div className="product__price-block">
          <span className="product__price product__price--current">$1699</span>
          <span className="product__price product__price--old">$1999.00</span>
          <span className="product__badge">21% discount</span>
        </div>

        <p className="product__description">
          Lorem ipsum dolor sit amet consectetur. Nibh tempor feugiat ultrices nisi arcu nisl amet
          eget ullamcorper. At sed at ut ultrices leo ornare.
        </p>
        <div className="product__actions">
          <div className="product__quantity">
            <button
              className="product__qty-btn"
              type="button"
              onClick={() => setCounter((prev) => (prev === 1 ? prev : prev - 1))}
            >
              −
            </button>
            <span className="product__qty-value">{String(counter).padStart(2, 0)}</span>
            <button
              className="product__qty-btn"
              type="button"
              onClick={() => setCounter((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button
            className="product__btn product__btn--primary"
            onClick={() => setIsOpenTost(true)}
          >
            BUY NOW
          </button>
          <button
            className="product__btn product__btn--secondary"
            onClick={() => setIsOpenTost(true)}
          >
            ADD TO CART
          </button>
        </div>

        <div className="product__divider" />

        <ul className="product__specs">
          <li className="product__spec">
            Brand: <span>Apple</span>
          </li>
          <li className="product__spec">
            Size: <span>14-inch Liquid Retina XDR display</span>
          </li>
          <li className="product__spec">
            Memory: <span>16 GB unified memory</span>
          </li>
          <li className="product__spec">
            Storage: <span>SSD storage for 1 TB</span>
          </li>
          <li className="product__spec">
            SKU: <span>A264671</span>
          </li>
          <li className="product__spec">
            Availability: <span>In stock</span>
          </li>
          <li className="product__spec">
            Category: <span>Electronic devices</span>
          </li>
        </ul>
      </div>
      {isOpenTost && (
        <Toasty error text="Please create an account." setIsOpenTost={setIsOpenTost} />
      )}
    </div>
  );
};

export default ProductPage;
