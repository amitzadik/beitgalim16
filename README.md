# פסטיבל בית גלים ה־16 🌊

אתר נחיתה (Landing Page) לפסטיבל בית גלים ה־16 בשכונת בת גלים — בנוי ב־Next.js,
מותאם לעברית ולכיוון RTL, ומוכן לפריסה ב־Vercel.

## ✨ תכונות

- **תמיכה מלאה בעברית ו־RTL** (`dir="rtl"`, גופני מותג מוטמעים: Masada לכותרות, Simpler Pro Rounded לגוף).
- **עיצוב Mobile-first רספונסיבי** עם אסתטיקה חופית ואמנותית (צבעי ים, צורות אורגניות).
- **גלילה חלקה** בין האזורים עם ניווט קבוע (sticky header).
- **מפה אינטראקטיבית מאוירת** (SVG מותאם אישית, ללא Google Maps) עם מרקרים
  לחיצים וכרטיס מידע צף.
- **רכיבים נשנים** ונתונים מרוכזים בקובץ אחד.
- נגישות: כפתורים נגישים, מסגרות מיקוד, `aria-*`, ותמיכה ב־`prefers-reduced-motion`.

## 🧱 סטאק טכנולוגי

- [Next.js 15](https://nextjs.org/) (App Router)
- React 19 + TypeScript
- CSS Modules + CSS Variables (ללא backend)

## 🎨 צבעי המותג

```css
--color-primary: #004b77;
--color-light:   #d7f2fa;
--color-accent:  #4bb3d8;
--color-bg:      #f7fbfd;
```

## 📁 מבנה הפרויקט

```
src/
├── app/
│   ├── layout.tsx        # שורש האפליקציה (RTL, גופן, מטא־דאטה)
│   ├── page.tsx          # הרכבת כל האזורים
│   └── globals.css       # משתני CSS וסגנונות גלובליים
├── components/
│   ├── ui/               # רכיבי בסיס נשנים (Container, Button, SectionHeading)
│   ├── Header/
│   ├── Hero/
│   ├── FeaturedEvents/
│   ├── InteractiveMap/
│   ├── ProgramCategories/
│   ├── PracticalInfo/
│   └── Footer/
└── data/
    ├── events.ts         # מקור האמת: אירועים, מוקדי מפה וקטגוריות
    └── navigation.ts     # קישורי ניווט
```

כל תוכן האירועים, המוקדים והקטגוריות מנוהל ב־`src/data/events.ts`.

## 🚀 הרצה מקומית

```bash
npm install
npm run dev
```

האתר יהיה זמין בכתובת [http://localhost:3000](http://localhost:3000).

### בנייה לפרודקשן

```bash
npm run build
npm start
```

## ▲ פריסה ב־Vercel

1. דחפו את הריפו ל־GitHub.
2. ב־[Vercel](https://vercel.com/) בחרו **New Project** וייבאו את הריפו.
3. Vercel מזהה את Next.js אוטומטית — אין צורך בהגדרות נוספות. לחצו **Deploy**.
