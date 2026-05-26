const RefrigeratorIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Основной корпус холодильника */}
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />

      {/* Линия разделения между морозилкой и камерой */}
      <line x1="5" y1="9" x2="19" y2="9" />

      {/* Ручка верхней камеры */}
      <line x1="8" y1="5" x2="8" y2="7" />

      {/* Ручка нижней камеры */}
      <line x1="8" y1="12" x2="8" y2="16" />
    </svg>
  );
};

export default RefrigeratorIcon;
