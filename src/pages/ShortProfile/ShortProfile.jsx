import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { StreamerInfo, ProductCard, Badge } from '../../components/ui';
import { ChatSidebar } from '../../components/layout';

import { shorts } from '../../shared/mocks/shortsData';
import { sellersUsers } from '../../shared/mocks/sellersData';
import { products } from '../../shared/mocks/productsData';

import DislikeIcon from '../../shared/assets/svg/DislikeIcon';
import LikeIcon from '../../shared/assets/svg/LikeIcon';
import MessengerIcon from '../../shared/assets/svg/MessengerIcon';
import star from '../../shared/assets/svg/star.svg';

import './style.css';

const slideVariants = {
  initial: (dir) => ({
    y: dir === 'next' ? '100%' : '-100%',
    opacity: 0,
  }),
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
  exit: (dir) => ({
    y: dir === 'next' ? '-100%' : '100%',
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  }),
};

const chatVariants = {
  hidden: {
    x: '-100%',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ease: 'easeOut', duration: 0.35 },
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: { ease: 'easeInOut', duration: 0.3 },
  },
};

const ShortProfile = () => {
  const touchStartY = useRef(0);
  const [isOpenChat, setIsOpenChat] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [direction, setDirection] = useState('next');

  const currentIndex = shorts.findIndex((short) => Number(short.id) === Number(id));
  const currentShort = shorts[currentIndex];

  const currentUser = sellersUsers.find(
    (seller) => Number(seller.id) === Number(currentShort?.userId)
  );

  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  useEffect(() => {
    setIsLiked(false);
    setIsDisliked(false);
  }, [id]);

  const isScrolling = useRef(false);

  useEffect(() => {
    if (currentIndex === -1 && shorts.length > 0) {
      navigate(`/shorts/${shorts[0].id}`, { replace: true });
    }
  }, [currentIndex, navigate]);

  const changeShort = (dir) => {
    if (currentIndex === -1) return;

    setDirection(dir);

    if (dir === 'next' && currentIndex < shorts.length - 1) {
      const nextShort = shorts[currentIndex + 1];
      navigate(`/shorts/${nextShort.id}`, { replace: true });
    } else if (dir === 'prev' && currentIndex > 0) {
      const prevShort = shorts[currentIndex - 1];
      navigate(`/shorts/${prevShort.id}`, { replace: true });
    }
  };
  const handleTouchStart = (e) => {
    // Если свайпают внутри чата, не переключаем видео
    if (e.target.closest('.short-profile-chat')) return;

    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (e.target.closest('.short-profile-chat')) return;
    if (isScrolling.current) return;

    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY; // Разница в пикселях

    // Чувствительность свайпа: переключаем, только если протянули больше чем на 50px
    if (Math.abs(deltaY) < 50) return;

    isScrolling.current = true;

    if (deltaY > 0) {
      // Свайп снизу вверх -> следующее видео
      changeShort('next');
    } else {
      // Свайп сверху вниз -> предыдущее видео
      changeShort('prev');
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 600);
  };

  const handleWheel = (e) => {
    if (e.target.closest('.short-profile-chat')) return;

    if (Math.abs(e.deltaY) < 30) return;
    if (isScrolling.current) return;

    isScrolling.current = true;

    if (e.deltaY > 0) {
      changeShort('next');
    } else {
      changeShort('prev');
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 600);
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) setIsDisliked(false);
  };

  const handleDislikeClick = () => {
    setIsDisliked(!isDisliked);
    if (!isDisliked) setIsLiked(false);
  };

  if (currentIndex === -1 || !currentShort) {
    return (
      <div
        className="short-profile-wrapper"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}
      >
        <h3>Поиск видео...</h3>
      </div>
    );
  }

  const nextShort = shorts[currentIndex + 1];

  const currentProduct = products
    .find((data) => Number(data.userId) === Number(currentShort.userId))
    ?.products?.find((product) => product.type === 'giveaway');

  const isShorts = location.pathname.includes('/shorts');

  return (
    <section
      className="short-profile-wrapper"
      onWheel={handleWheel}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="short-profile-content">
        <div className="short-profile-user">
          <ProductCard product={currentProduct} />
          <h3 className="short-profile-user-title">{currentShort.title}</h3>
          <StreamerInfo
            userId={currentUser?.id}
            avatar={currentUser?.avatar}
            name={currentUser?.name}
            rating={currentUser?.rating}
          />
        </div>

        <div className="short-profile-video">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={currentShort.id}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="short-profile-video-content"
              style={{ width: '100%', height: '100%' }}
            >
              <div className="short-profile-heder">
                <div className="short-profile-heder-content">
                  <div className="short-profile-avatar-mob">
                    <img className="avatar-img" src={currentUser?.avatar} alt="avatar" />
                    <i className="avatar-star-badge">
                      <img src={star} alt="star" />
                    </i>
                  </div>
                  <p className="short-profile-heder-title">{currentShort.title}</p>
                </div>

                <Badge text={`Views ${currentShort.views}`} type={'video'} />
              </div>

              <div className="active-video-container">
                <video
                  key={currentShort.id}
                  src={currentShort.shortSrc}
                  autoPlay
                  loop
                  playsInline
                />
              </div>

              {nextShort && (
                <div className="next-video-strip" onClick={() => changeShort('next')}>
                  <video src={nextShort.shortSrc} poster={nextShort.posterUrl} muted playsInline />
                </div>
              )}

              <div className="short-profile-video-icons">
                <div
                  className={`icon-container ${isLiked ? 'active-like' : ''}`}
                  onClick={handleLikeClick}
                >
                  <LikeIcon
                    fill={isLiked ? 'rgb(20, 170, 58)' : 'none'}
                    color={isLiked ? 'rgb(20, 170, 58)' : 'currentColor'}
                  />
                </div>

                <div
                  className={`icon-container ${isDisliked ? 'active-dislike' : ''}`}
                  onClick={handleDislikeClick}
                >
                  <DislikeIcon
                    fill={isDisliked ? '#dc3545' : 'none'}
                    color={isDisliked ? '#dc3545' : 'currentColor'}
                  />
                </div>

                <div className="icon-container" onClick={() => setIsOpenChat(!isOpenChat)}>
                  <MessengerIcon />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="short-profile-chat">
          <AnimatePresence>
            {isOpenChat && (
              <div className="short-profile-chat-overlay" onClick={() => setIsOpenChat(false)}>
                <motion.div
                  variants={chatVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={(e) => e.stopPropagation()}
                  className="short-profile-chat-window"
                >
                  <ChatSidebar isLive={isShorts} />
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ShortProfile;
