import type { FestivalEvent } from "@/data/events";
import { noOrphans } from "@/utils/noOrphans";
import styles from "./EventCard.module.css";

interface EventCardProps {
  event: FestivalEvent;
}

/** כרטיס אירוע נשנה — מציג יום, שעה, כותרת, מיקום ותיאור קצר. */
export default function EventCard({ event }: EventCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.timeBadge}>
        <span className={styles.day}>{noOrphans(event.day)}</span>
        <span className={styles.time}>{event.time}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{noOrphans(event.title)}</h3>
        {event.performer && (
          <p className={styles.performer}>{noOrphans(event.performer)}</p>
        )}
        {event.description && (
          <p className={styles.description}>{noOrphans(event.description)}</p>
        )}
      </div>

      <p className={styles.location}>
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"
          />
        </svg>
        {noOrphans(event.locationName)}
      </p>
    </article>
  );
}
