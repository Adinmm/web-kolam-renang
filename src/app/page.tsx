import Navbar from "@/components/Pages/Navbar";
import HeroSection from "@/components/Pages/HeroSection";
import ProgramsSection from "@/components/Pages/ProgramSection";
import RegistrationSection from "@/components/Pages/RegistrationSection";
import AboutSection from "@/components/Pages/AboutSection";
import ContactSection from "@/components/Pages/ContactSection";
import Footer from "@/components/Pages/Footer";
import GallerySection from "@/components/Pages/GallerySections";
import CoachesSection from "@/components/Pages/CoachesSection";
import FAQSection from "@/components/Pages/FaqSection";
import type { Metadata } from "next";

/* ================= FETCH DATA ================= */
async function getClasses() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/classes`, {
    cache: "no-store",
  });

  const data = await res.json();

  return data.data;
}

/* ================= SEO DINAMIS ================= */
export async function generateMetadata(): Promise<Metadata> {
  try {
    const classes = await getClasses();

    // ambil sebagian saja (anti spam SEO)
    const topClasses = classes.slice(0, 3);
    const classNames = topClasses.map((c: any) => c.class_name).join(", ");

    return {
      title: {
        default: "Program Kelas Renang | Sonic Swimming Club",
        template: "%s | Sonic Swimming Club",
      },
      description: `Sonic Swimming Club menyediakan berbagai program kelas renang seperti ${classNames}. Cocok untuk anak dan dewasa dengan pelatih profesional.`,
      keywords: [
        "kursus renang",
        "kelas renang meda",
        "les renang anak",
        "les renang dewasa",
        "sonic swimming club",
        "kursus renang anak",
        "kursus renang dewasa",
        "kursus renang medan",
        ...topClasses.map((c: any) => c.class_name),
      ],
      openGraph: {
        title: "Program Kelas Renang | Sonic Swimming Club",
        description: `Pilihan kelas renang terbaik: ${classNames}`,
        type: "website",
        locale: "id_ID",
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  } catch {
    return {
      title: "Program Kelas Renang | Sonic Swimming Club",
      description:
        "Sonic Swimming Club menyediakan kursus renang anak dan dewasa dengan pelatih profesional.",
      robots: {
        index: true,
        follow: true,
      },
    };
  }
}
const Index = () => {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection /> {/* Pengenalan dan hero utama */}
          <AboutSection /> {/* Tentang Sonic Swimming Club */}
          <ProgramsSection /> {/* Program & layanan */}
          <CoachesSection /> {/* Tim pelatih */}
          <GallerySection /> {/* Galeri kegiatan */}
          <FAQSection /> {/* Pertanyaan umum */}
          <RegistrationSection /> {/* Call-to-action: daftar */}
          <ContactSection /> {/* Kontak & lokasi */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
