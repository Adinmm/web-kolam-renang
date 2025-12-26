"use client";
import { useGetClasses, useGetContactInformation } from "@/hooks/useGet";
import { convertPhone } from "@/lib/convertPhone";
import {
  Waves,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { query } = useGetContactInformation();
  const { classes } = useGetClasses();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Waves className="w-8 h-8 text-accent" />
              <span className="text-xl font-display font-bold">
                Sonic Swimming Club
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Klub renang profesional dengan fasilitas modern dan pelatih
              bersertifikat untuk semua usia.
            </p>
            <div className="flex gap-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/share/1FRWdCtRXV/"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/sonicswimmingclubmedan?igsh=MXVmdXd4d2UyNnAwZA=="
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtube.com/@sonicswimmingclubmedan?si=Q6j68pdgPLs0o3ng"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@sonic_swimming_club?_r=1&_t=ZS-92VrVtLk0qf"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Menu Cepat
            </h3>
            <ul className="space-y-3">
              {[
                "Beranda",
                "Program",
                "Pendaftaran",
                "Tentang Kami",
                "Kontak",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Program Kami
            </h3>
            <ul className="space-y-3">
              {classes?.data?.data?.map((program, i) => (
                <li key={i}>
                  <a
                    href="#program"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {program.class_name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Hubungi Kami
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  {query?.data?.data?.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href={`tel:+${convertPhone(query?.data?.data?.phone || "")}`}
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  +{convertPhone(query?.data?.data?.phone || "")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a
                  href={`mailto:${query?.data?.data?.email}`}
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  {query?.data?.data?.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Sonic Swimming Club. Hak cipta dilindungi.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
            >
              Kebijakan Privasi
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
            >
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
