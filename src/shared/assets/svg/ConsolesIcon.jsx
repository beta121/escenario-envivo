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
      {/* Левая ручка геймпада */}
      <path d="M6 12c0 4.5-1.5 7-3.5 7S1 17 1 14.5V11" />

      {/* Правая ручка геймпада */}
      <path d="M18 12c0 4.5 1.5 7 3.5 7s1.5-2 1.5-4.5V11" />

      {/* Основной аккуратный корпус (не обрезается сверху) */}
      <rect x="3" y="6" width="18" height="9" rx="3.5" />

      {/* Четкий D-Pad (крестик) слева */}
      <path d="M6 10.5h3M7.5 9v3" />

      {/* Две аккуратные круглые кнопки справа */}
      <circle cx="15" cy="11.5" r="1" fill={color} stroke="none" />
      <circle cx="17.5" cy="9.5" r="1" fill={color} stroke="none" />
    </svg>
  );
};

export default ConsolesIcon;
