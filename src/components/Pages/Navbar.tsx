"use client"
import { useState, useEffect } from 'react';
import { Menu, X, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Program', href: '#program' },
  { name: 'Pendaftaran', href: '#pendaftaran' },
  { name: 'Tentang', href: '#tentang' },
  { name: 'Kontak', href: '#kontak' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#beranda');
            }}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Waves className={`w-8 h-8 transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-primary-foreground'
              } group-hover:text-accent`} />
            </div>
            <span className={`text-xl font-display font-bold transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}>
              Sonic Swim Club
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'text-foreground hover:text-primary hover:bg-secondary'
                    : 'text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              variant={isScrolled ? 'default' : 'heroOutline'}
              size="sm"
              className="ml-4"
              onClick={() => scrollToSection('#pendaftaran')}
            >
              Daftar Sekarang
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className={`flex flex-col gap-2 pt-2 ${
            isScrolled ? 'bg-card' : 'bg-primary/90 backdrop-blur-md rounded-xl p-4'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  isScrolled
                    ? 'text-foreground hover:bg-secondary'
                    : 'text-primary-foreground hover:bg-primary-foreground/10'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              variant={isScrolled ? 'default' : 'heroOutline'}
              className="mt-2"
              onClick={() => scrollToSection('#pendaftaran')}
            >
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
