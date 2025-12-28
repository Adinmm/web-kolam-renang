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

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

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
    <section id="galeri" className="bg-muted/30 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Galeri Foto
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Momen Berharga Kami
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Dokumentasi kegiatan dan fasilitas Sonic Swimming Club
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-muted"
            >
              {/* IMAGE */}
              <img
                src={item.url}
                alt={item.description}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* CLICK */}
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="absolute inset-0 z-10"
                aria-label="Lihat gambar"
              />

              {/* OVERLAY */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              {/* TEXT */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4">
                <span className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                  {item.category}
                </span>
                <p className="text-sm text-white line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX */}
        <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-5xl border-0 bg-background p-0">
            <DialogHeader className="sr-only">
              <DialogTitle>Galeri</DialogTitle>
              <DialogDescription>Preview gambar</DialogDescription>
            </DialogHeader>

            {selectedIndex !== null && (
              <div className="relative">
                {/* CLOSE */}
                <button
                  onClick={closeLightbox}
                  className="absolute right-4 top-4 z-20 rounded-full bg-background/90 p-2 shadow hover:bg-background"
                  aria-label="Tutup"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* PREV */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow hover:bg-background"
                  aria-label="Sebelumnya"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                {/* NEXT */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow hover:bg-background"
                  aria-label="Selanjutnya"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* IMAGE */}
                <div className="p-6">
                  <img
                    src={images[selectedIndex].url}
                    alt={images[selectedIndex].description}
                    className="mx-auto max-h-[70vh] w-full rounded-xl object-contain"
                  />

                  {/* INFO */}
                  <div className="mt-4 text-center">
                    <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                      {images[selectedIndex].category}
                    </span>

                    <p className="mx-auto max-w-2xl wrap-break-word text-start font-medium text-foreground">
                      {images[selectedIndex].description}
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
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
