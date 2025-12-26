"use client";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-pool.jpg";
import Image from "next/image";

const HeroSection = () => {
  const scrollToPrograms = () => {
    const element = document.querySelector("#program");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToRegistration = () => {
    const element = document.querySelector("#pendaftaran");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Olympic swimming pool underwater view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary/80 via-primary/60 to-primary/90" />
        <div className="absolute inset-0 bg-linear-to-r from-pool-start/30 to-pool-end/30" />
      </div>

      {/* Animated Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
        <svg
          viewBox="0 0 1440 120"
          className="absolute bottom-0 w-full h-full animate-wave"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            className="text-primary-foreground"
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Sonic Swim Club
          </h1>

          {/* Tagline */}
          <p
            className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-light mb-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Berenang dengan <span className=" text-white">Percaya Diri</span>
          </p>

          {/* Description */}
          <p
            className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Klub renang dengan pelatih bersertifikat nasional dan fasilitas
            berstandar internasional untuk mengantarkan perenang dari langkah
            pertama hingga meraih prestasi.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="xl" onClick={scrollToRegistration}>
              Daftar Sekarang
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToPrograms}>
              Lihat Program
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { value: "150+", label: "Siswa Aktif" },
              { value: "15+", label: "Pelatih Profesional" },
              { value: "5", label: "Tahun Pengalaman" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToPrograms}
          className="p-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
