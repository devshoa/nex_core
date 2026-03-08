export default function Logo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="url(#logo-grad)" />
      <path d="M8 16L14 10L20 16L14 22L8 16Z" fill="white" opacity="0.9" />
      <path d="M14 16L20 10L26 16L20 22L14 16Z" fill="white" opacity="0.6" />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
