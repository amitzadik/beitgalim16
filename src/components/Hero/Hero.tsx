import Image from "next/image";
import Container from "@/components/ui/Container";
import Bubbles from "@/components/ui/Bubbles";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* רקע אורגני בהשראת הים והחוף */}
      <div className={styles.backdrop} aria-hidden="true">
        <Bubbles tone="dark" count={10} />
        <svg
          className={styles.waves}
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
        >
          <path
            d="M0,128 C240,200 480,40 720,96 C960,152 1200,40 1440,112 L1440,220 L0,220 Z"
            fill="var(--color-accent)"
            opacity="0.25"
          />
          <path
            d="M0,160 C260,90 520,200 760,150 C1000,100 1220,180 1440,140 L1440,220 L0,220 Z"
            fill="var(--color-primary)"
            opacity="0.18"
          />
        </svg>
      </div>

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
