import Image from "next/image";
import styles from "./InteractiveMap.module.css";

/**
 * מפת הפסטיבל (public/images/mapa.png) — גרסה מעובדת ללא הרקע הכחול וללא
 * המקרא (רק חלקי היבשה הבהירים, עם רקע שקוף). המרקרים הלחיצים מונחים מעליה
 * במיקומים המדויקים של המספרים המודפסים.
 */
export default function IllustratedMap() {
  return (
    <Image
      src="/images/mapa.png"
      alt="מפת פסטיבל בית גלים — מוקדי האירועים והבתים הפתוחים בשכונה"
      fill
      priority
      sizes="(max-width: 980px) 880px, 1400px"
      className={styles.mapArt}
    />
  );
}
