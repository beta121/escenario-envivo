const ScreensIcon = ({ size = 24, color = 'currentColor', ...props }) => {
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
      {/* Основная рамка дисплея */}
      <rect x="2" y="3" width="20" height="13" rx="2" />

      {/* Ножка подставки */}
      <path d="M12 16v4" />

      {/* Основание подставки */}
      <path d="M8 20h8" />
    </svg>
  );
};

export default ScreensIcon;
