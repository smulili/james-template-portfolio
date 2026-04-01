import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import heroBg from "@/assets/hero-1.jpg";

interface PageHeroProps {
  title: string;
  breadcrumb: string;
}

const PageHero = ({ title, breadcrumb }: PageHeroProps) => {
  return (
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative z-10 text-center">
        <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground">{title}</h1>
        <div className="flex items-center justify-center gap-2 mt-4 text-primary-foreground/80">
          <Link to="/" className="hover:text-accent transition-colors flex items-center gap-1">
            <Home size={16} />
            Home
          </Link>
          <span>›</span>
          <span className="text-accent">{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
