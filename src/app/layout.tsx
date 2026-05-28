import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { company } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zolotoy-klyuchik-lipetsk.ru";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Золотой Ключик — вскрытие замков в Липецке 24/7",
    template: "%s | Золотой Ключик"
  },
  description:
    "Вскрытие замков в Липецке без повреждений при возможности. Мастер от 15 минут, квартиры, дома, авто, гаражи и сейфы. Цена до начала работ.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: company.name,
    title: "Вскрытие замков в Липецке без повреждений",
    description:
      "Срочный выезд мастера 24/7. Открываем двери, автомобили, гаражи и сейфы. Стоимость согласуется до начала работ.",
    images: [
      {
        url: "/images/og-lock-service.svg",
        width: 1200,
        height: 630,
        alt: "Золотой Ключик — аварийное вскрытие замков в Липецке"
      }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563EB"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
