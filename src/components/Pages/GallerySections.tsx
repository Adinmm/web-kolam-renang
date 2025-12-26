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
import { useGetImage } from "@/hooks/useGet";

const GallerySection = () => {
  const { getImage } = useGetImage();
  const images = getImage?.data?.data || [];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
    );
  };

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
    );
  };

  return (
    <section id="galeri" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Galeri Foto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Momen Berharga Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dokumentasi kegiatan dan fasilitas Sonic Swimming Club
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-2xl aspect-4/3 group"
            >
              {/* IMAGE */}
              <img
                src={item.url}
                alt={item.category}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* CLICK AREA */}
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="absolute inset-0 z-10"
                aria-label="Lihat gambar"
              />

              {/* OVERLAY */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* TEXT */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full mb-2">
                  {item.category}
                </span>
                <p className="text-white text-sm line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX */}
        <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-5xl p-0 bg-background border-none">
            <DialogHeader className="sr-only">
              <DialogTitle>Galeri</DialogTitle>
              <DialogDescription>Preview gambar</DialogDescription>
            </DialogHeader>

            {selectedIndex !== null && (
              <div className="relative">
                {/* CLOSE */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* PREV */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/80 hover:bg-background"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* NEXT */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/80 hover:bg-background"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* IMAGE */}
                <div className="p-6">
                  <img
                    src={images[selectedIndex].url}
                    alt={images[selectedIndex].description}
                    className="w-full max-h-[70vh] object-contain rounded-xl"
                  />

                  <div className="text-center mt-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-2">
                      {images[selectedIndex].category}
                    </span>
                    <p className="font-medium w-full text-start whitespace-normal wrap-break-word break-all">
                      {images[selectedIndex].description}
                    </p>

                    <p className="text-sm text-muted-foreground mt-1">
                      {selectedIndex + 1} / {images.length}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
