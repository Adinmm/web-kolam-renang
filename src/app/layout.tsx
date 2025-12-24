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
    "Sonic Swim Club",
    "Kursus Renang Deli Serdang",
    "Les Renang Medan",
    "Sonic SC",
    "Renang Percut Sei Tuan",
  ],
  authors: [{ name: "Sonic Swim Club" }],
  metadataBase: new URL("https://sonic-swim.netlify.app"), // Ganti dengan domain asli nanti
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sonic Swim Club - Pelatih Renang Profesional",
    description: "Program renang terbaik untuk semua usia di Deli Serdang.",
    url: "https://sonic-swim.netlify.app",
    siteName: "Sonic Swim Club",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonic Swim Club",
    description: "Kursus renang profesional di Deli Serdang & Medan.",
  },
  icons: {
    icon: "/icon.svg", // Pastikan file ada di folder public
    apple: "/apple-touch-icon.png",
  },
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
