const GadgetsIcon = ({ size = 24, color = 'currentColor', ...props }) => {
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
      {/* Верхний ремешок */}
      <path d="M16 4V2H8v2" />

      {/* Нижний ремешок */}
      <path d="M8 20v2h8v-2" />

      {/* Корпус часов (округлый квадрат) */}
      <rect x="5" y="4" width="14" height="16" rx="3" />

      {/* Экран внутри */}
      <rect x="8" y="7" width="8" height="10" rx="1" opacity="0.7" />

      {/* Кнопка сбоку (колёсико Digital Crown) */}
      <path d="M19 9v2" />
    </svg>
  );
};

export default GadgetsIcon;
