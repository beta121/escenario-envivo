const AppliancesIcon = ({ size = 24, color = 'currentColor', ...props }) => {
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
      {/* Главный закругленный корпус вилки */}
      <path d="M6 10V7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4z" />

      {/* Два штыря (аккуратно отступают, не слипаются) */}
      <line x1="9" y1="4" x2="9" y2="1" />
      <line x1="15" y1="4" x2="15" y2="1" />

      {/* Провод, уходящий вниз */}
      <path d="M12 14v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
};

export default AppliancesIcon;
