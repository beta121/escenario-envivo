import './styles.css';

export const CategoryAction = ({ onSelect, active, categories, showGradient = true }) => {
  const normalizedCategories = Array.isArray(categories)
    ? categories.map((name) => ({ name, icon: null }))
    : Object.keys(categories).map((name) => ({ name, icon: categories[name] }));

  return (
    <section className={`categories-section ${showGradient ? 'with-gradient' : ''}`}>
      <div className="categories-container">
        {normalizedCategories.map((category, i) => (
          <button
            key={i}
            className={`category-btn ${active === category.name ? 'active' : ''}`}
            onClick={() => onSelect(category.name)}
          >
            {category.icon && typeof category.icon !== 'number' && (
              <span className="category-icon">{category.icon}</span>
            )}

            {category.name && <span className="category-text">{category.name}</span>}
          </button>
        ))}
      </div>
    </section>
  );
};
