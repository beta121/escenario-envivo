import './style.css';

export const Gallery = ({
  src,
  currentIndex,
  imgArr,
  onClickPrev,
  onClickNext,
  setCurrentIndex,
}) => {
  return (
    <>
      <div className="product__gallery">
        <div className="product__image-outer">
          <div className="product__image-wrapper">
            <img src={src} className="product__main-image" />
          </div>

          <button
            className="product__nav-btn product__nav-btn--prev"
            aria-label="Previous"
            onClick={onClickPrev}
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" fill="none" strokeWidth="2" />
            </svg>
          </button>

          <button
            className="product__nav-btn product__nav-btn--next"
            aria-label="Next"
            onClick={onClickNext}
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" stroke="currentColor" fill="none" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      <div className="product__thumbs">
        {imgArr.map((img, index) => (
          <button
            key={index}
            className={`product__thumb ${index === currentIndex ? 'product__thumb--active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={img} alt={`Preview ${index}`} className="product__thumb-img" />
          </button>
        ))}
      </div>
    </>
  );
};
