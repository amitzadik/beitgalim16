import type { ProgramCategory } from "@/data/events";

interface CategoryIconProps {
  icon: ProgramCategory["icon"];
}

/** אייקוני קו פשוטים לכל קטגוריית תוכנית. */
export default function CategoryIcon({ icon }: CategoryIconProps) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (icon) {
    case "music":
      return (
        <svg {...common}>
          <path d="M9 18V5l11-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="17" cy="16" r="3" />
        </svg>
      );
    case "walk":
      return (
        <svg {...common}>
          <circle cx="13" cy="4" r="2" />
          <path d="M11 21l1.5-6L9 12l1-5 4 2 2 3" />
          <path d="M12.5 15L9 21" />
        </svg>
      );
    case "family":
      return (
        <svg {...common}>
          <circle cx="8" cy="6" r="2.4" />
          <circle cx="16" cy="6" r="2.4" />
          <path d="M4 21v-3a4 4 0 0 1 4-4 4 4 0 0 1 4 4v3" />
          <path d="M12 21v-3a4 4 0 0 1 4-4 4 4 0 0 1 4 4v3" />
        </svg>
      );
    case "house":
      return (
        <svg {...common}>
          <path d="M3 11l9-7 9 7" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-6h4v6" />
        </svg>
      );
    default:
      return null;
  }
}
