type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="8" y="8" width="80" height="80" rx="24" fill="var(--logo-surface, #0F172A)" />
      <path
        d="M38 29L25 48L38 67"
        stroke="url(#bytecode-grad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58 29L71 48L58 67"
        stroke="url(#bytecode-grad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="48" cy="33" r="4.5" fill="#06B6D4" />
      <circle cx="48" cy="48" r="4.5" fill="#2563EB" />
      <circle cx="48" cy="63" r="4.5" fill="#7C3AED" />
      <path d="M48 37.5V58.5" stroke="var(--logo-line, #E2E8F0)" strokeWidth="3" strokeLinecap="round" />
      <defs>
        <linearGradient id="bytecode-grad" x1="26" y1="28" x2="70" y2="68" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C3AED" />
          <stop offset="0.5" stopColor="#06B6D4" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
    </svg>
  );
}
