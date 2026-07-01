"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Bubbles from "@/components/ui/Bubbles";
import { defaultMapSpot, mapSpots, type MapSpot } from "@/data/mapSpots";
import IllustratedMap from "./IllustratedMap";
import styles from "./InteractiveMap.module.css";

function getKindLabel(kind: MapSpot["kind"]) {
  return kind === "event" ? "מוקד אירועים" : "בית פתוח";
}

export default function InteractiveMap() {
  const [activeId, setActiveId] = useState(defaultMapSpot.id);

  const activeSpot = mapSpots.find((spot) => spot.id === activeId) ?? defaultMapSpot;

  return (
    <section id="map" className={styles.section}>
      <Bubbles tone="light" count={6} />
      <Container className={styles.container}>
        <SectionHeading
          eyebrow="מפת הפסטיבל"
          title="כל המוקדים על המפה"
          description="עברו עם העכבר על מספר במפה, או הקליקו עליו, כדי לראות את האירועים באותו מקום. הסימונים הכהים הם מוקדי אירועים והסימונים התכולים הם בתים פתוחים."
        />

        <div className={styles.mapWrap}>
          <div className={styles.mapFrame}>
            <IllustratedMap />

            {mapSpots.map((spot) => {
              const isActive = spot.id === activeId;
              return (
                <button
                  key={spot.id}
                  type="button"
                  className={`${styles.marker} ${styles[spot.kind]} ${
                    isActive ? styles.markerActive : ""
                  }`}
                  style={{
                    insetInlineStart: `${spot.x}%`,
                    insetBlockStart: `${spot.y}%`,
                  }}
                  onMouseEnter={() => setActiveId(spot.id)}
                  onFocus={() => setActiveId(spot.id)}
                  onClick={() => setActiveId(spot.id)}
                  aria-pressed={isActive}
                  aria-label={`${getKindLabel(spot.kind)} ${spot.number}: ${spot.title}`}
                >
                  <span className={styles.pin} aria-hidden="true">
                    {spot.number}
                  </span>
                </button>
              );
            })}

            <aside
              className={`${styles.infoCard} ${styles[activeSpot.kind]}`}
              aria-live="polite"
              aria-label={`פרטי מוקד: ${activeSpot.title}`}
            >
              <span className={styles.infoTag}>{getKindLabel(activeSpot.kind)}</span>
              <h3 className={styles.infoTitle}>
                <span>{activeSpot.number}</span>
                {activeSpot.title}
              </h3>
              {activeSpot.address && (
                <p className={styles.infoDescription}>{activeSpot.address}</p>
              )}
              <ul className={styles.infoEvents}>
                {activeSpot.events.map((event) => (
                  <li key={event} className={styles.infoEvent}>
                    {event}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className={styles.legend} aria-label="מקרא מפה">
            <span><i className={styles.legendEvent} />מוקדי אירועים</span>
            <span><i className={styles.legendOpenHouse} />בתים פתוחים</span>
          </div>

          <ul className={styles.spotList} aria-label="בחירת מוקד במפה">
            {mapSpots.map((spot) => (
              <li key={spot.id}>
                <button
                  type="button"
                  className={`${styles.spotChip} ${styles[spot.kind]} ${
                    spot.id === activeId ? styles.spotChipActive : ""
                  }`}
                  onMouseEnter={() => setActiveId(spot.id)}
                  onFocus={() => setActiveId(spot.id)}
                  onClick={() => setActiveId(spot.id)}
                  aria-pressed={spot.id === activeId}
                >
                  <span>{spot.number}</span>
                  {spot.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
