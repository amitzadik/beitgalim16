import styles from "./Button.module.css";

type Variant = "primary" | "secondary";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  /** תיאור נגיש כאשר הטקסט הגלוי אינו מספיק */
  ariaLabel?: string;
}

/** כפתור־קישור נגיש ועקבי לכל האתר (גלילה חלקה לעוגנים פנימיים). */
export default function Button({
  href,
  children,
  variant = "primary",
  ariaLabel,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${styles.button} ${styles[variant]}`}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
