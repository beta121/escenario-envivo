import './style.css';

export const Button = ({ children, variant = 'filled', onClick, ...props }) => {
  const variants = {
    filled: 'btn-filled',
    outline: 'btn-outline',
    gray: 'btn-gray',
  };

  const variantClass = variants[variant] || variants.filled;

  return (
    <button className={`btn ${variantClass}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
