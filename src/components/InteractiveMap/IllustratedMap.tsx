import Image from "next/image";
import styles from "./InteractiveMap.module.css";

/**
 * מפת הפסטיבל הרשמית (public/images/mapa.jpg) כרקע המפה האינטראקטיבית.
 * המרקרים הלחיצים מונחים מעליה במיקומים המדויקים של המספרים המודפסים.
 */
export default function IllustratedMap() {
  return (
    <Image
      src="/images/mapa.jpg"
      alt="מפת פסטיבל בית גלים — מוקדי האירועים והבתים הפתוחים בשכונה"
      fill
      priority
      sizes="(max-width: 980px) 880px, 1180px"
      className={styles.mapArt}
    />
  );
}
