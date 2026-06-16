import React from 'react';
import { useParams } from 'react-router-dom';
import { Short } from '../../../ui';
import { shorts } from '../../../../shared/mocks/shortsData';

export const Shorts = () => {
  const { id } = useParams();
  const currentShorts = shorts.filter((p) => Number(p.userId) === Number(id));

  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {currentShorts.map((short) => {
        return <Short key={short.id} short={short} />;
      })}
    </div>
  );
};
