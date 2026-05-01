import { useState } from 'react';
import { Button, StreamCard, Toasty } from '../../components/ui';
import { streamsData } from '../../shared/assets/user/streamsData';
import ing from '../../shared/assets/products/Vector.svg';

import './style.css';

export const AboutProfileUser = ({ user }) => {
  const [isOpenTost, setIsOpenTost] = useState(false);
  const [isFollow, setIsFollow] = useState(false);

  const streams = streamsData
    .filter((stream) => Number(stream.userId) === Number(user.id))
    .slice(0, 3);

  return (
    <section className="about-profile">
      <div className="about-profile__card">
        <div className="about-profile__avatar-wrapper">
          <img src={user.avatar} alt={user.name} className="about-profile__avatar" />
        </div>

        <div className="about-profile__info">
          <h4 className="about-profile__name">{user.name}</h4>
          <p className="about-profile__description">{user.description}</p>

          <div className="about-profile__rating">
            <span className="about-profile__star">★</span>
            <span className="about-profile__rating-value">{user.rating}</span>
            <span className="about-profile__rating-label">Rating</span>
          </div>
        </div>
      </div>
      <div className="profile-stats">
        <div className="profile-stats__metrics">
          <div className="profile-stats__item">
            <span className="profile-stats__number">56</span>
            <span className="profile-stats__label">Upcoming Streams</span>
          </div>
          <div className="profile-stats__item">
            <span className="profile-stats__number">126</span>
            <span className="profile-stats__label">Finished Streams</span>
          </div>
          <div className="profile-stats__item">
            <span className="profile-stats__number">196.7K</span>
            <span className="profile-stats__label">Followers</span>
          </div>
          <div className="profile-stats__item">
            <span className="profile-stats__number">18,200</span>
            <span className="profile-stats__label">Reviews</span>
          </div>
          <div className="profile-stats__item">
            <span className="profile-stats__number">72,700</span>
            <span className="profile-stats__label">Units sold</span>
          </div>
          <div className="profile-stats__item">
            <span className="profile-stats__number">{user.avgShippingTime}</span>
            <span className="profile-stats__label">Average shipping time</span>
          </div>
        </div>

        <div className="profile-stats__content">
          <div className="profile-stats__social">
            💜 Follow us on IG <span className="profile-stats__handle">{user.igHandle}</span>
          </div>
          <p className="profile-stats__text">
            Lorem ipsum dolor sit amet consectetur. Eget pharetra tempor eget morbi. Id senectus
            varius non vitae ultricies dui mi sodales iaculis. Fermentum congue et odio quis duis.
            Purus nunc nunc non hendrerit convallis quam nunc turpis.
          </p>
        </div>
      </div>
      <div className="about-profile__actions">
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
      <ul className="about-profile__video-container">
        {streams?.map((stream) => (
          <StreamCard stream={stream} key={stream.videoId} />
        ))}
      </ul>
      {isOpenTost && (
        <Toasty error text="Please create an account." setIsOpenTost={setIsOpenTost} />
      )}
    </section>
  );
};
