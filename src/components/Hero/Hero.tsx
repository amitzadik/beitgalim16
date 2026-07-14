import Image from "next/image";
import Container from "@/components/ui/Container";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <Container className={styles.inner}>
        {/* הלוגו הרשמי משמש ככותרת הראשית (הטקסט הנגיש ב-alt) */}
        <h1 className={styles.title}>
          <Image
            src="/images/logo1.png"
            alt="פסטיבל בית גלים ה־16"
            width={709}
            height={709}
            className={styles.logo}
            priority
          />
        </h1>

        <p className={styles.dates}>1-3.10.2026</p>

        <p className={styles.subtitle}>
          בתים פתוחים, סדנאות, הרצאות, הופעות
        </p>

        <dl className={styles.facts}>
          <div className={styles.fact}>
            <dd>חמישי–שבת</dd>
          </div>
          <div className={styles.fact}>
            <dd>הכניסה חופשית</dd>
          </div>
        </dl>
      </Container>
    </section>
  );
}
