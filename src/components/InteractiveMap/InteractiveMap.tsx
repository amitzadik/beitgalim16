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

function getCardTransform(spot: MapSpot) {
  const horizontal = spot.x > 68 ? "-100%" : spot.x < 24 ? "0%" : "-50%";
  const vertical = spot.y > 54 ? "calc(-100% - 18px)" : "18px";

  return `translate(${horizontal}, ${vertical})`;
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
                style={{
                  left: `${Math.min(Math.max(activeSpot.x, 12), 88)}%`,
                  top: `${Math.min(Math.max(activeSpot.y, 14), 84)}%`,
                  transform: getCardTransform(activeSpot),
                }}
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

                <div className={styles.infoInner}>
                  <div className={styles.infoHeader}>
                    <span className={styles.infoNumber}>{activeSpot.number}</span>
                    <div className={styles.infoTextColumn}>
                      {activeSpot.kind === "event" && (
                        <span className={styles.infoTag}>
                          {getKindLabel(activeSpot.kind)}
                        </span>
                      )}
                      <h3 className={styles.infoTitle}>{activeSpot.title}</h3>
                      {activeSpot.address && (
                        <p className={styles.infoAddress}>{activeSpot.address}</p>
                      )}
                    </div>
                  </div>

                  <ul className={styles.infoEvents}>
                    {activeSpot.events.map((event) => (
                      <li key={event} className={styles.infoEvent}>
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
