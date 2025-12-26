"use client";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGetContactInformation } from "@/hooks/useGet";
import { convertPhone } from "@/lib/convertPhone";

const ContactSection = () => {
  
  const { query } = useGetContactInformation();
  const whatsappNumber = convertPhone(query.data?.data?.phone ||"")
  const whatsappMessage = encodeURIComponent(
    "Halo, saya tertarik untuk mendaftar di Sonic Swimming Club. Bisa dibantu?"
  );

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
              Tim kami siap membantu menjawab pertanyaan Anda. Hubungi kami
              melalui WhatsApp atau kunjungi lokasi kami.
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
                      <h4 className="font-semibold text-foreground mb-1">
                        Alamat
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {query?.data?.data?.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Telepon
                      </h4>
                      <a
                        href={`tel:+${convertPhone(query?.data?.data?.phone ||"")}`}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        +{convertPhone(query?.data?.data?.phone ||"")}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Email
                      </h4>
                      <a
                        href={`mailto:${query?.data?.data?.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {query?.data?.data?.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Jam Operasional
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {query?.data?.data?.operational_time?.map((item, i) => {
                          return (
                            <span key={i}>
                              {item} <br />
                            </span>
                          );
                        })}
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
                onClick={() =>
                  window.open(
                    `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
                    "_blank"
                  )
                }
              >
                <MessageCircle className="w-5 h-5" />
                Chat via WhatsApp
              </Button>
            </div>

            {/* Map */}
            <div className="lg:col-span-3">
              <Card className="shadow-card overflow-hidden h-full min-h-[400px]">
               
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.910179800621!2d98.71842819999999!3d3.6080289999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131be0b7b9735%3A0xbf30b14549c73ed8!2sKursus%20Renang%20Medan%20(%20Sonic%20SC)!5e0!3m2!1sid!2sid!4v1766569624551!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Sonic Swimming Club"
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
