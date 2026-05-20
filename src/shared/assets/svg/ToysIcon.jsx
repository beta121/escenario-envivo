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
      <rect x="9" y="5" width="6" height="4" rx="1" />
      <line x1="12" y1="5" x2="12" y2="3" />
      <circle cx="12" cy="2" r="1" fill={color} />

      <circle cx="11" cy="7" r="0.5" fill={color} />
      <circle cx="13" cy="7" r="0.5" fill={color} />

      <rect x="7" y="9" width="10" height="8" rx="2" />

      <path d="M7 11H5v3h2" />
      <path d="M17 11h2v3h-2" />

      <rect x="8" y="17" width="3" height="3" rx="1" />
      <rect x="13" y="17" width="3" height="3" rx="1" />
    </svg>
  );
};

export default ToysIcon;
