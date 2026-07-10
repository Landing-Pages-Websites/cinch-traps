import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cinch-traps.vercel.app"),
  title: "Cinch Traps — The Original Mole & Gopher Trap · Since 1909",
  description:
    "Ranked #1 by five universities and the USDA. Handmade in Oregon from American galvanized steel since 1909. Lifetime warranty. Free shipping on trap orders in the continental US.",
  openGraph: {
    title: "Cinch Traps — The Original Mole & Gopher Trap · Since 1909",
    description:
      "Ranked #1 by five universities and the USDA. Handmade in Oregon from American galvanized steel. Lifetime warranty.",
    url: "https://cinch-traps.vercel.app",
    siteName: "Cinch Traps",
    images: [{ url: "/images/design/elements/hero-field-plate.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cinch Traps — The Original Mole & Gopher Trap · Since 1909",
    description:
      "Ranked #1 by five universities and the USDA. Handmade in Oregon from American galvanized steel since 1909.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
