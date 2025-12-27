"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Medal, Users } from "lucide-react";
import { useGetCoach } from "@/hooks/useGet";



const CoachesSection = () => {
  const {getCoach} = useGetCoach()
  return (
    <section id="pelatih" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Tim Pelatih
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Pelatih Berpengalaman
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tim pelatih profesional kami memiliki sertifikasi resmi dan
            pengalaman bertahun-tahun dalam melatih berbagai tingkatan kemampuan
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
          <div className="text-center p-4 bg-wave-light/50 rounded-xl">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">15+</p>
            <p className="text-sm text-muted-foreground">Pelatih Aktif</p>
          </div>
          <div className="text-center p-4 bg-wave-light/50 rounded-xl">
            <Award className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">100%</p>
            <p className="text-sm text-muted-foreground">Bersertifikat</p>
          </div>
          <div className="text-center p-4 bg-wave-light/50 rounded-xl">
            <Medal className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">50+</p>
            <p className="text-sm text-muted-foreground">Medali Diraih</p>
          </div>
        </div>

        {/* Coaches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getCoach?.data?.data?.map((coach) => (
            <Card
              key={coach.id}
              className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-card"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={coach?.url}
                    alt={coach?.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-primary text-primary-foreground mb-2">
                      Coach
                    </Badge>
                    <h3 className="text-white font-bold text-lg">
                      {coach?.name}
                    </h3>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">Pengalaman:</span>
                    <span className="font-medium text-foreground">
                      {coach?.experience}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">Spesialisasi:</span>
                    <span className="font-medium text-foreground">
                      {coach?.specialization}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
