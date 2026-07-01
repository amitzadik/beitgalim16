// כל הנתונים של הפסטיבל מרוכזים כאן: אירועים, מוקדים על המפה וקטגוריות תוכנית.
// קובץ זה הוא "מקור האמת" של האתר — שינוי תוכן נעשה כאן בלבד.

export type DayLabel = "יום חמישי" | "יום שבת";

export interface FestivalEvent {
  id: string;
  title: string;
  /** שם המופיע/יוצר או תיאור קצר של האירוע */
  performer?: string;
  day: DayLabel;
  time: string;
  /** מזהה המוקד במפה שאליו האירוע משויך */
  locationId: LocationId;
  locationName: string;
  description?: string;
  /** האם להציג ככרטיס באזור "אירועים מרכזיים" */
  featured?: boolean;
}

export type LocationId =
  | "tayelet"
  | "merkaz-kehilati"
  | "hof-laguna"
  | "sderot"
  | "bar-galim"
  | "milhaus";

export interface MapLocation {
  id: LocationId;
  name: string;
  shortDescription: string;
  /** מיקום המרקר באחוזים יחסית למפת ה־SVG (0–100) */
  x: number;
  y: number;
}

export interface ProgramCategory {
  id: string;
  title: string;
  description: string;
  icon: "music" | "walk" | "family" | "house";
  /** גרפיקת כותרת מאוירת לקטגוריה (בתיקיית public/images) */
  image: string;
  exampleEventIds: string[];
}

/* ------------------------------------------------------------------ */
/*  אירועים                                                            */
/* ------------------------------------------------------------------ */

export const events: FestivalEvent[] = [
  {
    id: "yael-deckelbaum",
    title: "יעל דקלבאום",
    performer: "מופע בהשתתפות הקהל",
    day: "יום חמישי",
    time: "18:00",
    locationId: "tayelet",
    locationName: "טיילת בת גלים",
    description:
      "מופע פתיחה מרגש על קו החוף, עם שירים בעברית ובאנגלית מול שקיעת הים.",
    featured: true,
  },
  {
    id: "eldad-citrin",
    title: "אלדד ציטרין",
    performer: "הופעה חיה",
    day: "יום חמישי",
    time: "21:00",
    locationId: "tayelet",
    locationName: "טיילת בת גלים",
    description: "מופע ערב על הטיילת לסיום היום הראשון של הפסטיבל.",
    featured: true,
  },
  {
    id: "cardboard-boats",
    title: "סדנת בניית סירות מקרטון ומשט חגיגי",
    performer: "פעילות לכל המשפחה",
    day: "יום חמישי",
    time: "16:30",
    locationId: "hof-laguna",
    locationName: "מגרש המשחקים בחוף הלגונה",
    description:
      "בונים יחד סירות מקרטון, ובשעה 18:00 יוצאים למשט קבוצתי חגיגי בים.",
    featured: true,
  },
  {
    id: "mood-mah-dj-tamer",
    title: "MOOD MAH & DJ Tamer",
    performer: "מסיבת סגירה",
    day: "יום שבת",
    time: "17:00",
    locationId: "milhaus",
    locationName: "מילהאוס",
    description: "מסיבת הסגירה של הפסטיבל — סטים חיים וריקודים עד הערב.",
    featured: true,
  },
  {
    id: "tzlilei-hatzafon",
    title: "“צלילי הצפון”",
    performer: "בהנחיית יואב קוטנר",
    day: "יום שבת",
    time: "18:00",
    locationId: "tayelet",
    locationName: "טיילת בת גלים",
    description:
      "מסע מוזיקלי מלווה בסיפורים על המוזיקה הישראלית, בהנחיית יואב קוטנר.",
    featured: true,
  },
  {
    id: "tour-bat-galim",
    title: "סיור שכונתי בעקבות בת גלים ההיסטורית",
    performer: "סיור מודרך",
    day: "יום חמישי",
    time: "10:00",
    locationId: "sderot",
    locationName: "שדרות בת גלים",
    description: "סיור רגלי בין בתי השכונה הראשונים והסיפורים שמאחוריהם.",
  },
  {
    id: "open-houses",
    title: "מסלול בתים פתוחים",
    performer: "אמנים ויוצרים מקומיים",
    day: "יום שבת",
    time: "11:00",
    locationId: "merkaz-kehilati",
    locationName: "מרכז קהילתי",
    description: "סיור עצמאי בין סטודיואים ובתים של אמני השכונה.",
  },
  {
    id: "beach-morning",
    title: "בוקר ספורט וים",
    performer: "פעילות קהילתית",
    day: "יום שבת",
    time: "08:30",
    locationId: "hof-laguna",
    locationName: "חוף הלגונה",
    description: "התעמלות בוקר וכניסה משותפת למים לפתיחת היום.",
  },
  {
    id: "bar-galim-meetup",
    title: "מפגש קהילה בבר גלים",
    performer: "אירוע קהילתי",
    day: "יום חמישי",
    time: "20:00",
    locationId: "bar-galim",
    locationName: "בר גלים",
    description: "מפגש תושבים בלתי פורמלי עם מוזיקה שקטה ברקע.",
  },
];

