import styles from "./InteractiveMap.module.css";

/**
 * מפה מאוירת מותאמת אישית של שכונת בת גלים (לא Google Maps).
 * בנויה כ־SVG רספונסיבי: ים, קו חוף, טיילת, שדרות וגושים אורגניים.
 */
export default function IllustratedMap() {
  return (
    <svg
      className={styles.mapArt}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="מפה מאוירת של שכונת בת גלים"
    >
      <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4bb3d8" />
          <stop offset="100%" stopColor="#2a86ad" />
        </linearGradient>
        <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3ead7" />
          <stop offset="100%" stopColor="#e7dcc2" />
        </linearGradient>
      </defs>

      {/* ים */}
      <rect x="0" y="0" width="100" height="100" fill="url(#sea)" />

      {/* גלי ים עדינים */}
      <g stroke="#ffffff" strokeOpacity="0.35" strokeWidth="0.4" fill="none">
        <path d="M2,14 q4,-3 8,0 t8,0 t8,0" />
        <path d="M4,24 q4,-3 8,0 t8,0" />
        <path d="M1,34 q4,-3 8,0 t8,0 t8,0" />
      </g>

      {/* גוש היבשה האורגני */}
      <path
        d="M22,100 C16,78 30,66 26,52 C23,40 38,34 44,22 C48,14 60,12 72,8
           C86,3 100,6 100,6 L100,100 Z"
        fill="url(#land)"
      />

      {/* טיילת לאורך קו החוף */}
      <path
        d="M22,100 C16,78 30,66 26,52 C23,40 38,34 44,22 C48,14 60,12 72,8 C86,3 100,6 100,6"
        fill="none"
        stroke="#004b77"
        strokeOpacity="0.55"
        strokeWidth="1.4"
        strokeDasharray="2.4 1.8"
        strokeLinecap="round"
      />

      {/* שדרות / רחובות פנימיים */}
      <g stroke="#004b77" strokeOpacity="0.18" strokeWidth="0.9" fill="none" strokeLinecap="round">
        <path d="M48,96 C56,78 60,60 70,46 C78,34 86,30 96,26" />
        <path d="M64,92 C70,80 74,68 82,58" />
        <path d="M40,70 C54,66 70,60 88,52" />
      </g>

      {/* גושי פארק/כיכר אורגניים */}
      <circle cx="58" cy="50" r="6.5" fill="#a7d8b0" fillOpacity="0.65" />
      <circle cx="80" cy="40" r="4.5" fill="#a7d8b0" fillOpacity="0.55" />
      <circle cx="72" cy="70" r="5" fill="#a7d8b0" fillOpacity="0.5" />

      {/* לגונה / חוף רדוד */}
      <path
        d="M10,42 C18,38 26,42 24,50 C22,58 12,58 8,52 C5,48 6,44 10,42 Z"
        fill="#bfeaf6"
        fillOpacity="0.9"
        stroke="#ffffff"
        strokeOpacity="0.6"
        strokeWidth="0.4"
      />
    </svg>
  );
}
