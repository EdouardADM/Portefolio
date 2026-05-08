import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Edouard Adam — Développeur Backend",
    template: "%s | Edouard Adam",
  },
  description:
    "Développeur backend Laravel chez une plateforme media publique belge, étudiant à l'EPHEC. Je construis des outils qui marchent pour de vrai.",
  metadataBase: new URL("https://adamedouard.be"),
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: "https://adamedouard.be",
    siteName: "Edouard Adam",
    title: "Edouard Adam — Développeur Backend",
    description:
      "Développeur backend Laravel, étudiant à l'EPHEC. Portfolio de projets.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bg text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
