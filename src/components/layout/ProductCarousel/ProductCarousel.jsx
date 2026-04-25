import { ProductCard } from '../../ui/Card/';
import './styles.css';

export const ProductCarousel = ({ currentProduct }) => {
  return (
    <section className="products-carousel-section">
      <div className="products-row">
        {currentProduct.products.map((product, index) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </section>
  );
};
