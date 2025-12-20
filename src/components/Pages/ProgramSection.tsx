"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Baby,
  UserCheck,
  Trophy,
  Clock,
  DollarSign,
} from "lucide-react";

const programs = [
  {
    id: "pemula",
    title: "Kelas Pemula",
    description:
      "Program khusus untuk yang baru belajar berenang. Fokus pada pengenalan air, teknik dasar pernapasan, dan gaya bebas.",
    icon: Users,
    schedule: "Senin - Jumat, 08:00 - 10:00",
    price: "Rp 500.000/bulan",
    features: ["Pengenalan air", "Teknik pernapasan", "Gaya bebas dasar"],
    color: "from-accent/20 to-accent/5",
  },
  {
    id: "anak",
    title: "Kelas Anak",
    description:
      "Dirancang khusus untuk anak usia 5-12 tahun dengan metode bermain sambil belajar yang menyenangkan.",
    icon: Baby,
    schedule: "Sabtu - Minggu, 08:00 - 11:00",
    price: "Rp 600.000/bulan",
    features: ["Metode fun learning", "Keamanan air", "4 gaya renang"],
    color: "from-primary/20 to-primary/5",
  },
  {
    id: "dewasa",
    title: "Kelas Dewasa",
    description:
      "Program untuk dewasa yang ingin belajar atau meningkatkan teknik renang. Jadwal fleksibel sesuai kebutuhan.",
    icon: UserCheck,
    schedule: "Senin - Jumat, 17:00 - 20:00",
    price: "Rp 700.000/bulan",
    features: ["Jadwal fleksibel", "Private & group", "Semua level"],
    color: "from-secondary-foreground/10 to-secondary-foreground/5",
  },
  {
    id: "prestasi",
    title: "Kelas Prestasi",
    description:
      "Untuk atlet yang ingin berprestasi di kompetisi renang. Latihan intensif dengan pelatih profesional.",
    icon: Trophy,
    schedule: "Setiap hari, 05:00 - 07:00 & 15:00 - 17:00",
    price: "Rp 1.500.000/bulan",
    features: ["Latihan intensif", "Persiapan kompetisi", "Analisis video"],
    color: "from-accent/20 to-accent/5",
  },
];

const ProgramsSection = () => {
  const scrollToRegistration = () => {
    const element = document.querySelector("#pendaftaran");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="program" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Program Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Kelas Renang untuk Semua Usia
          </h2>
          <p className="text-muted-foreground text-lg">
            Pilih program yang sesuai dengan kebutuhan dan tujuan Anda. Semua
            kelas dibimbing oleh pelatih bersertifikat.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <Card
              key={program.id}
              hover
              className="group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Top */}
              <div className={`h-2 bg-linear-to-r ${program.color}`} />

              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <program.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Schedule */}
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {program.schedule}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <DollarSign className="w-4 h-4 text-muted-foreground shrink-0" />
                  <span className="text-sm font-semibold text-foreground">
                    {program.price}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2 pt-2">
                  {program.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full mt-4"
                  onClick={scrollToRegistration}
                >
                  Pilih Kelas
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
