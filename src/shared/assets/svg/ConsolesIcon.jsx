const ConsolesIcon = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Корпус геймпада */}
      <path d="M18 3H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4z" />

      {/* Крестовина (D-Pad) слева */}
      <path d="M6 12h4M8 10v4" />

      {/* Кнопки действия справа */}
      <circle cx="15" cy="11" r="1" fill={color} />
      <circle cx="18" cy="13" r="1" fill={color} />
    </svg>
  );
};

export default ConsolesIcon;
