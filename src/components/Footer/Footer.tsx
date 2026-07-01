import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Image
            src="/images/logo2.png"
            alt="פסטיבל בית גלים ה־16"
            width={709}
            height={709}
            className={styles.logo}
          />
          <div>
            <p className={styles.brandTitle}>פסטיבל בית גלים ה־16</p>
            <p className={styles.brandSub}>
              שלושה ימים של תרבות, ים ואמנות בשכונת בת גלים
            </p>
          </div>
        </div>

        <p className={styles.copyright}>
          © {year} פסטיבל בית גלים. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
