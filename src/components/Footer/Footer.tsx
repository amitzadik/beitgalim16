import Image from "next/image";
import Container from "@/components/ui/Container";
import { navLinks } from "@/data/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.top}>
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

          <nav className={styles.nav} aria-label="ניווט תחתון">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>© {year} פסטיבל בית גלים. כל הזכויות שמורות.</p>
          <p className={styles.madeWith}>נבנה באהבה לשכונת בת גלים 🌊</p>
        </div>
      </Container>
    </footer>
  );
}
