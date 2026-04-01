import { useState } from "react";
import { Play } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

type Category = "All" | "Human" | "Nature" | "Country" | "Video";

interface GalleryItem {
  src: string;
  category: Category[];
  tall?: boolean;
  isVideo?: boolean;
  videoUrl?: string;
}

const items: GalleryItem[] = [
  { src: gallery1, category: ["All", "Human"] },
  { src: gallery2, category: ["All", "Human"], tall: true },
  { src: gallery3, category: ["All", "Human"] },
  { src: gallery4, category: ["All", "Human"] },
  { src: gallery5, category: ["All", "Human"] },
  { src: gallery6, category: ["All", "Nature"] },
  { src: gallery7, category: ["All", "Nature"], tall: true },
  { src: gallery8, category: ["All", "Country"] },
  { src: gallery1, category: ["All", "Video"], isVideo: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { src: gallery3, category: ["All", "Video"], isVideo: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", tall: true },
  { src: gallery5, category: ["All", "Video"], isVideo: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

const categories: Category[] = ["All", "Human", "Nature", "Country", "Video"];

const GalleryGrid = () => {
  const [active, setActive] = useState<Category>("All");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const filtered = items.filter((item) => item.category.includes(active));

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-8 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setPlayingVideo(null); }}
              className={`font-display text-xl font-bold transition-colors relative pb-2 ${
                active === cat ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
              {active === cat && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent" />}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <div key={i} className="break-inside-avoid group overflow-hidden relative">
              {playingVideo === i ? (
                <iframe
                  src={`${item.videoUrl}?autoplay=1`}
                  className={`w-full ${item.tall ? "h-[400px]" : "h-[280px]"}`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={`Video ${i + 1}`}
                />
              ) : (
                <>
                  <img
                    src={item.src}
                    alt={`Gallery ${i + 1}`}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      item.tall ? "h-[400px]" : "h-[280px]"
                    }`}
                    loading="lazy"
                  />
                  {item.isVideo && (
                    <button
                      onClick={() => setPlayingVideo(i)}
                      className="absolute inset-0 flex items-center justify-center"
                      aria-label="Play video"
                    >
                      <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center hover:bg-accent transition-colors shadow-lg">
                        <Play className="text-accent-foreground ml-1" size={24} fill="currentColor" />
                      </div>
                    </button>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/gallery"
            className="inline-block border-2 border-foreground text-foreground px-10 py-3 uppercase text-sm tracking-wider font-semibold hover:bg-foreground hover:text-background transition-all duration-300 rounded-full"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
