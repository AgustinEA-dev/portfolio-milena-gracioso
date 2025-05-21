export function HamburgerIcon({
  className = "",
  color = "#96ffdc",
  size = 24,
  ...props
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color }}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 5H2V3H14V5ZM14 9H2V7H14V9ZM2 13H14V11H2V13Z"
      />
    </svg>
  );
}

export default HamburgerIcon;
