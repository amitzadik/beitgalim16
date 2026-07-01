import styles from "./Bubbles.module.css";

type Tone = "light" | "dark";

interface BubblesProps {
  /** "light" — צורות בגווני ים בהירות; "dark" — צורות בהירות על רקע כהה */
  tone?: Tone;
  /** מספר הצורות המצוירות */
  count?: number;
  /** שכבת רקע קבועה (fixed) המשותפת לכל העמוד — הצורות זזות בין הסקשנים */
  fixed?: boolean;
  className?: string;
}

/* מיקומים, גדלים, צורה (border-radius אורגני), סיבוב ועיכובים קבועים —
   כדי שהרינדור יהיה דטרמיניסטי (ללא Math.random) וזהה בשרת ובלקוח.
   כל פריט הוא צורה אבסטרקטית ייחודית. הערכים באחוזים יחסית לאזור העוטף. */
const PRESET = [
  { top: 8, left: 6, size: 150, delay: 0, dur: 15, opacity: 0.5, rot: -12, radius: "42% 58% 63% 37% / 41% 44% 56% 59%" },
  { top: 62, left: 12, size: 230, delay: 2, dur: 19, opacity: 0.32, rot: 18, radius: "63% 37% 54% 46% / 55% 48% 52% 45%" },
  { top: 20, left: 82, size: 185, delay: 1, dur: 17, opacity: 0.4, rot: -22, radius: "38% 62% 47% 53% / 62% 41% 59% 38%" },
  { top: 74, left: 74, size: 120, delay: 3, dur: 13, opacity: 0.55, rot: 8, radius: "50% 50% 33% 67% / 55% 61% 39% 45%" },
  { top: 40, left: 46, size: 90, delay: 4, dur: 12, opacity: 0.6, rot: 30, radius: "67% 33% 58% 42% / 40% 66% 34% 60%" },
  { top: 84, left: 34, size: 160, delay: 1.5, dur: 18, opacity: 0.3, rot: -8, radius: "33% 67% 41% 59% / 60% 40% 60% 40%" },
  { top: 4, left: 40, size: 92, delay: 2.5, dur: 16, opacity: 0.45, rot: 15, radius: "59% 41% 68% 32% / 46% 58% 42% 54%" },
  { top: 52, left: 92, size: 110, delay: 0.5, dur: 14, opacity: 0.4, rot: -18, radius: "44% 56% 39% 61% / 63% 37% 63% 37%" },
  { top: 30, left: 22, size: 68, delay: 3.5, dur: 11, opacity: 0.6, rot: 24, radius: "62% 38% 46% 54% / 38% 61% 39% 62%" },
  { top: 90, left: 60, size: 78, delay: 5, dur: 13, opacity: 0.5, rot: -28, radius: "48% 52% 64% 36% / 57% 43% 57% 43%" },
  { top: 14, left: 64, size: 60, delay: 4.5, dur: 10, opacity: 0.55, rot: 12, radius: "36% 64% 55% 45% / 49% 46% 54% 51%" },
  { top: 68, left: 50, size: 175, delay: 2, dur: 20, opacity: 0.26, rot: -14, radius: "58% 42% 33% 67% / 45% 63% 37% 55%" },
  { top: 46, left: 16, size: 130, delay: 1, dur: 21, opacity: 0.34, rot: 20, radius: "52% 48% 57% 43% / 44% 55% 45% 56%" },
  { top: 24, left: 54, size: 84, delay: 6, dur: 15, opacity: 0.4, rot: -20, radius: "61% 39% 44% 56% / 57% 41% 59% 43%" },
  { top: 56, left: 70, size: 140, delay: 3, dur: 18, opacity: 0.3, rot: 10, radius: "40% 60% 62% 38% / 52% 46% 54% 48%" },
  { top: 80, left: 88, size: 100, delay: 2.5, dur: 16, opacity: 0.42, rot: -16, radius: "55% 45% 40% 60% / 48% 60% 40% 52%" },
  { top: 34, left: 34, size: 72, delay: 5.5, dur: 12, opacity: 0.5, rot: 26, radius: "47% 53% 65% 35% / 60% 44% 56% 40%" },
  { top: 96, left: 26, size: 96, delay: 4, dur: 19, opacity: 0.3, rot: -10, radius: "60% 40% 48% 52% / 43% 57% 43% 57%" },
];

/**
 * שכבת רקע דקורטיבית של צורות אבסטרקטיות אורגניות שצפות, מסתובבות ומשנות צורה.
 * כל צורה ייחודית. לא אינטראקטיבית ומוסתרת מקוראי מסך.
 */
export default function Bubbles({
  tone = "light",
  count = 8,
  fixed = false,
  className,
}: BubblesProps) {
  const shapes = PRESET.slice(0, Math.min(count, PRESET.length));

  return (
    <div
      className={`${styles.layer} ${styles[tone]} ${
        fixed ? styles.fixed : ""
      } ${className ?? ""}`.trim()}
      aria-hidden="true"
    >
      {shapes.map((s, i) => (
        <span
          key={i}
          className={styles.shape}
          style={
            {
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              borderRadius: s.radius,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.dur}s`,
              "--rot": `${s.rot}deg`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
