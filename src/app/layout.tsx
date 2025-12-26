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
    default: "Sonic swimming Club - Kursus Renang Profesional Deli Serdang",
    template: "%s | Sonic swimming Club",
  },
  description:
    "Klub renang profesional di Deli Serdang & Medan. Melayani les renang anak dan dewasa dengan pelatih bersertifikat di Kenangan, Percut Sei Tuan.",

  keywords: [
    "kursus renang Deli Serdang",
    "les renang Medan",
    "kursus renang anak",
    "les renang dewasa",
    "Sonic Swimming Club",
    "pelatihan renang profesional",
    "sekolah renang anak Medan",
    "kursus renang pemula",
    "les renang untuk anak dan dewasa",
    "instruktur renang berpengalaman",
    "Sonic Swimming Club Deli Serdang",
    "kursus renang privat Medan",
    "les renang aman untuk anak",
    "program renang kompetitif",
    "belajar renang cepat dan efektif",
  ],
  authors: [{ name: "Sonic swimming Club" }],
  creator: "Sonic swimming Club",
  publisher: "Sonic swimming Club",

  metadataBase: new URL("https://www.sonicswimmingclub.online"),
  alternates: {
    canonical: "/",
    types: {
      facebook: "https://www.facebook.com/share/1FRWdCtRXV/",
      instagram:
        "https://www.instagram.com/sonicswimmingclubmedan?igsh=MXVmdXd4d2UyNnAwZA==",
      youtube:
        "https://youtube.com/@sonicswimmingclubmedan?si=Q6j68pdgPLs0o3ng",
      tiktok:
        "https://www.tiktok.com/@sonic_swimming_club?_r=1&_t=ZS-92VrVtLk0qf",
    },
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
      "Program les renang anak dan dewasa di Deli Serdang dengan pelatih profesional.",
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
