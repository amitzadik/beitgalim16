export type MapSpotKind = "event" | "open-house";

export interface MapSpot {
  id: string;
  number: number;
  kind: MapSpotKind;
  title: string;
  address?: string;
  /** מיקום המרקר באחוזים מעל תמונת המפה mapa.jpg (0–100, מהפינה השמאלית-עליונה) */
  x: number;
  y: number;
  events: string[];
}

export const mapSpots: MapSpot[] = [
  {
    id: "cable-car-plaza",
    number: 1,
    kind: "event",
    title: "רחבת הרכבל",
    x: 7.5,
    y: 70.4,
    events: ["סיורי אדריכלות", "סיורים להתחדשות עירונית"],
  },
  {
    id: "community-center",
    number: 2,
    kind: "event",
    title: "מרכז קהילתי",
    address: "העלייה השנייה 45",
    x: 53.4,
    y: 67.4,
    events: ["קסם בר גלים", "הצגה: חנינה בסלט", "סדנת יצירה להורים וילדים", "מקהלת בת גלים"],
  },
  {
    id: "sderot-bat-galim",
    number: 3,
    kind: "event",
    title: "שדרות בת גלים",
    x: 51.2,
    y: 61.0,
    events: ["סיור קולי עצמאי בשכונת בת גלים", "בלקניש תהלוכה", "YEKUMI", "DJ Tamer & MAH MOOD"],
  },
  {
    id: "bar-galim-yotam",
    number: 4,
    kind: "event",
    title: "בר גלים יונתן 3",
    x: 57.4,
    y: 50.7,
    events: ["בת גלים מאת חיים רז", "טל כהן-שלו", "קעקועים מאת ד\"ר מיכל סדן", "130 שנות אדריכלות בבת גלים"],
  },
  {
    id: "bat-galim-promenade",
    number: 5,
    kind: "event",
    title: "טיילת בת גלים",
    x: 37.2,
    y: 50.8,
    events: ["סדנת אקרובאלנס להורים וילדים", "מפגשי ציור ורישום נוף", "יעל דקלבאום", "אלדד ציטרין"],
  },
  {
    id: "community-garden",
    number: 6,
    kind: "event",
    title: "גינה קהילתית",
    x: 40.1,
    y: 75.0,
    events: ["סדנה \"צלילים בגינה\" עם יוני טל", "מארו"],
  },
  {
    id: "hahinuch-social",
    number: 7,
    kind: "event",
    title: "התיכון החברתי",
    x: 54.7,
    y: 71.5,
    events: ["מתחם לילדים וסדנאות"],
  },
  {
    id: "maritime-museum",
    number: 8,
    kind: "event",
    title: "המוזיאון הימי",
    x: 20.0,
    y: 88.5,
    events: ["סדנת קישוטי תמנונים"],
  },
  {
    id: "bat-galim-beach",
    number: 9,
    kind: "event",
    title: "חוף בת גלים",
    x: 60.6,
    y: 32.7,
    events: ["סדנת בניית סירות מקרטון ומשט חגיגי"],
  },
  { id: "oh-10", number: 10, kind: "open-house", title: "אביבה של", address: "ריף 4, כניסה", x: 36.6, y: 74.0, events: ["בית פתוח"] },
  { id: "oh-11", number: 11, kind: "open-house", title: "בר פז, לולה יאנג, אנסטסיה זבילובה, ז'וז'ה גרונר, טל רז, איירו אייל נחום", address: "השרון 30", x: 52.6, y: 49.3, events: ["בית פתוח"] },
  { id: "oh-12", number: 12, kind: "open-house", title: "משפחת בלוקין", address: "העלייה השנייה 62", x: 47.3, y: 61.6, events: ["בית פתוח"] },
  { id: "oh-13", number: 13, kind: "open-house", title: "בת-אל גולומבק", address: "נהלל 9", x: 63.3, y: 52.9, events: ["בית פתוח"] },
  { id: "oh-14", number: 14, kind: "open-house", title: "זאזא זהבה כהן", address: "שקמונה 4", x: 37.1, y: 59.2, events: ["בית פתוח"] },
  { id: "oh-15", number: 15, kind: "open-house", title: "אנה פולונסקי, סופי מרטין שי ג'רסי, שחר ליאב, קרן דניס", address: "בית \"האנג\" שדרות בת גלים 12", x: 47.9, y: 53.1, events: ["בית פתוח"] },
  { id: "oh-16", number: 16, kind: "open-house", title: "טניה ואלכס מירון", address: "נחליאלי, קומת קרקע", x: 62.4, y: 39.1, events: ["בית פתוח"] },
  { id: "oh-17", number: 17, kind: "open-house", title: "לין תלם, קטיה ברונשטיין", address: "מרגולין 37", x: 38.4, y: 53.0, events: ["בית פתוח"] },
  { id: "oh-18", number: 18, kind: "open-house", title: "שירה בנגד, נתן גילה", address: "יונתן 9, חצר הבית", x: 55.9, y: 60.3, events: ["בית פתוח"] },
  { id: "oh-19", number: 19, kind: "open-house", title: "ינאי לביא, בן צור + אנה גל", address: "השרון 35", x: 47.2, y: 55.8, events: ["בית פתוח"] },
  { id: "oh-20", number: 20, kind: "open-house", title: "אגי שני, ריטה זורין, ריטה בנימינוב, ספיר ברונזברג לוי", address: "רציף אהרון רוזנפלד 25", x: 48.9, y: 45.6, events: ["בית פתוח"] },
  { id: "oh-21", number: 21, kind: "open-house", title: "דבורה פאר, בוריס מוסקוביץ', יוליה קונצובה, אנדרי סופין", address: "רחף 2א, מתחת לבניין", x: 37.7, y: 68.0, events: ["בית פתוח"] },
  { id: "oh-22", number: 22, kind: "open-house", title: "שרי עוז", address: "לוז 10", x: 69.3, y: 50.8, events: ["בית פתוח"] },
  { id: "oh-23", number: 23, kind: "open-house", title: "לירון משה, אורטל אלוני, ענבל ג'נת, סופיה משה", address: "יעקב כספי 3", x: 67.5, y: 59.3, events: ["בית פתוח"] },
  { id: "oh-24", number: 24, kind: "open-house", title: "ולריה גסלב, כרמית רוזן", address: "נהלל 14", x: 61.1, y: 51.8, events: ["בית פתוח"] },
  { id: "oh-25", number: 25, kind: "open-house", title: "גילי מרטונוביץ', עידן בר לב, נטע והדס עשיר שוורץ, טל רז", address: "נהלל 6", x: 65.8, y: 48.6, events: ["בית פתוח"] },
  { id: "oh-26", number: 26, kind: "open-house", title: "אירית בונשטיין", address: "השרון 38, קומה 2", x: 45.5, y: 54.5, events: ["בית פתוח"] },
  { id: "oh-27", number: 27, kind: "open-house", title: "ישי ודינה קלי, סוניה בץ", address: "הקלמים 4", x: 40.9, y: 68.3, events: ["בית פתוח"] },
  { id: "oh-28", number: 28, kind: "open-house", title: "נוגה שלו, אלינה חבלב, הגר אזו\"ב", address: "השרון 25, פינת אבדיאני", x: 58.0, y: 48.8, events: ["בית פתוח"] },
  { id: "oh-29", number: 29, kind: "open-house", title: "אורלי פרץ, קרן ויונתן — דואו", address: "שרל לוץ 4, קומה 3", x: 70.6, y: 41.9, events: ["בית פתוח"] },
  { id: "oh-30", number: 30, kind: "open-house", title: "אור מעוז והטריו, נתיבי חלב", address: "פינת 1א", x: 32.3, y: 63.9, events: ["בית פתוח"] },
  { id: "oh-31", number: 31, kind: "open-house", title: "גבריאלה בונדר, עתליה קומורניק", address: "אבדימי 3, דירה 8", x: 56.9, y: 42.4, events: ["בית פתוח"] },
  { id: "oh-32", number: 32, kind: "open-house", title: "איתמר בק", address: "העלייה השנייה 82", x: 26.0, y: 67.8, events: ["בית פתוח"] },
  { id: "oh-33", number: 33, kind: "open-house", title: "אומץ לב דידי יער", address: "נהלל 17", x: 61.1, y: 59.5, events: ["בית פתוח"] },
  { id: "oh-34", number: 34, kind: "open-house", title: "אלכס בן ארי", address: "החי\"ל 4, קומה 2", x: 61.9, y: 72.4, events: ["בית פתוח"] },
];

export const defaultMapSpot = mapSpots[0];
