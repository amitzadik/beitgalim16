import localFont from "next/font/local";

/**
 * גופני המותג, נטענים מקומית דרך next/font (ללא בקשות רשת חיצוניות).
 *
 * - Masada Bold  → כותרות (--font-heading)
 * - Simpler Pro Rounded → טקסט גוף, במשקל Regular (400) ל"פחות חשוב"
 *   ו-Medium (500) ל"חשוב יותר" (--font-body)
 */

export const masada = localFont({
  src: [{ path: "../fonts/MasadaBold.otf", weight: "700", style: "normal" }],
  variable: "--font-heading-masada",
  display: "swap",
});

export const simpler = localFont({
  src: [
    {
      path: "../fonts/SimplerProRoundedRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SimplerProRoundedMedium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-body-simpler",
  display: "swap",
});
