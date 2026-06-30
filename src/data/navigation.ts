// קישורי הניווט המשותפים ל־Header ול־Footer.
export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "#hero", label: "ראשי" },
  { href: "#events", label: "אירועים מרכזיים" },
  { href: "#map", label: "מפה" },
  { href: "#program", label: "תוכנית" },
  { href: "#info", label: "מידע שימושי" },
];
