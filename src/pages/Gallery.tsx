import React, { useState, useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Grid, Maximize2 } from "lucide-react";

// Type definitions
interface ImageData {
  id: number;
  src: string;
  alt: string;
  title: string;
}

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  onLoad?: () => void;
}

interface ImageModalProps {
  image: ImageData | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  totalImages: number;
  currentIndex: number;
}

// Sample images - replace with your actual image paths from public folder
const sampleImages: ImageData[] = [
  {
    id: 1,
    src: "/public/iterativedns.webp",
    alt: "Iterative Dns",
    title: "Iterative Dns",
  },
  {
    id: 2,
    src: "/public/dns.webp",
    alt: "Dns",
    title: "Dns",
  },
  {
    id: 3,
    src: "/public/dns_query.png",
    alt: "Dns",
    title: "Dns iterative vs dns recursive",
  },
  {
    id: 4,
    src: "/public/delay.png",
    alt: "delay",
    title: "delay types",
  },
  {
    id: 5,
    src: "/public/data_prepare.png",
    alt: "data_prepare",
    title: "data_prepare",
  },
  {
    id: 6,
    src: "/public/osi.png",
    alt: "osi",
    title: "osi",
  },
  {
    id: 6,
    src: "/public/fabirc.gif",
    alt: "fabric",
    title: "fabric",
  },
  {
    id: 7,
    src: "/public/data-osi.png",
    alt: "data-osi",
    title: "data-osi",
  },
  {
    id: 8,
    src: "/public/ipv4.webp",
    alt: "ipv4",
    title: "ipv4",
  },
  {
    id: 9,
    src: "/public/ipv6vsipv4.webp",
    alt: "ipv4 vs ipv6",
    title: "ipv4 vs ipv6",
  },
  {
    id: 10,
    src: "/public/Features-of-IPv6.png",
    alt: "Features-of-IPv6",
    title: "Features-of-IPv6",
  },
  {
    id: 11,
    src: "/public/osi-vs-ip-tcp.jpg",
    alt: "osi-vs-ip-tcp",
    title: "osi-vs-ip-tcp",
  },
  {
    id: 12,
    src: "/public/switching.jpg",
    alt: "switching",
    title: "switching",
  },
  {
    id: 13,
    src: "/public/http.png",
    alt: "http",
    title: "http",
  },
  {
    id: 14,
    src: "/public/key-Elements-of-Protocol.png",
    alt: "key-Elements-of-Protocol",
    title: "key-Elements-of-Protocol",
  },
  {
    id: 15,
    src: "/public/dhcp-ip-allocation-messages.jpg",
    alt: "dhcp-ip-allocation-messages",
    title: "dhcp-ip-allocation-messages",
  },
];

// Optimized Image Component with lazy loading
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  onClick,
  onLoad,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {isInView && (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse rounded-lg" />
          )}
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => {
              setIsLoaded(true);
              onLoad?.();
            }}
            onClick={onClick}
            loading="lazy"
          />
        </>
      )}
    </div>
  );
};

// Modal Component for Fullscreen View
const ImageModal: React.FC<ImageModalProps> = ({
  image,
  isOpen,
  onClose,
  onNext,
  onPrev,
  totalImages,
  currentIndex,
}) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyPress);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/50 to-transparent">
        <div className="text-white">
          <h3 className="text-lg font-semibold">{image.title}</h3>
          <p className="text-sm text-gray-300">
            {currentIndex + 1} of {totalImages}
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
      >
        <ChevronRight size={32} />
      </button>

      {/* Image */}
      <div className="flex items-center justify-center h-full p-16">
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

// Main Gallery Component
const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const openModal = useCallback((image: ImageData, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const nextImage = useCallback(() => {
    const nextIndex = (selectedIndex + 1) % sampleImages.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(sampleImages[nextIndex]);
  }, [selectedIndex]);

  const prevImage = useCallback(() => {
    const prevIndex =
      selectedIndex === 0 ? sampleImages.length - 1 : selectedIndex - 1;
    setSelectedIndex(prevIndex);
    setSelectedImage(sampleImages[prevIndex]);
  }, [selectedIndex]);

  const handleImageLoad = useCallback((imageId: number) => {
    setLoadedImages((prev) => new Set([...prev, imageId]));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                Image Gallery
              </h1>
              <p className="text-slate-600 mt-1">
                {sampleImages.length} photos • {loadedImages.size} loaded
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setViewMode(viewMode === "grid" ? "masonry" : "grid")
                }
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <Grid size={18} />
                {viewMode === "grid" ? "Masonry" : "Grid"} View
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div
          className={`
          ${
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          }
        `}
        >
          {sampleImages.map((image, index) => (
            <div
              key={image.id}
              className={`
                group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer
                ${
                  viewMode === "grid"
                    ? "aspect-square"
                    : "break-inside-avoid mb-6"
                }
              `}
              onClick={() => openModal(image, index)}
            >
              <LazyImage
                src={image.src}
                alt={image.alt}
                className="relative w-full h-full"
                onLoad={() => handleImageLoad(image.id)}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {image.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Maximize2 size={16} className="text-white/80" />
                    <span className="text-white/80 text-sm">Click to view</span>
                  </div>
                </div>
              </div>

              {/* Loading indicator */}
              {!loadedImages.has(image.id) && (
                <div className="absolute top-2 right-2">
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
        totalImages={sampleImages.length}
        currentIndex={selectedIndex}
      />

      {/* Performance Stats */}
      <div className="fixed bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg text-xs text-slate-600">
        <div>
          Loaded: {loadedImages.size}/{sampleImages.length}
        </div>
        <div>Mode: {viewMode}</div>
      </div>
    </div>
  );
};

export default ImageGallery;
