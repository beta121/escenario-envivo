import './style.css';

export const TextField = ({ placeholder, type = 'text', onChange, value }) => {
  return (
    <div className="text-field-container">
      <input
        className="text-field"
        placeholder={placeholder}
        type={type}
        autoComplete={type === 'email' ? 'email' : 'off'}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
