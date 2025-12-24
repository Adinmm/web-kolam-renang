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
import { useGetClasses } from "@/hooks/useGet";
import { useEffect } from "react";
import { formatRupiah } from "@/lib/formatRupiah";


const ProgramsSection = () => {
  const scrollToRegistration = () => {
    const element = document.querySelector("#pendaftaran");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { classes } = useGetClasses();
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
          {classes?.data?.data?.map((program, index) => (
            <Card
              key={program.id}
              hover
              className="group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Top */}
              <div className={`h-2 bg-linear-to-r from-accent/20 to-accent/5`} />

              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{program.class_name}</CardTitle>
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
                    {formatRupiah(program.price)}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2 pt-2">
                  {program.class_items.map((feature) => (
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