/* ------------------------------------------------------------------ */
/*  מוקדים על המפה                                                     */
/* ------------------------------------------------------------------ */

export const locations: MapLocation[] = [
  {
    id: "tayelet",
    name: "טיילת בת גלים",
    shortDescription: "טיילת החוף — לב ההופעות של הפסטיבל מול הים.",
    x: 30,
    y: 70,
  },
  {
    id: "merkaz-kehilati",
    name: "מרכז קהילתי",
    shortDescription: "מוקד הסיורים והפעילויות הקהילתיות בשכונה.",
    x: 64,
    y: 40,
  },
  {
    id: "hof-laguna",
    name: "חוף בת גלים / חוף הלגונה",
    shortDescription: "חוף רדוד ובטוח, מוקד הפעילויות לכל המשפחה.",
    x: 18,
    y: 46,
  },
  {
    id: "sderot",
    name: "שדרות בת גלים",
    shortDescription: "השדרה הירוקה שחוצה את השכונה — נקודת מוצא לסיורים.",
    x: 72,
    y: 66,
  },
  {
    id: "bar-galim",
    name: "בר גלים",
    shortDescription: "פינת מפגש קהילתית עם אווירה ים־תיכונית.",
    x: 48,
    y: 28,
  },
  {
    id: "milhaus",
    name: "מילהאוס",
    shortDescription: "מתחם תרבות עירוני שמארח את מסיבת הסגירה.",
    x: 84,
    y: 24,
  },
];

/* ------------------------------------------------------------------ */
/*  קטגוריות תוכנית                                                    */
/* ------------------------------------------------------------------ */

export const categories: ProgramCategory[] = [
  {
    id: "performances",
    title: "הופעות",
    description: "מופעי מוזיקה חיים על הטיילת ובמוקדי התרבות, מהבוקר ועד הלילה.",
    icon: "music",
    image: "/images/music.png",
    exampleEventIds: ["yael-deckelbaum", "eldad-citrin"],
  },
  {
    id: "tours",
    title: "סיורים",
    description: "סיורים מודרכים בעקבות ההיסטוריה, האדריכלות והסיפורים של בת גלים.",
    icon: "walk",
    image: "/images/siurim.png",
    exampleEventIds: ["tour-bat-galim", "open-houses"],
  },
  {
    id: "family",
    title: "לכל המשפחה",
    description: "פעילויות יצירה, ים וחוף שמתאימות לקטנים ולגדולים כאחד.",
    icon: "family",
    image: "/images/family.png",
    exampleEventIds: ["cardboard-boats", "beach-morning"],
  },
  {
    id: "open-houses",
    title: "בתים פתוחים",
    description: "הצצה לסטודיואים ולבתים של אמני ויוצרי השכונה לאורך הפסטיבל.",
    icon: "house",
    image: "/images/openhouses.png",
    exampleEventIds: ["open-houses", "bar-galim-meetup"],
  },
];

/* ------------------------------------------------------------------ */
/*  עזרי שליפה                                                         */
/* ------------------------------------------------------------------ */

export const featuredEvents = events.filter((event) => event.featured);

export function getEventsByLocation(locationId: LocationId): FestivalEvent[] {
  return events.filter((event) => event.locationId === locationId);
}

export function getEventsByIds(ids: string[]): FestivalEvent[] {
  return ids
    .map((id) => events.find((event) => event.id === id))
    .filter((event): event is FestivalEvent => Boolean(event));
}

export function getLocation(locationId: LocationId): MapLocation | undefined {
  return locations.find((location) => location.id === locationId);
}
