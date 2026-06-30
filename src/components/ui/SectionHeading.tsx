import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  /** תווית קטנה מעל הכותרת */
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
}

/** כותרת אזור עקבית עם תווית, כותרת ראשית ותיאור אופציונלי. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${styles[align]}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
