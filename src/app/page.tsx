import Navbar from "@/components/Pages/Navbar";
import HeroSection from "@/components/Pages/HeroSection";
import ProgramsSection from "@/components/Pages/ProgramSection";
import RegistrationSection from "@/components/Pages/RegistrationSection";
import AboutSection from "@/components/Pages/AboutSection";
import ContactSection from "@/components/Pages/ContactSection";
import Footer from "@/components/Pages/Footer";

const Index = () => {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ProgramsSection />
          <RegistrationSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
