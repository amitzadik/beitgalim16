import styles from "./Bubbles.module.css";

type Tone = "light" | "dark";

interface BubblesProps {
  /** "light" — בועות בגווני ים על רקע בהיר; "dark" — בועות לבנות על רקע כהה */
  tone?: Tone;
  /** מספר הבועות המצוירות */
  count?: number;
  className?: string;
}

/* מיקומים, גדלים ועיכובים קבועים — כדי שהרינדור יהיה דטרמיניסטי (ללא Math.random)
   וזהה בשרת ובלקוח. הערכים באחוזים יחסית לאזור העוטף. */
const PRESET = [
  { top: 8, left: 6, size: 120, delay: 0, dur: 13, opacity: 0.5 },
  { top: 62, left: 12, size: 200, delay: 2, dur: 17, opacity: 0.35 },
  { top: 20, left: 82, size: 160, delay: 1, dur: 15, opacity: 0.4 },
  { top: 74, left: 74, size: 96, delay: 3, dur: 12, opacity: 0.55 },
  { top: 40, left: 46, size: 64, delay: 4, dur: 11, opacity: 0.6 },
  { top: 84, left: 34, size: 130, delay: 1.5, dur: 16, opacity: 0.3 },
  { top: 4, left: 40, size: 72, delay: 2.5, dur: 14, opacity: 0.45 },
  { top: 52, left: 92, size: 90, delay: 0.5, dur: 13, opacity: 0.4 },
  { top: 30, left: 22, size: 48, delay: 3.5, dur: 10, opacity: 0.6 },
  { top: 90, left: 60, size: 56, delay: 5, dur: 12, opacity: 0.5 },
  { top: 14, left: 64, size: 40, delay: 4.5, dur: 9, opacity: 0.55 },
  { top: 68, left: 50, size: 150, delay: 2, dur: 18, opacity: 0.28 },
];

/**
 * שכבת רקע דקורטיבית של צורות עגולות אבסטרקטיות ("בועות") שצפות בעדינות.
 * לא אינטראקטיבית ומוסתרת מקוראי מסך.
 */
export default function Bubbles({
  tone = "light",
  count = 8,
  className,
}: BubblesProps) {
  const bubbles = PRESET.slice(0, Math.min(count, PRESET.length));

  return (
    <div
      className={`${styles.layer} ${styles[tone]} ${className ?? ""}`.trim()}
      aria-hidden="true"
    >
      {bubbles.map((b, i) => (
        <span
          key={i}
          className={styles.bubble}
          style={{
            top: `${b.top}%`,
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            opacity: b.opacity,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
