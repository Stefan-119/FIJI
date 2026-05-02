import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import ErrorCatcher from "@/components/error-catcher";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-jp",
  weight: ["500", "700", "900"],
});

export const metadata: Metadata = {
  title: "FIJI Indonesia | Japanese Ju-Jutsu Training",
  description:
    "FIJI (Firman Ishikawaryu Ju-Jutsu Indonesia) offers Japanese martial arts training for kids, teens, adults, seniors, and women self-defense.",
  keywords: [
    "Ju-Jutsu Indonesia",
    "Japanese martial arts",
    "Self-defense training",
    "Women self-defense",
    "Anti-bullying martial arts",
    "Martial arts for kids",
    "Private martial arts class",
    "Group martial arts training",
    "FIJI Indonesia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSansJp.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ErrorCatcher>
          {children}
        </ErrorCatcher>
      </body>
    </html>
  );
}
