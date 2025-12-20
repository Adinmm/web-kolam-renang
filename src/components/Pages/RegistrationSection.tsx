"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Loader2 } from 'lucide-react';

const formSchema = z.object({
  nama: z.string().min(2, 'Nama minimal 2 karakter').max(100, 'Nama maksimal 100 karakter'),
  umur: z.string().min(1, 'Umur harus diisi').refine((val) => {
    const num = parseInt(val);
    return num >= 3 && num <= 100;
  }, 'Umur harus antara 3-100 tahun'),
  nomorHP: z.string()
    .min(10, 'Nomor HP minimal 10 digit')
    .max(15, 'Nomor HP maksimal 15 digit')
    .regex(/^[0-9+]+$/, 'Nomor HP hanya boleh berisi angka'),
  email: z.string().email('Email tidak valid'),
  kelas: z.string().min(1, 'Pilih kelas yang diinginkan'),
});

type FormData = z.infer<typeof formSchema>;

const kelasOptions = [
  { value: 'pemula', label: 'Kelas Pemula' },
  { value: 'anak', label: 'Kelas Anak (5-12 tahun)' },
  { value: 'dewasa', label: 'Kelas Dewasa' },
  { value: 'prestasi', label: 'Kelas Prestasi' },
];

const RegistrationSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: '',
      umur: '',
      nomorHP: '',
      email: '',
      kelas: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: 'Pendaftaran Berhasil! 🎉',
      description: 'Tim kami akan menghubungi Anda dalam 1-2 hari kerja.',
    });
  };

  const handleReset = () => {
    setIsSuccess(false);
    form.reset();
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
              Isi formulir pendaftaran di samping untuk memulai perjalanan renang Anda bersama AquaSwim Club. 
              Tim kami akan menghubungi Anda untuk konfirmasi dan jadwal trial gratis.
            </p>

            <div className="space-y-4 pt-4">
              {[
                'Trial gratis untuk siswa baru',
                'Pelatih bersertifikat nasional',
                'Jadwal fleksibel sesuai kebutuhan',
                'Fasilitas kolam renang berstandar internasional',
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
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
