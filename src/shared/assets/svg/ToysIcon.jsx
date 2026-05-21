const ToysIcon = ({ size = 24, color = 'currentColor', ...props }) => {
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
      {/* Центральный корпус дрона (основа) */}
      <circle cx="12" cy="12" r="3" />

      {/* Маленький глазок камеры по центру */}
      <circle cx="12" cy="12" r="0.75" fill={color} stroke="none" />

      {/* Лучи к пропеллерам (крест-накрест) */}
      <line x1="9.5" y1="9.5" x2="5" y2="5" />
      <line x1="14.5" y1="9.5" x2="19" y2="5" />
      <line x1="9.5" y1="14.5" x2="5" y2="19" />
      <line x1="14.5" y1="14.5" x2="19" y2="19" />

      {/* Моторчики на концах лучей */}
      <circle cx="5" cy="5" r="1.5" fill={color} stroke="none" />
      <circle cx="19" cy="5" r="1.5" fill={color} stroke="none" />
      <circle cx="5" cy="19" r="1.5" fill={color} stroke="none" />
      <circle cx="19" cy="19" r="1.5" fill={color} stroke="none" />

      {/* Пропеллеры (стильные горизонтальные овальные линии) */}
      <path d="M2 5h6" />
      <path d="M16 5h6" />
      <path d="M2 19h6" />
      <path d="M16 19h6" />
    </svg>
  );
};

export default ToysIcon;
