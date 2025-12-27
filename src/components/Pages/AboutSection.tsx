"use client";
import { Target, Eye, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="tentang" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Lebih dari Sekedar Klub Renang
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Sejak 2014, Sonic Swimming Club telah menjadi rumah bagi ratusan
              perenang dari berbagai usia dan tingkat kemampuan.
            </p>
          </div>

          {/* Profile */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Profil Klub
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Sonic Swimming Club didirikan dengan visi menghadirkan
                pembelajaran renang berkualitas tinggi yang dapat diakses oleh
                semua kalangan. Dengan fasilitas kolam renang yang nyaman dan
                tim pelatih bersertifikat nasional, kami berkomitmen untuk
                mengembangkan kemampuan renang setiap siswa secara maksimal.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Kami percaya bahwa berenang bukan sekadar olahraga, tetapi juga
                keterampilan hidup yang esensial. Oleh karena itu, setiap
                program kami dirancang untuk membangun kepercayaan diri di air,
                mengajarkan teknik berenang yang tepat, dan yang paling penting,
                menjadikan setiap sesi belajar menyenangkan dan penuh semangat.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { value: "500+", label: "Siswa Lulus" },
                  { value: "50+", label: "Medali Kompetisi" },
                  { value: "98%", label: "Kepuasan Siswa" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-card shadow-card"
                  >
                    <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Award,
                  title: "Pelatih Bersertifikat",
                  desc: "Semua pelatih memiliki sertifikasi nasional",
                },
                {
                  icon: Users,
                  title: "Kelas Kecil",
                  desc: "Maksimal 6 siswa per pelatih",
                },
                {
                  icon: Target,
                  title: "Program Terstruktur",
                  desc: "Kurikulum progresif dan terukur",
                },
                {
                  icon: Eye,
                  title: "Monitoring",
                  desc: "Laporan perkembangan berkala",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl bg-card shadow-card card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl  bg-linear-to-br from-cyan-600 to-cyan-400 text-primary-foreground">
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Visi</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                Menjadi klub renang terdepan di Indonesia yang menghasilkan
                perenang-perenang berkualitas dengan karakter yang kuat dan
                semangat sportivitas tinggi.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card shadow-pool border border-border">
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Misi
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  Menyediakan program pembelajaran renang yang berkualitas dan
                  aman untuk semua usia
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  Membina atlet-atlet renang berprestasi untuk kompetisi
                  nasional dan internasional
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  Membangun komunitas pecinta renang yang aktif dan saling
                  mendukung
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
