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
      <rect width="20" height="16" x="2" y="4" rx="2" />

      <rect width="11" height="10" x="5" y="7" rx="1" />

      <circle cx="18" cy="8" r="1" fill={color} />
      <circle cx="18" cy="12" r="1" fill={color} />
      <line x1="17" x2="19" y1="16" y2="16" />
    </svg>
  );
};

export default AppliancesIcon;
