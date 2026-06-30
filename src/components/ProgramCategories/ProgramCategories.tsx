import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { categories, getEventsByIds } from "@/data/events";
import CategoryIcon from "./CategoryIcon";
import styles from "./ProgramCategories.module.css";

export default function ProgramCategories() {
  return (
    <section id="program" className={styles.section}>
      <Container>
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
                <span className={styles.iconWrap} aria-hidden="true">
                  <CategoryIcon icon={category.icon} />
                </span>

                <h3 className={styles.title}>{category.title}</h3>
                <p className={styles.description}>{category.description}</p>

                <div className={styles.examples}>
                  <span className={styles.examplesLabel}>לדוגמה</span>
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
