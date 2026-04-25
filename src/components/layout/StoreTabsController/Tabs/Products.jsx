import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../../ui';
import { products as P } from '../../../../shared/assets/products/products';

export const Products = () => {
  const { id } = useParams();
  const { products } = P.find((p) => Number(p.userId) === Number(id));

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      {products.map((product, index) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </div>
  );
};
