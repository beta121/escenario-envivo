const OfficeIcon = () => {
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
      {/* Верхний лоток с бумагой */}
      <path d="M6 9V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5" />

      {/* Главный массивный корпус принтера */}
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />

      {/* Нижний лоток, откуда выходит напечатанный лист */}
      <rect x="6" y="14" width="12" height="7" rx="1" />

      {/* Маленький аккуратный индикатор/кнопка справа */}
      <line x1="18" y1="11" x2="18.01" y2="11" strokeWidth="3" />
    </svg>
  );
};

export default OfficeIcon;
