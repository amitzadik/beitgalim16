import Container from "@/components/ui/Container";
import styles from "./PracticalInfo.module.css";

export default function PracticalInfo() {
  return (
    <section id="info" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>מידע שימושי</span>
          <h2 className={styles.title}>איך מגיעים ונעים בפסטיבל</h2>
          <p className={styles.text}>
            הפסטיבל מתקיים ברחבי שכונת בת גלים, בין הטיילת, המרכז הקהילתי,
            הבתים הפתוחים ומוקדי התרבות בשכונה. מומלץ להגיע בתחבורה ציבורית
            ולנוע ברגל בין המוקדים.
          </p>
        </div>
      </Container>
    </section>
  );
}
