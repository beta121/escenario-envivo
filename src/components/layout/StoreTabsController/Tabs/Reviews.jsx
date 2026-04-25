import React from 'react';
import { useParams } from 'react-router-dom';
import { CommentItem } from '../../../ui';
import { reviews } from '../../../../shared/assets/user/reviews';

export const Reviews = () => {
  const { id } = useParams();
  const currentReviews = reviews.filter((p) => Number(p.userId) === Number(id));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {currentReviews.map((comment) => {
        return <CommentItem comment={comment} />;
      })}
    </div>
  );
};
