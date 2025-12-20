"use client"
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const whatsappNumber = '6281234567890';
  const whatsappMessage = encodeURIComponent('Halo, saya tertarik untuk mendaftar di AquaSwim Club. Bisa dibantu?');

  return (
    <section id="kontak" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Hubungi Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Ada <span className="text-black">Pertanyaan?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tim kami siap membantu menjawab pertanyaan Anda. Hubungi kami melalui WhatsApp atau kunjungi lokasi kami.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-card">
                <CardContent className="p-6 space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Alamat</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Jl. Kolam Renang No. 123<br />
                        Kebayoran Baru, Jakarta Selatan<br />
                        DKI Jakarta 12130
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Telepon</h4>
                      <a
                        href="tel:+6281234567890"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        +62 812-3456-7890
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <a
                        href="mailto:info@aquaswim.id"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        info@aquaswim.id
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Jam Operasional</h4>
                      <p className="text-muted-foreground text-sm">
                        Senin - Jumat: 05:00 - 21:00<br />
                        Sabtu - Minggu: 06:00 - 18:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <Button
                variant="accent"
                size="lg"
                className="w-full"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
                Chat via WhatsApp
              </Button>
            </div>

            {/* Map */}
            <div className="lg:col-span-3">
              <Card className="shadow-card overflow-hidden h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2904107508584!2d106.79652931476873!3d-6.225028995493384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d87d0c0e5%3A0x7d2c14c77e11b5b5!2sKebayoran%20Baru%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi AquaSwim Club"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
