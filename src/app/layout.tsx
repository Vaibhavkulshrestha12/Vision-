import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "VISION — Capable tools for artists.",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  keywords: ["VISION", "Lorem ipsum", "Dolor sit amet"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { if (localStorage.getItem("vision-theme") === "light") document.documentElement.dataset.theme = "light"; } catch {}`,
          }}
        />
      </head>
      <body className="bg-[#060607] text-[#f2f1ee] antialiased min-h-screen flex flex-col selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
