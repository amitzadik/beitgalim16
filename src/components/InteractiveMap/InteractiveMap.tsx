"use client";

import { type CSSProperties, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { defaultMapSpot, mapSpots, type MapSpot } from "@/data/mapSpots";
import { noOrphans } from "@/utils/noOrphans";
import IllustratedMap from "./IllustratedMap";
import styles from "./InteractiveMap.module.css";

function getKindLabel(kind: MapSpot["kind"]) {
  return kind === "event" ? "מוקד אירועים" : "בית פתוח";
}

function getCardTransform(spot: MapSpot) {
  const horizontal = spot.x > 68 ? "-100%" : spot.x < 24 ? "0%" : "-50%";
  const vertical = spot.y > 42 ? "calc(-100% - 18px)" : "18px";

  return `translate(${horizontal}, ${vertical})`;
}

function getInfoCardMetrics(
  spot: MapSpot,
  infoTitle: string,
  infoEvents: string[],
) {
  const totalEventLength = infoEvents.join(" ").length;
  const longestLine = Math.max(
    infoTitle.length,
    ...infoEvents.map((event) => event.length),
  );
  const contentWeight =
    longestLine * 4.8 + totalEventLength * 1.55 + infoEvents.length * 28;
  const baseWidth = spot.kind === "event" ? 390 : 360;
  const maxWidth = spot.kind === "event" ? 620 : 560;
  const width = Math.min(maxWidth, Math.round(baseWidth + contentWeight));
  const textWidth = Math.min(width - 150, spot.kind === "event" ? 430 : 390);
  const minHeight = Math.round(
    Math.max(
      spot.kind === "event" ? 286 : 268,
      222 + infoEvents.length * 28 + Math.ceil(totalEventLength / 58) * 18,
    ),
  );

  return {
    "--info-card-width": `${width}px`,
    "--info-card-min-height": `${Math.min(minHeight, 390)}px`,
    "--info-text-width": `${Math.max(textWidth, 246)}px`,
  } as CSSProperties;
}

export default function InteractiveMap() {
  const [activeId, setActiveId] = useState(defaultMapSpot.id);
  const [isCardOpen, setIsCardOpen] = useState(false);

  const activeSpot = mapSpots.find((spot) => spot.id === activeId) ?? defaultMapSpot;
  const isOpenHouse = activeSpot.kind === "open-house";
  const infoTitle = isOpenHouse ? activeSpot.address ?? activeSpot.title : activeSpot.title;
  const infoEvents = isOpenHouse ? [activeSpot.title] : activeSpot.events;
  const infoCardMetrics = getInfoCardMetrics(activeSpot, infoTitle, infoEvents);

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
          <div
            className={styles.mapFrame}
            onClick={() => setIsCardOpen(false)}
          >
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
                  onClick={(event) => {
                    event.stopPropagation();
                    selectSpot(spot.id);
                  }}
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
                  ...infoCardMetrics,
                  left: `${Math.min(Math.max(activeSpot.x, 12), 88)}%`,
                  top: `${Math.min(Math.max(activeSpot.y, 14), 84)}%`,
                  transform: getCardTransform(activeSpot),
                }}
                onClick={(event) => event.stopPropagation()}
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
                      <span className={styles.infoTag}>
                        {noOrphans(getKindLabel(activeSpot.kind))}
                      </span>
                      <h3 className={styles.infoTitle}>
                        {noOrphans(infoTitle)}
                      </h3>
                      {activeSpot.kind === "event" && activeSpot.address && (
                        <p className={styles.infoAddress}>
                          {noOrphans(activeSpot.address)}
                        </p>
                      )}
                    </div>
                  </div>

                  <ul className={styles.infoEvents}>
                    {infoEvents.map((event) => (
                      <li key={event} className={styles.infoEvent}>
                        {noOrphans(event)}
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
