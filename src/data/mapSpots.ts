export type MapSpotKind = "event" | "open-house";

export interface MapSpot {
  id: string;
  number: number;
  kind: MapSpotKind;
  title: string;
  address?: string;
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
    x: 7.6,
    y: 49.1,
    events: ["סיורי אדריכלות", "סיורים להתחדשות עירונית"],
  },
  {
    id: "community-center",
    number: 2,
    kind: "event",
    title: "מרכז קהילתי",
    address: "העלייה השנייה 45",
    x: 53.5,
    y: 46.8,
    events: ["קסם בר גלים", "הצגה: חומינה בטלסי", "סדנת יצירה להורים וילדים", "מקהלות בת גלים"],
  },
  {
    id: "sderot-bat-galim",
    number: 3,
    kind: "event",
    title: "שדרות בת גלים",
    x: 53.5,
    y: 44.3,
    events: ["סיור קולי עצמאי בשכונת בת גלים", "ברק פז", "YEKUMI", "Tamer & MAH MOOD"],
  },
  {
    id: "bar-galim-yotam",
    number: 4,
    kind: "event",
    title: "בר גלים יותם 3",
    x: 57.6,
    y: 37.8,
    events: ["בת גלים מארחת חיים דר", "טל כהן שלו", "קעקועים מאת דיה", "130 שנות אדריכלות בבת גלים"],
  },
  {
    id: "bat-galim-promenade",
    number: 5,
    kind: "event",
    title: "טיילת בת גלים",
    x: 37.8,
    y: 36.9,
    events: ["סדנת אקרובאלנס", "מפגש ציור ורישום", "יעל דקלבאום", "אלדד ציטרין", "אסתר רדא"],
  },
  {
    id: "community-garden",
    number: 6,
    kind: "event",
    title: "גינה קהילתית",
    x: 40.8,
    y: 54.4,
    events: ["סדנת צילום בנייר עם ניני טל", "סדנת פרחים", "מנגו"],
  },
  {
    id: "hahinuch-social",
    number: 7,
    kind: "event",
    title: "החינוך החברתי",
    x: 55.4,
    y: 53.8,
    events: ["מתחם לילדים וסדנאות"],
  },
  {
    id: "maritime-museum",
    number: 8,
    kind: "event",
    title: "המוזיאון הימי",
    x: 20.4,
    y: 64.5,
    events: ["סדנת קישוטי תמנונים"],
  },
  {
    id: "bat-galim-beach",
    number: 9,
    kind: "event",
    title: "חוף בת גלים",
    x: 61.5,
    y: 23.8,
    events: ["סדנת בניית סירות מקרטון ומשט חגיגי"],
  },
  { id: "oh-10", number: 10, kind: "open-house", title: "אביבה שי", address: "ריף 4, כניסה ב", x: 38.8, y: 59.2, events: ["בית פתוח"] },
  { id: "oh-11", number: 11, kind: "open-house", title: "בר פז, לולה יאנה, אנסטסיה זבלובה, לידיה גרבוב, שי לי, איירין איל ברום", address: "אייל לחום 30", x: 52.5, y: 35.9, events: ["בית פתוח"] },
  { id: "oh-12", number: 12, kind: "open-house", title: "משפחת בלובין", address: "העלייה השנייה 62", x: 48.1, y: 47.7, events: ["בית פתוח"] },
  { id: "oh-13", number: 13, kind: "open-house", title: "בר-אל גרינבלק", address: "נחליאלי 9", x: 64.0, y: 37.5, events: ["בית פתוח"] },
  { id: "oh-14", number: 14, kind: "open-house", title: "דאז דהבה כהן", address: "שמונה, סמטה לנגה", x: 38.1, y: 42.9, events: ["בית פתוח"] },
  { id: "oh-15", number: 15, kind: "open-house", title: "אנה פולונסקי, סופי מרטין שי גרסי, שחר ליאב, קירן דיגס", address: "בית אלכסנדריה 12", x: 48.7, y: 38.5, events: ["בית פתוח"] },
  { id: "oh-16", number: 16, kind: "open-house", title: "טניה ואלכס מירון", address: "הילדגארד, קומת קרקע", x: 63.2, y: 28.9, events: ["בית פתוח"] },
  { id: "oh-17", number: 17, kind: "open-house", title: "גל מורם, סלר, ברונשטיין", address: "מרגולין 37", x: 39.0, y: 38.1, events: ["בית פתוח"] },
  { id: "oh-18", number: 18, kind: "open-house", title: "שירה בנה, נתן גילה", address: "יונתן, סמטה הקו ראשון", x: 56.9, y: 43.9, events: ["בית פתוח"] },
  { id: "oh-19", number: 19, kind: "open-house", title: "ריצ'י אבץ, בן צור + אנה גל", address: "השחף 35", x: 47.8, y: 40.6, events: ["בית פתוח"] },
  { id: "oh-20", number: 20, kind: "open-house", title: "אני שני, ריטה חודיר, ריטה בנימינוב, ספרי ברכה לוי", address: "רציף אהרון רוזנפלד 25", x: 49.5, y: 33.2, events: ["בית פתוח"] },
  { id: "oh-21", number: 21, kind: "open-house", title: "דבורה קאוג, ברוים פוסטוביץ', יוליה קורנצובה, אנדריי סופין", address: "רחוב קאוג, סמטה לנגה", x: 38.3, y: 50.0, events: ["בית פתוח"] },
  { id: "oh-22", number: 22, kind: "open-house", title: "נגיד ערב", address: "לוט 10", x: 70.6, y: 37.1, events: ["בית פתוח"] },
  { id: "oh-23", number: 23, kind: "open-house", title: "לירון משה, אורטל אלוני, ענבל גינת, ספירו משה", address: "יעקב כספי 3", x: 68.3, y: 43.3, events: ["בית פתוח"] },
  { id: "oh-24", number: 24, kind: "open-house", title: "ולריה גטלב, ברמית רוזן", address: "גדליהו 14", x: 61.8, y: 37.8, events: ["בית פתוח"] },
  { id: "oh-25", number: 25, kind: "open-house", title: "גילי מטרונוביץ', עידן בר לב, נטע ורדס, עשי שוורץ, טל זר", address: "נמל 6", x: 66.8, y: 35.1, events: ["בית פתוח"] },
  { id: "oh-26", number: 26, kind: "open-house", title: "אירית בונשטיין", address: "השייטת 2", x: 46.3, y: 39.7, events: ["בית פתוח"] },
  { id: "oh-27", number: 27, kind: "open-house", title: "שני וורדה דלי, סוניה בץ", address: "הקריית 4", x: 41.5, y: 49.7, events: ["בית פתוח"] },
  { id: "oh-28", number: 28, kind: "open-house", title: "נעה שלם, אלינה חלב, הגר אדליב", address: "השייטת 25", x: 58.7, y: 35.4, events: ["בית פתוח"] },
  { id: "oh-29", number: 29, kind: "open-house", title: "אורלי פרא, קרן ויינמן - דואר", address: "אדירים 19", x: 71.5, y: 30.5, events: ["בית פתוח"] },
  { id: "oh-30", number: 30, kind: "open-house", title: "אור מעוד והטריו, נתנאל חלב", address: "ארגמן, סמטה", x: 33.4, y: 45.9, events: ["בית פתוח"] },
  { id: "oh-31", number: 31, kind: "open-house", title: "גבריאלה בורדה, עלתה קומורניק", address: "אלכסנדריה 7", x: 57.6, y: 31.1, events: ["בית פתוח"] },
  { id: "oh-32", number: 32, kind: "open-house", title: "איתמר בק", address: "העלייה השנייה 82", x: 26.8, y: 49.3, events: ["בית פתוח"] },
  { id: "oh-33", number: 33, kind: "open-house", title: "אופק לאו דז'ין יער", address: "רציף 71", x: 61.7, y: 43.0, events: ["בית פתוח"] },
  { id: "oh-34", number: 34, kind: "open-house", title: "אלכס בן ארי", address: "החייל 2, קומה 2", x: 62.7, y: 53.7, events: ["בית פתוח"] },
];

export const defaultMapSpot = mapSpots[0];
