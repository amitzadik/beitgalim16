import styles from "./InteractiveMap.module.css";

export default function IllustratedMap() {
  return (
    <svg
      className={styles.mapArt}
      viewBox="0 0 100 56.25"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="מפה מאוירת של שכונת בת גלים"
    >
      <rect x="0" y="0" width="100" height="56.25" fill="#004b77" />

      <path
        className={styles.mapLand}
        d="M0,47.5 C8,45.8 10.4,42.8 13.2,39.2 C17,34.2 22,34.5 27.4,34.2 C34.2,33.8 42.7,28.5 45.4,24.3 C49.4,18 50.6,15.2 51.3,10.2 C51.8,6.2 53.9,5.4 54.7,7 C55.2,8.4 53.1,10.4 52.7,13.7 C52.3,16.5 54.2,18.2 57,18.3 C58.8,18.4 57.1,15.5 59.1,15.6 C60.5,15.7 60.1,18.7 62.1,18.1 C64.8,17.3 66.3,15.2 64.3,12.7 C62.2,10.1 60.1,9.4 62.3,7.1 C64.8,4.5 67,2.4 70.5,3.2 C73.8,4 74.4,5.6 79.3,6.2 C86.2,7 93.1,9 97.4,12.1 C99,13.2 99.2,14.9 100,16 L100,56.25 L0,56.25 Z"
      />

      <path className={styles.mapLagoon} d="M10,5.8 C14.2,2.2 23.4,1.5 22.6,4.3 C22.1,6.1 20.7,5.9 20.7,8.6 C20.7,11.7 15.2,10.9 12.4,8.9 C10.3,7.5 9.3,6.6 10,5.8 Z" />
      <path className={styles.mapLegendBlob} d="M2.8,15.4 C7.2,12.3 13.5,12.6 15.2,16.2 C16.8,19.8 13.2,21.4 8.5,21.4 C4.7,21.4 1.6,18.6 2.8,15.4 Z" />

      <g className={styles.mainRoads}>
        <path d="M0,49.2 C18,46.8 33.6,42.3 47.4,41.2 C63,40 80.5,40.2 100,46.2" />
        <path d="M7.5,48.6 C25.6,41.5 42.7,33.7 57.8,25.5 C63.4,22.5 67.2,19.3 71.9,17.1" />
        <path d="M37.4,39.2 C45,38 52.8,36.2 60.3,33.3 C67.3,30.6 74.2,29.8 84.5,32.8" />
      </g>

      <g className={styles.sideRoads}>
        <path d="M20.8,40.4 C25,38.3 26,36.1 28.1,37.5" />
        <path d="M31.8,37.2 L34.1,42.5 L34.2,49.6" />
        <path d="M36.7,36.2 L39.2,43.5 L36.8,54.8" />
        <path d="M44.1,35.1 L48.8,42.1 L54.2,41.2" />
        <path d="M48.9,24.1 L52.8,31.5 L52.6,46.2" />
        <path d="M54.2,26.3 L57.1,36.6 L55.4,47.6" />
        <path d="M60.2,22.6 L63.2,33.2 L62.1,42.8" />
        <path d="M65.6,19.1 L69.3,31.4 L69.1,49.0" />
        <path d="M70.9,23.8 L68.6,31.2" />
        <path d="M72.5,30.9 L71.2,38.9 L70.0,45.5" />
        <path d="M77.0,17.0 L77.1,27.1 L72.8,31.0" />
        <path d="M77.2,17.0 L85.6,17.6" />
        <path d="M75.1,17.8 L75.2,20.2 L79.2,20.8" />
        <path d="M77.2,24.1 L75.1,26.2 L72.6,24.8" />
        <path d="M78.2,30.6 L83.6,30.6 L86.6,25.5 L90.2,27.0" />
        <path d="M79.2,31.3 L79.8,37.0" />
        <path d="M91.5,34.5 C89.4,38.4 89.5,42.9 87.5,47.2 C85.7,51.1 79.8,49.6 74.8,47.6" />
        <path d="M75.0,47.7 L73.0,40.5 L64.5,40.2 L64.5,46.8" />
        <path d="M42.2,45.7 C46.2,45.6 50.7,45.9 55.8,45.8" />
        <path d="M42.1,45.8 L41.4,53.2" />
        <path d="M43.0,45.7 L43.0,53.2" />
        <path d="M44.0,45.5 L43.8,53.2" />
        <path d="M44.9,45.3 L44.7,53.2" />
        <path d="M45.8,45.2 L45.7,53.2" />
        <path d="M46.8,45.1 L46.6,53.2" />
        <path d="M47.7,45.0 L47.6,53.2" />
        <path d="M48.7,44.9 L48.4,53.2" />
      </g>

      <g className={styles.eventRings}>
        <circle cx="33.4" cy="45.9" r="0.8" />
        <circle cx="38.9" cy="44.5" r="0.9" />
        <circle cx="54.0" cy="45.0" r="1.2" />
        <circle cx="69.7" cy="45.4" r="0.8" />
        <circle cx="78.6" cy="31.1" r="0.9" />
        <circle cx="81.2" cy="52.5" r="1.1" />
        <circle cx="99.0" cy="47.3" r="1.1" />
        <circle cx="99.2" cy="24.6" r="0.8" />
      </g>

      <text className={styles.mapLabel} x="7.7" y="50.8">תחנת הרכבל</text>
      <text className={styles.mapLabel} x="46.2" y="32.5" transform="rotate(-25 46.2 32.5)">רחבת הלגונה</text>
      <text className={styles.mapLabelSmall} x="56.3" y="25.8" transform="rotate(-26 56.3 25.8)">רציף אהרון רוזנפלד</text>
      <text className={styles.mapLabelSmall} x="74.8" y="39.2">העלייה השנייה</text>
      <text className={styles.mapLabel} x="94" y="36.6">בית החולים רמב״ם</text>
      <text className={styles.mapLabel} x="14" y="63">המוזיאון הימי</text>

      <g className={styles.mapLegend}>
        <text x="13.5" y="5.5">מוקדים מרכזיים</text>
        <circle cx="19.1" cy="5.1" r="0.6" />
        <text x="13.5" y="7.2">בתים פתוחים</text>
        <circle className={styles.legendOpenHouse} cx="19" cy="6.9" r="0.6" />
      </g>

      <g className={styles.streetLegend}>
        <text x="4.4" y="15.9">שביל להולכי רגל</text>
        <path d="M9.6,16.1 L13.5,16.1" />
        <text x="6.5" y="18.4">רחוב צר</text>
        <path d="M9.6,18.5 L13.5,18.5" className={styles.legendThinRoad} />
        <text x="6.2" y="20.8">ציר מרכזי</text>
        <path d="M9.6,20.9 L13.5,20.9" className={styles.legendMainRoad} />
      </g>
    </svg>
  );
}
