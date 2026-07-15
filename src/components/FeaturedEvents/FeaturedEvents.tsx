import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredEvents } from "@/data/events";
import EventCard from "./EventCard";
import styles from "./FeaturedEvents.module.css";

const figmaCompositionOrder = [
  "tomer-yishayahu",
  "yael-deckelbaum",
  "eldad-citrin",
  "cardboard-boats",
  "tal-cohen-shalo",
  "mood-mah-dj-tamer",
  "tzlilei-hatzafon",
  "or-ya-sudmi",
];

export default function FeaturedEvents() {
  const orderedEvents = [...featuredEvents].sort(
    (a, b) =>
      figmaCompositionOrder.indexOf(a.id) - figmaCompositionOrder.indexOf(b.id),
  );

  return (
    <section id="events" className={styles.section}>
      <Container className={styles.container}>
        <SectionHeading
          title="אירועים מרכזיים"
          description="מבחר ההופעות והפעילויות שאסור לפספס"
        />

        <div className={styles.grid}>
          {orderedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Container>
    </section>
  );
}
