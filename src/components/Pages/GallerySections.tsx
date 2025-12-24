"use client";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=400&fit=crop",
    alt: "Latihan renang anak-anak",
    category: "Kelas Anak",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=600&h=400&fit=crop",
    alt: "Kompetisi renang",
    category: "Kompetisi",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&h=400&fit=crop",
    alt: "Fasilitas kolam renang",
    category: "Fasilitas",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
    alt: "Latihan renang dewasa",
    category: "Kelas Dewasa",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?w=600&h=400&fit=crop",
    alt: "Pelatih profesional",
    category: "Pelatih",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1622629797619-c100e3e67e2e?w=600&h=400&fit=crop",
    alt: "Kegiatan klub",
    category: "Kegiatan",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <section id="galeri" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Galeri Foto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
            Momen Berharga Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lihat kegiatan dan fasilitas kami melalui koleksi foto terbaik dari
            Sonic Swim Club
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-4/3"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full mb-2">
                  {image.category}
                </span>
                <p className="text-background text-sm font-medium">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-4xl w-full p-0 bg-background/95 backdrop-blur-sm border-none">
            <DialogHeader className="sr-only">
              <DialogTitle>
                {selectedImage !== null
                  ? galleryImages[selectedImage].alt
                  : "Gallery Image"}
              </DialogTitle>
              <DialogDescription>
                Tampilan detail gambar galeri
              </DialogDescription>
            </DialogHeader>
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                aria-label="Sebelumnya"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                aria-label="Selanjutnya"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>

              {/* Image */}
              {selectedImage !== null && (
                <div className="p-4">
                  <img
                    src={galleryImages[selectedImage].src.replace(
                      "w=600&h=400",
                      "w=1200&h=800"
                    )}
                    alt={galleryImages[selectedImage].alt}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                  />
                  <div className="mt-4 text-center">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-2">
                      {galleryImages[selectedImage].category}
                    </span>
                    <p className="text-foreground font-medium">
                      {galleryImages[selectedImage].alt}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {selectedImage + 1} / {galleryImages.length}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
