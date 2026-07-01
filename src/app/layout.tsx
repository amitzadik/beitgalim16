import type { Metadata, Viewport } from "next";
import Bubbles from "@/components/ui/Bubbles";
import { masada, simpler } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "פסטיבל בית גלים ה־16",
  description:
    "סיורים, הופעות, בתים פתוחים, סדנאות ואירועי קהילה בשכונת בת גלים. שלושה ימים של תרבות, ים ואמנות לכל המשפחה.",
  keywords: [
    "פסטיבל בית גלים",
    "בת גלים",
    "חיפה",
    "הופעות",
    "סיורים",
    "אירועי קהילה",
  ],
  openGraph: {
    title: "פסטיבל בית גלים ה־16",
    description:
      "סיורים, הופעות, בתים פתוחים, סדנאות ואירועי קהילה בשכונת בת גלים.",
    locale: "he_IL",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#004b77",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${masada.variable} ${simpler.variable}`}>
      <body>
        <Bubbles tone="dark" count={18} fixed />
        {children}
      </body>
    </html>
  );
}
