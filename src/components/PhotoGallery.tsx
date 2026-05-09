"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoGalleryProps {
  images: string[];
  alt: string;
  imageAspect?: string;
}

export function PhotoGallery({ images, alt, imageAspect = "aspect-[3/4]" }: PhotoGalleryProps) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => setIndex((i) => i !== null ? (i - 1 + images.length) % images.length : null), [images.length]);
  const next = useCallback(() => setIndex((i) => i !== null ? (i + 1) % images.length : null), [images.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = index !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [index]);

  return (
    <>
      {/* ── GRILLE ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`overflow-hidden ${imageAspect} cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${alt} — photo ${i + 1}`}
              className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* ── LIGHTBOX ── */}
      {index !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={close}
        >
          {/* Compteur */}
          <span className="absolute top-5 left-5 font-mono text-xs text-white/40 select-none">
            {index + 1} / {images.length}
          </span>

          {/* Fermer */}
          <button
            onClick={close}
            aria-label="Fermer"
            className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors"
          >
            <X size={22} />
          </button>

          {/* Précédent */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Photo précédente"
              className="absolute left-4 p-3 text-white/60 hover:text-white transition-colors"
            >
              <ChevronLeft size={36} />
            </button>
          )}

          {/* Image en taille originale */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[index]}
            alt={`${alt} — photo ${index + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain select-none"
            onClick={(e) => e.stopPropagation()}
            draggable={false}
          />

          {/* Suivant */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Photo suivante"
              className="absolute right-4 p-3 text-white/60 hover:text-white transition-colors"
            >
              <ChevronRight size={36} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
