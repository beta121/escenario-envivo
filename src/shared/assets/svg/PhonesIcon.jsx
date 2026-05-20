const PhonesIcon = ({ size = 24, color = 'currentColor', ...props }) => {
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
      {/* Основной корпус смартфона */}
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />

      {/* Разговорный динамик сверху */}
      <line x1="12" y1="5" x2="12" y2="5.01" strokeWidth="3" />

      {/* Индикатор/Кнопка «Домой» или нижняя черта навигации */}
      <line x1="10" y1="19" x2="14" y2="19" />
    </svg>
  );
};

export default PhonesIcon;
