export type MapSpotKind = "event" | "open-house";

export interface MapSpot {
  id: string;
  number: number;
  kind: MapSpotKind;
  title: string;
  address?: string;
  /** מיקום המרקר באחוזים מעל תמונת המפה mapa.png (0–100, מהפינה השמאלית-עליונה) */
  x: number;
  y: number;
  events: string[];
}

/* המספור, השמות והמיקומים לפי מפת האירוע הרשמית (פסטיבל בית גלים ה־16). */
export const mapSpots: MapSpot[] = [
  {
    id: "cable-car-plaza",
    number: 1,
    kind: "event",
    title: "רחבת הרכבל",
    x: 8.9,
    y: 80.1,
    events: ["סיורי אדריכלות", "סיורים להתחדשות עירונית"],
  },
  {
    id: "community-center",
    number: 2,
    kind: "event",
    title: "מרכז קהילתי",
    address: "העלייה השנייה 45",
    x: 52.9,
    y: 74.8,
    events: [
      "קסם בת גלים — כתב החידה",
      "הצגה: “חנינה בסלט”",
      "סדנת יצירה להורים וילדים",
      "הופעה: תומר ישעיהו",
      "מקהלת בת גלים",
    ],
  },
  {
    id: "sderot-bat-galim",
    number: 3,
    kind: "event",
    title: "שדרות בת גלים",
    x: 50.3,
    y: 67.2,
    events: [
      "סיור קולי עצמאי בשכונה",
      "בלקניש תהלוכה",
      "YEKUMI",
      "DJ Tamer & MAH MOOD",
    ],
  },
  {
    id: "bat-galim-beach",
    number: 4,
    kind: "event",
    title: "חוף בת גלים",
    x: 58.4,
    y: 31.0,
    events: ["סדנת בניית סירות מקרטון ומשט"],
  },
  {
    id: "bar-galim",
    number: 5,
    kind: "event",
    title: "בר גלים",
    x: 54.2,
    y: 57.9,
    events: [
      "בת גלים מאת חיים רז",
      "טל כהן-שלו",
      "130 שנות אדריכלות בבת גלים",
      "אור-יה סודמי",
    ],
  },
  {
    id: "bat-galim-promenade",
    number: 6,
    kind: "event",
    title: "טיילת בת גלים",
    x: 22.5,
    y: 69.7,
    events: [
      "סדנת אקרובאלנס להורים וילדים",
      "יעל דקלבאום",
      "אלדד ציטרין",
      "“צלילי הצפון” — יואב קוטנר",
    ],
  },
  {
    id: "community-garden",
    number: 7,
    kind: "event",
    title: "גינה קהילתית",
    x: 40.6,
    y: 87.2,
    events: ["סדנה “צלילים בגינה” עם יוני טל", "מארו"],
  },
  {
    id: "hahinuch-social",
    number: 8,
    kind: "event",
    title: "התיכון החברתי",
    x: 51.4,
    y: 83.1,
    events: ["מתחם ילדים וסדנאות"],
  },
  {
    id: "maritime-museum",
    number: 9,
    kind: "event",
    title: "המוזיאון הימי",
    x: 12.0,
    y: 96.0,
    events: ["סדנת קישוטי תמנונים"],
  },
  { id: "oh-10", number: 10, kind: "open-house", title: "אביבה של", address: "רחף 4, בגינה", x: 36.2, y: 84.5, events: ["בית פתוח"] },
  { id: "oh-11", number: 11, kind: "open-house", title: "בר פז, לולה יאנג, אנסטסיה זבילובה, ז'וז'ה גרונר, טל רז, איירו אייל נחום", address: "השרון 30", x: 51.3, y: 51.3, events: ["בית פתוח"] },
  { id: "oh-12", number: 12, kind: "open-house", title: "משפחת בלוקין", address: "העלייה השנייה 62, מתחת לבניין", x: 45.8, y: 64.2, events: ["בית פתוח"] },
  { id: "oh-13", number: 13, kind: "open-house", title: "בת-אל גולומבק", address: "נהלל 9", x: 59.1, y: 58.7, events: ["בית פתוח"] },
  { id: "oh-14", number: 14, kind: "open-house", title: "זאזא זהבה כהן", address: "שקמונה 4", x: 36.6, y: 65.3, events: ["בית פתוח"] },
  { id: "oh-15", number: 15, kind: "open-house", title: "אנה פולונסקי, סופי מרטין שי ג'רסי, שחר ליאב, קרן דניס", address: "בית “האגס” שדרות בת גלים 12", x: 45.8, y: 57.1, events: ["בית פתוח"] },
  { id: "oh-16", number: 16, kind: "open-house", title: "טניה ואלכס מירון", address: "נחליאלי 5", x: 58.6, y: 37.9, events: ["בית פתוח"] },
  { id: "oh-17", number: 17, kind: "open-house", title: "לין תלם, קטיה ברונשטיין", address: "מרגולין 37", x: 38.2, y: 57.7, events: ["בית פתוח"] },
  { id: "oh-18", number: 18, kind: "open-house", title: "שירה בנגד, נתן גילה", address: "יונתן 9", x: 53.4, y: 67.2, events: ["בית פתוח"] },
  { id: "oh-19", number: 19, kind: "open-house", title: "ינאי לביא, בן צור, אנה גל", address: "השרון 35", x: 45.2, y: 62.8, events: ["בית פתוח"] },
  { id: "oh-20", number: 20, kind: "open-house", title: "אגי שני, ריטה זורין, ריטה בנימינוב, ספיר ברונזברג לוי", address: "רציף אהרון רוזנפלד 25", x: 47.6, y: 48.1, events: ["בית פתוח"] },
  { id: "oh-21", number: 21, kind: "open-house", title: "בוריס מוסקוביץ', דבורה פאר, יוליה קוזנצובה, אנדרי סופין", address: "רחף 2א", x: 37.5, y: 76.5, events: ["בית פתוח"] },
  { id: "oh-22", number: 22, kind: "open-house", title: "שרי עוז", address: "שרל לוץ 10", x: 64.4, y: 55.1, events: ["בית פתוח"] },
  { id: "oh-23", number: 23, kind: "open-house", title: "לירון משה, אורטל אלוני, ענבל ג'נת, סופיה משה", address: "יעקב כספי 3", x: 62.4, y: 66.6, events: ["בית פתוח"] },
  { id: "oh-24", number: 24, kind: "open-house", title: "ולריה גסלב, כרמית רוזן", address: "נהלל 14", x: 56.8, y: 57.0, events: ["בית פתוח"] },
  { id: "oh-25", number: 25, kind: "open-house", title: "גילי מרטונוביץ', עידן בר לב, נטע והדס עישר שוורץ, טל רז", address: "נהלל 6", x: 61.9, y: 49.7, events: ["בית פתוח"] },
  { id: "oh-26", number: 26, kind: "open-house", title: "אירית בונשטיין", address: "השרון 38", x: 42.4, y: 60.2, events: ["בית פתוח"] },
  { id: "oh-27", number: 27, kind: "open-house", title: "ישי ודינה קלי, סוניה בץ", address: "הקלעים 4", x: 39.8, y: 77.2, events: ["בית פתוח"] },
  { id: "oh-28", number: 28, kind: "open-house", title: "נוגה שלו, אלינה חבלב, הגר אזו\"ב", address: "השרון 25", x: 55.3, y: 52.7, events: ["בית פתוח"] },
  { id: "oh-29", number: 29, kind: "open-house", title: "אורלי פרץ, קרן ויונתן", address: "שרל לוץ 4", x: 65.2, y: 44.4, events: ["בית פתוח"] },
  { id: "oh-30", number: 30, kind: "open-house", title: "אור מעוז והטריו, נתיבי הלב", address: "פינת גן 4", x: 32.5, y: 71.3, events: ["בית פתוח"] },
  { id: "oh-31", number: 31, kind: "open-house", title: "גבריאלה בונדר, עתליה קומורניק", address: "אבדימי 3", x: 54.7, y: 41.4, events: ["בית פתוח"] },
  { id: "oh-32", number: 32, kind: "open-house", title: "איתמר בק", address: "העלייה השנייה 82", x: 27.1, y: 75.7, events: ["בית פתוח"] },
  { id: "oh-33", number: 33, kind: "open-house", title: "אומץ לב דידי יער", address: "נהלל 17", x: 58.2, y: 68.7, events: ["בית פתוח"] },
  { id: "oh-34", number: 34, kind: "open-house", title: "אלכס בן ארי", address: "החי\"ל 4,", x: 58.4, y: 83.2, events: ["בית פתוח"] },
];

export const defaultMapSpot = mapSpots[0];
