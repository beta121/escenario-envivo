import './style.css';

export const CheckBox = ({ label, checked, onChange, value }) => {
  return (
    <label className="checkbox-form">
      <input type="checkbox" checked={checked} onChange={() => onChange(value)} />
      <span className="checkMark"></span>
      <span className="tag-text">{label}</span>
    </label>
  );
};
