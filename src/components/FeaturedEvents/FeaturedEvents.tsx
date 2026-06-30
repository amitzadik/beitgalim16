import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredEvents } from "@/data/events";
import EventCard from "./EventCard";
import styles from "./FeaturedEvents.module.css";

export default function FeaturedEvents() {
  return (
    <section id="events" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="אירועים מרכזיים"
          title="הרגעים הגדולים של הפסטיבל"
          description="מבחר ההופעות והפעילויות שאסור לפספס — מהשקיעה על הטיילת ועד מסיבת הסגירה."
        />

        <div className={styles.grid}>
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Container>
    </section>
  );
}
