"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { defaultMapSpot, mapSpots, type MapSpot } from "@/data/mapSpots";
import IllustratedMap from "./IllustratedMap";
import styles from "./InteractiveMap.module.css";

function getKindLabel(kind: MapSpot["kind"]) {
  return kind === "event" ? "מוקד אירועים" : "בית פתוח";
}

export default function InteractiveMap() {
  const [activeId, setActiveId] = useState(defaultMapSpot.id);
  const [isCardOpen, setIsCardOpen] = useState(true);

  const activeSpot = mapSpots.find((spot) => spot.id === activeId) ?? defaultMapSpot;

  const selectSpot = (id: string) => {
    setActiveId(id);
    setIsCardOpen(true);
  };

  return (
    <section id="map" className={styles.section}>
      <Container className={styles.container}>
        <SectionHeading
          eyebrow="מפת הפסטיבל"
          title="כל המוקדים על המפה"
          description="הקליקו על מספר במפה כדי לראות את האירועים באותו מקום. הסימונים הכהים הם מוקדי אירועים והסימונים התכולים הם בתים פתוחים."
        />

        <div className={styles.mapWrap}>
          <div className={styles.mapFrame}>
            <IllustratedMap />

            {mapSpots.map((spot) => {
              const isActive = spot.id === activeId && isCardOpen;
              return (
                <button
                  key={spot.id}
                  type="button"
                  className={`${styles.marker} ${styles[spot.kind]} ${
                    isActive ? styles.markerActive : ""
                  }`}
                  style={{
                    left: `${spot.x}%`,
                    top: `${spot.y}%`,
                  }}
                  onFocus={() => selectSpot(spot.id)}
                  onClick={() => selectSpot(spot.id)}
                  aria-pressed={isActive}
                  aria-label={`${getKindLabel(spot.kind)} ${spot.number}: ${spot.title}`}
                >
                  <span className={styles.pin} aria-hidden="true">
                    {spot.number}
                  </span>
                </button>
              );
            })}

            {isCardOpen && (
              <aside
                className={`${styles.infoCard} ${styles[activeSpot.kind]}`}
                aria-live="polite"
                aria-label={`פרטי מוקד: ${activeSpot.title}`}
              >
                <button
                  type="button"
                  className={styles.infoClose}
                  onClick={() => setIsCardOpen(false)}
                  aria-label="סגירת החלון"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <span className={styles.infoTag}>{getKindLabel(activeSpot.kind)}</span>
                <h3 className={styles.infoTitle}>
                  <span>{activeSpot.number}</span>
                  {activeSpot.title}
                </h3>
                {activeSpot.address && <p className={styles.infoAddress}>{activeSpot.address}</p>}
                <ul className={styles.infoEvents}>
                  {activeSpot.events.map((event) => (
                    <li key={event} className={styles.infoEvent}>
                      {event}
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>

          <div className={styles.legend} aria-label="מקרא מפה">
            <span className={styles.legendItem}>
              <i className={`${styles.legendMarker} ${styles.event}`} aria-hidden="true" />
              מוקדי אירועים
            </span>
            <span className={styles.legendItem}>
              <i className={`${styles.legendMarker} ${styles["open-house"]}`} aria-hidden="true" />
              בתים פתוחים
            </span>
          </div>

          <ul className={styles.spotList} aria-label="בחירת מוקד במפה">
            {mapSpots.map((spot) => (
              <li key={spot.id}>
                <button
                  type="button"
                  className={`${styles.spotChip} ${styles[spot.kind]} ${
                    spot.id === activeId && isCardOpen ? styles.spotChipActive : ""
                  }`}
                  onFocus={() => selectSpot(spot.id)}
                  onClick={() => selectSpot(spot.id)}
                  aria-pressed={spot.id === activeId && isCardOpen}
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
