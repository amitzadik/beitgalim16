"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  locations,
  getEventsByLocation,
  type LocationId,
} from "@/data/events";
import IllustratedMap from "./IllustratedMap";
import styles from "./InteractiveMap.module.css";

export default function InteractiveMap() {
  const [activeId, setActiveId] = useState<LocationId>(locations[0].id);

  const activeLocation =
    locations.find((location) => location.id === activeId) ?? locations[0];
  const activeEvents = getEventsByLocation(activeId);

  return (
    <section id="map" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="מפת הפסטיבל"
          title="כל המוקדים על מפה אחת"
          description="הקליקו על נקודה במפה כדי לגלות אילו אירועים מתקיימים בה, באילו שעות ומה מצפה לכם."
        />

        <div className={styles.layout}>
          <div className={styles.mapWrap}>
            <div className={styles.mapFrame}>
              <IllustratedMap />

              {locations.map((location) => {
                const isActive = location.id === activeId;
                return (
                  <button
                    key={location.id}
                    type="button"
                    className={`${styles.marker} ${
                      isActive ? styles.markerActive : ""
                    }`}
                    style={{
                      insetInlineStart: `${location.x}%`,
                      insetBlockStart: `${location.y}%`,
                    }}
                    onClick={() => setActiveId(location.id)}
                    aria-pressed={isActive}
                    aria-label={`מוקד: ${location.name}`}
                  >
                    <span className={styles.pin} aria-hidden="true" />
                    <span className={styles.markerLabel}>{location.name}</span>
                  </button>
                );
              })}
            </div>

            {/* בוחר מוקדים נגיש (שימושי במיוחד במובייל) */}
            <ul className={styles.chips} aria-label="בחירת מוקד">
              {locations.map((location) => (
                <li key={location.id}>
                  <button
                    type="button"
                    className={`${styles.chip} ${
                      location.id === activeId ? styles.chipActive : ""
                    }`}
                    onClick={() => setActiveId(location.id)}
                    aria-pressed={location.id === activeId}
                  >
                    {location.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* כרטיס מידע צף */}
          <aside
            className={styles.infoCard}
            aria-live="polite"
            aria-label={`פרטי מוקד: ${activeLocation.name}`}
          >
            <span className={styles.infoTag}>מוקד נבחר</span>
            <h3 className={styles.infoTitle}>{activeLocation.name}</h3>
            <p className={styles.infoDescription}>
              {activeLocation.shortDescription}
            </p>

            <div className={styles.infoEvents}>
              <h4 className={styles.infoEventsTitle}>
                אירועים במוקד ({activeEvents.length})
              </h4>
              {activeEvents.length > 0 ? (
                <ul>
                  {activeEvents.map((event) => (
                    <li key={event.id} className={styles.infoEvent}>
                      <span className={styles.infoEventTime}>
                        {event.day} · {event.time}
                      </span>
                      <span className={styles.infoEventTitle}>
                        {event.title}
                      </span>
                      {event.description && (
                        <span className={styles.infoEventDesc}>
                          {event.description}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.infoEmpty}>
                  אין אירועים מתוזמנים במוקד זה כרגע.
                </p>
              )}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
