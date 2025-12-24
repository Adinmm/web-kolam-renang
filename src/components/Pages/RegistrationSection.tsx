"use client";
import { useEffect, useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useGetClasses, useGetContactInformation } from "@/hooks/useGet";
import { convertPhone } from "@/lib/convertPhone";

const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    nama: "",
    umur: "",
    nomorHP: "",
    email: "",
    kelas: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { query } = useGetContactInformation();
  const { classes } = useGetClasses();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = convertPhone(query.data?.data?.phone || "");
    const message = `
Halo Admin, saya ingin mendaftar.

Nama: ${formData.nama}
Umur: ${formData.umur}
No HP: ${formData.nomorHP}
Email: ${formData.email}
Kelas: ${formData.kelas}
  `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank"); // buka tab baru
  };
  return (
    <section id="pendaftaran" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Pendaftaran Online
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
              Daftar Sekarang, <br />
              <span className="text-gradient">Mulai Berenang!</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Isi formulir pendaftaran di samping untuk memulai perjalanan
              renang Anda bersama AquaSwim Club. Tim kami akan menghubungi Anda
              untuk konfirmasi dan jadwal trial gratis.
            </p>

            <div className="space-y-4 pt-4">
              {[
                "Trial gratis untuk siswa baru",
                "Pelatih bersertifikat nasional",
                "Jadwal fleksibel sesuai kebutuhan",
                "Fasilitas kolam renang berstandar internasional",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <Card className="shadow-pool border-0">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl">Formulir Pendaftaran</CardTitle>
              <CardDescription>
                Lengkapi data di bawah ini untuk mendaftar
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium">Nama Lengkap</label>
                  <Input
                    name="nama"
                    placeholder="Masukkan nama lengkap"
                    value={formData.nama}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Umur</label>
                    <Input
                      type="number"
                      name="umur"
                      placeholder="Umur"
                      value={formData.umur}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Nomor HP</label>
                    <Input
                      name="nomorHP"
                      placeholder="08xxxxxxxxxx"
                      value={formData.nomorHP}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Pilih Kelas</label>
                  <Select
                    value={formData.kelas}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, kelas: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kelas yang diinginkan" />
                    </SelectTrigger>
                    <SelectContent>
                      {classes?.data?.data?.map((option, index) => (
                        <SelectItem key={index} value={option.class_name}>
                          {option.class_name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" variant="hero" className="w-full">
                  Daftar Sekarang
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
