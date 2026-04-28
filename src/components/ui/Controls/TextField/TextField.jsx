import './style.css';

export const TextField = ({ placeholder, type = 'text', onChange, value, label }) => {
  return (
    <div className="text-field-container">
      {label && <label className="text-field-label">{label}</label>}
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
