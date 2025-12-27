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
