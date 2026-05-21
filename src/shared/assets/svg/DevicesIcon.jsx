const DevicesIcon = ({ size = 24, color = 'currentColor', ...props }) => {
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
      {/* Массивный вертикальный корпус с более скругленными углами (как у iPad) */}
      <rect x="4" y="2" width="16" height="20" rx="2.5" />

      {/* Динамик/Камера сверху (простая аккуратная линия в мелком размере) */}
      <line x1="11" y1="5" x2="13" y2="5" />

      {/* Внутренняя граница экрана (четко отделяет дисплей от рамок) */}
      <rect x="6" y="7" width="12" height="11" rx="1" />

      {/* Кнопка Home внизу (теперь это circle с fill, она отлично читается на экране) */}
      <circle cx="12" cy="19.5" r="1" fill={color} stroke="none" />
    </svg>
  );
};

export default DevicesIcon;
