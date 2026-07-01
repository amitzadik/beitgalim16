import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Bubbles from "@/components/ui/Bubbles";
import { featuredEvents } from "@/data/events";
import EventCard from "./EventCard";
import styles from "./FeaturedEvents.module.css";

export default function FeaturedEvents() {
  return (
    <section id="events" className={styles.section}>
      <Bubbles tone="dark" count={6} />
      <Container className={styles.container}>
        <SectionHeading
          title="אירועים נבחרים"
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
