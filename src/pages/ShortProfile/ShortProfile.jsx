import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StreamerInfo } from '../../components/ui';
import { shorts } from '../../shared/assets/user/shorts1';
import { sellersUsers } from '../../shared/assets/user/sellersUsers';
import DislikeIcon from '../../shared/assets/svg/DislikeIcon';
import LikeIcon from '../../shared/assets/svg/LikeIcon';
import MessengerIcon from '../../shared/assets/svg/MessengerIcon';
import './style.css';

const ShortProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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

  const changeShort = (direction) => {
    if (currentIndex === -1) return;

    if (direction === 'next' && currentIndex < shorts.length - 1) {
      const nextShort = shorts[currentIndex + 1];
      navigate(`/shorts/${nextShort.id}`, { replace: true });
    } else if (direction === 'prev' && currentIndex > 0) {
      const prevShort = shorts[currentIndex - 1];
      navigate(`/shorts/${prevShort.id}`, { replace: true });
    }
  };

  const handleWheel = (e) => {
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
  console.log(currentUser);

  return (
    <section className="short-profile-wrapper" onWheel={handleWheel}>
      <div className="short-profile-content">
        <div className="short-profile-user">
          <StreamerInfo
            userId={currentUser?.id}
            avatar={currentUser?.avatar}
            name={currentUser?.name}
            rating={currentUser?.rating}
          />
        </div>

        <div className="short-profile-video">
          <div className="short-profile-video-content">
            <div className="active-video-container">
              <video
                key={currentShort.id}
                poster={currentShort.posterUrl}
                src={currentShort.shortSrc}
                autoPlay
                loop
                muted
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

              <div className="icon-container">
                <MessengerIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="short-profile-chat"></div>
      </div>
    </section>
  );
};

export default ShortProfile;
