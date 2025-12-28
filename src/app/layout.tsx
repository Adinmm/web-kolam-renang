import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const poppins = localFont({
  src: [
    { path: "../../public/fonts/poppins/Poppins-Light.ttf", weight: "300" },
    { path: "../../public/fonts/poppins/Poppins-Regular.ttf", weight: "400" },
    { path: "../../public/fonts/poppins/Poppins-Medium.ttf", weight: "500" },
    { path: "../../public/fonts/poppins/Poppins-SemiBold.ttf", weight: "600" },
    { path: "../../public/fonts/poppins/Poppins-Bold.ttf", weight: "700" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

// Metadata SEO Tingkat Lanjut
export const metadata: Metadata = {
  title: {
    default: "Sonic Swimming Club - Kursus Renang Profesional Deli Serdang",
    template: "%s | Sonic Swimming Club",
  },

  description:
    "Sonic Swimming Club adalah klub renang profesional di Deli Serdang & Medan. Melayani kursus renang anak dan dewasa dengan pelatih bersertifikat di Kenangan, Percut Sei Tuan.",

  keywords: [
    "kursus renang Deli Serdang",
    "les renang Medan",
    "kursus renang anak",
    "les renang dewasa",
    "Sonic Swimming Club",
    "klub renang Medan",
    "pelatihan renang profesional",
    "sekolah renang anak Medan",
    "kursus renang pemula",
    "les renang privat Medan",
    "instruktur renang bersertifikat",
    "belajar renang anak dan dewasa",
    "kursus renang Kenangan",
    "les renang Percut Sei Tuan",
  ],

  authors: [{ name: "Sonic Swimming Club" }],
  creator: "Sonic Swimming Club",
  publisher: "Sonic Swimming Club",

  metadataBase: new URL("https://www.sonicswimmingclub.online"),

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Sonic Swimming Club - Kursus Renang Profesional",
    description:
      "Kursus dan les renang anak serta dewasa di Deli Serdang & Medan dengan pelatih profesional dan bersertifikat.",
    url: "https://www.sonicswimmingclub.online",
    siteName: "Sonic Swimming Club",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sonic Swimming Club Deli Serdang",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sonic Swimming Club - Kursus Renang Profesional",
    description:
      "Les renang anak dan dewasa di Deli Serdang & Medan dengan pelatih bersertifikat.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },

  category: "sports",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
