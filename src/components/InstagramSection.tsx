import { Instagram } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const InstagramSection = () => {
  return (
    <section>
      <div className="py-16 text-center">
        <h2 className="font-display text-4xl font-bold text-foreground">Follow Instagram</h2>
        <p className="text-muted-foreground mt-3">@James_photographer</p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6">
        {images.map((img, i) => (
          <div key={i} className="relative group overflow-hidden aspect-square">
            <img
              src={img}
              alt={`Instagram photo ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-accent/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Instagram className="text-accent-foreground mb-2" size={28} />
              <span className="text-accent-foreground text-sm font-semibold">James_photographer</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
