"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { navLinks } from "@/data/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <Container className={styles.inner}>
        <a href="#hero" className={styles.brand} aria-label="פסטיבל בית גלים ה־16 — לראש העמוד">
          <Image
            src="/images/logo5.png"
            alt="פסטיבל בית גלים ה־16"
            width={709}
            height={709}
            className={styles.logo}
            priority
          />
        </a>

        <nav className={styles.desktopNav} aria-label="ניווט ראשי">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "סגירת תפריט" : "פתיחת תפריט"}</span>
          <span className={`${styles.bars} ${menuOpen ? styles.barsOpen : ""}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </Container>

      <nav
        id="mobile-nav"
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}
        aria-label="ניווט נייד"
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
