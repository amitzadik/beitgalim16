import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Bubbles from "@/components/ui/Bubbles";
import { categories, getEventsByIds } from "@/data/events";
import styles from "./ProgramCategories.module.css";

export default function ProgramCategories() {
  return (
    <section id="program" className={styles.section}>
      <Bubbles tone="dark" count={7} />
      <Container className={styles.container}>
        <SectionHeading
          eyebrow="תוכנית הפסטיבל"
          title="כל מה שיש לבת גלים להציע"
          description="ארבעה עולמות תוכן שמרכיבים את הפסטיבל — בחרו את הקצב שלכם ונועו בין המוקדים."
        />

        <div className={styles.grid}>
          {categories.map((category) => {
            const examples = getEventsByIds(category.exampleEventIds);
            return (
              <article key={category.id} className={styles.card}>
                <div className={styles.visual}>
                  <Image
                    src={category.image}
                    alt=""
                    width={709}
                    height={709}
                    className={styles.visualImg}
                    aria-hidden="true"
                  />
                </div>

                <h3 className={styles.title}>{category.title}</h3>
                <p className={styles.description}>{category.description}</p>

                <div className={styles.examples}>
                  <ul>
                    {examples.map((event) => (
                      <li key={event.id} className={styles.example}>
                        <span className={styles.exampleDot} aria-hidden="true" />
                        <span>
                          <strong>{event.title}</strong>
                          <span className={styles.exampleMeta}>
                            {event.day} · {event.time}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
