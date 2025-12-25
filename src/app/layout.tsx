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
    default: "Sonic Swim Club - Kursus Renang Profesional Deli Serdang",
    template: "%s | Sonic Swim Club",
  },
  description:
    "Klub renang profesional di Deli Serdang & Medan. Melayani les renang anak dan dewasa dengan pelatih bersertifikat di Kenangan, Percut Sei Tuan.",

  keywords: [
    "kursus renang Deli Serdang",
    "les renang Medan",
    "kursus renang anak",
    "les renang dewasa",
    "Sonic Swim Club",
  ],

  authors: [{ name: "Sonic Swim Club" }],
  creator: "Sonic Swim Club",
  publisher: "Sonic Swim Club",

  metadataBase: new URL("https://sonic-swim.netlify.app"),

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
    title: "Sonic Swim Club - Kursus Renang Profesional",
    description:
      "Program les renang anak dan dewasa di Deli Serdang dengan pelatih profesional.",
    url: "https://sonic-swim.netlify.app",
    siteName: "Sonic Swim Club",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sonic Swim Club Deli Serdang",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sonic Swim Club - Kursus Renang",
    description:
      "Les renang profesional untuk anak dan dewasa di Deli Serdang & Medan.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/icon.svg",
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
