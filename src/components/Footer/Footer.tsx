import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div>
            <p className={styles.brandTitle}>פסטיבל בית גלים ה־16</p>
            <p className={styles.brandSub}>
              שלושה ימים של תרבות, ים ואמנות בשכונת בת גלים
            </p>
          </div>
        </div>

        <div className={styles.info}>
          <p>מומלץ להגיע בתחבורה ציבורית ולנוע ברגל בין המוקדים.</p>
          <p>
            הסדרי נגישות <span dir="ltr">04-8356356</span>
          </p>
        </div>

        <p className={styles.copyright}>
          © {year} פסטיבל בית גלים. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
