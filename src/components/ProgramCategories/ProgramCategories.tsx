import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { categories, getEventsByIds } from "@/data/events";
import { noOrphans } from "@/utils/noOrphans";
import styles from "./ProgramCategories.module.css";

const figmaCompositionOrder = ["performances", "open-houses", "tours", "family"];

export default function ProgramCategories() {
  const orderedCategories = [...categories].sort(
    (a, b) =>
      figmaCompositionOrder.indexOf(a.id) - figmaCompositionOrder.indexOf(b.id),
  );

  return (
    <section id="program" className={styles.section}>
      <Container className={styles.container}>
        <SectionHeading
          title="כל מה שיש לבת גלים להציע"
          description="ארבעה עולמות תוכן שמרכיבים את הפסטיבל — בחרו את הקצב שלכם ונועו בין המוקדים."
        />

        <div className={styles.grid}>
          {orderedCategories.map((category) => {
            const examples = getEventsByIds(category.exampleEventIds);
            return (
              <article key={category.id} className={styles.card}>
                <div className={styles.visual}>
                  <Image
                    src={category.image}
                    alt=""
                    width={709}
                    height={709}
                    className={`${styles.visualImg} ${styles[`${category.id}Img`] ?? ""}`}
                    aria-hidden="true"
                  />
                </div>

                <p className={styles.description}>
                  {noOrphans(category.description)}
                </p>

                <div className={styles.examples}>
                  <ul>
                    {examples.map((event) => (
                      <li key={event.id} className={styles.example}>
                        <span className={styles.exampleDot} aria-hidden="true" />
                        <span>
                          <strong>{noOrphans(event.title)}</strong>
                          <span className={styles.exampleMeta}>
                            {noOrphans(event.day)} · {event.time}
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
