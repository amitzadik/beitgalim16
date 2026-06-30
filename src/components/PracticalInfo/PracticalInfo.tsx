import Container from "@/components/ui/Container";
import styles from "./PracticalInfo.module.css";

const tips = [
  {
    icon: "🚌",
    title: "מגיעים בתחבורה ציבורית",
    text: "מומלץ להגיע ברכבת או באוטובוס ולהימנע מחיפוש חניה בשכונה.",
  },
  {
    icon: "🚶",
    title: "נעים ברגל בין המוקדים",
    text: "כל מוקדי הפסטיבל נמצאים במרחק הליכה קצר זה מזה לאורך השכונה.",
  },
  {
    icon: "🌊",
    title: "בין הטיילת לים",
    text: "הפעילות מתפרסת בין הטיילת, המרכז הקהילתי, הבתים הפתוחים ומוקדי התרבות.",
  },
];

export default function PracticalInfo() {
  return (
    <section id="info" className={styles.section}>
      <Container>
        <div className={styles.panel}>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>מידע שימושי</span>
            <h2 className={styles.title}>איך מגיעים ונעים בפסטיבל</h2>
            <p className={styles.text}>
              הפסטיבל מתקיים ברחבי שכונת בת גלים, בין הטיילת, המרכז הקהילתי,
              הבתים הפתוחים ומוקדי התרבות בשכונה. מומלץ להגיע בתחבורה ציבורית
              ולנוע ברגל בין המוקדים.
            </p>
          </div>

          <ul className={styles.tips}>
            {tips.map((tip) => (
              <li key={tip.title} className={styles.tip}>
                <span className={styles.tipIcon} aria-hidden="true">
                  {tip.icon}
                </span>
                <div>
                  <h3 className={styles.tipTitle}>{tip.title}</h3>
                  <p className={styles.tipText}>{tip.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
