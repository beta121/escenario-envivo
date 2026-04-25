import './styles.css';

export const CategoryAction = ({ onSelect, active, categories, showGradient = true }) => {
  return (
    <section className={`categories-section ${showGradient ? 'with-gradient' : ''}`}>
      <div className="categories-container">
        {categories.map((category, i) => (
          <button
            key={i}
            className={`category-btn ${active === category ? 'active' : ''}`}
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};
