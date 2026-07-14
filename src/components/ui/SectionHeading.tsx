import { noOrphans } from "@/utils/noOrphans";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "start" | "center";
}

/** כותרת אזור עקבית עם כותרת ראשית ותיאור אופציונלי. */
export default function SectionHeading({
  title,
  description,
  align = "start",
}: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${styles[align]}`}>
      <h2 className={styles.title}>{noOrphans(title)}</h2>
      {description && (
        <p className={styles.description}>{noOrphans(description)}</p>
      )}
    </div>
  );
}
