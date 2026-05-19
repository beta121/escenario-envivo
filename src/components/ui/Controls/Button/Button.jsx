import './style.css';

export const Button = ({ padding, children, variant = 'filled', onClick, disabled, ...props }) => {
  const variants = {
    filled: 'btn-filled',
    outline: 'btn-outline',
    gray: 'btn-gray',
  };

  const variantClass = variants[variant] || variants.filled;

  return (
    <button
      className={`btn ${variantClass} ${disabled ? 'btn-disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
