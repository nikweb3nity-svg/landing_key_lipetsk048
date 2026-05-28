import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "phone"
  | "calculator"
  | "clock"
  | "shield"
  | "check"
  | "key"
  | "lock"
  | "car"
  | "home"
  | "wrench"
  | "safe"
  | "garage"
  | "map"
  | "star"
  | "send"
  | "document"
  | "arrow";

const paths: Record<IconName, ReactNode> = {
  phone: (
    <>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.45 19.45 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.95.35 1.88.66 2.76a2 2 0 0 1-.45 2.11L8.05 9.86a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.88.31 1.81.53 2.76.66A2 2 0 0 1 22 16.92Z" />
    </>
  ),
  calculator: (
    <>
      <rect x="4" y="2.8" width="16" height="18.4" rx="3" />
      <path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s7-3.4 7-10V5.8L12 3 5 5.8V12c0 6.6 7 10 7 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  key: (
    <>
      <circle cx="7.5" cy="14.5" r="3.5" />
      <path d="M10 12 21 1M16 6l2 2M13.5 8.5l2 2" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 15v2" />
    </>
  ),
  car: (
    <>
      <path d="M5 13 6.8 7.8A3 3 0 0 1 9.6 6h4.8a3 3 0 0 1 2.8 1.8L19 13" />
      <path d="M4 13h16v5H4zM7 18v2M17 18v2" />
      <path d="M7.5 15h.01M16.5 15h.01" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10M9 20v-6h6v6" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.8 2.8-2.1-2.1 2.8-2.8Z" />
    </>
  ),
  safe: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 9V6M12 18v-3M9 12H6M18 12h-3" />
    </>
  ),
  garage: (
    <>
      <path d="M4 20V9l8-5 8 5v11" />
      <path d="M7 20v-8h10v8M7 15h10" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  star: (
    <path d="m12 3 2.6 5.3 5.9.9-4.3 4.2 1 5.9L12 16.5 6.8 19.3l1-5.9-4.3-4.2 5.9-.9L12 3Z" />
  ),
  send: (
    <>
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="M22 2 11 13" />
    </>
  ),
  document: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h5M10 12h6M10 16h6" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />
};

export function Icon({ name, className, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.9"
      viewBox="0 0 24 24"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
