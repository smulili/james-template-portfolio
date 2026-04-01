import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    greeting: "Hello",
    name: "I'm James",
    description: "I photograph very instinctively. I see how it is taken like that. I do not follow certain styles, philosophies or teachers.",
  },
  {
    image: hero2,
    greeting: "Welcome",
    name: "I'm James",
    description: "Every frame tells a story. I capture the raw beauty of moments that most people overlook.",
  },
  {
    image: hero3,
    greeting: "Discover",
    name: "My World",
    description: "Through my lens, I explore the intersection of light, shadow, and human emotion.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setAnimKey((k) => k + 1);
  }, []);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt={s.name}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-primary/50" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center" key={animKey}>
        <div className="container mx-auto px-6 md:px-16">
          <p className="font-display text-5xl md:text-7xl lg:text-8xl text-accent italic animate-bounce-in">
            {slide.greeting}
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground animate-bounce-in-delay-1 mt-2">
            {slide.name}
          </h1>
          <p className="text-primary-foreground/80 max-w-xl mt-6 leading-relaxed text-lg animate-bounce-in-delay-2">
            {slide.description}
          </p>
          <div className="flex items-center gap-6 mt-8 animate-bounce-in-delay-3">
            <a
              href="#gallery"
              className="border-2 border-accent text-accent px-8 py-3 font-semibold uppercase text-sm tracking-wider hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Get A Quote
            </a>
            <span className="text-primary-foreground font-semibold italic">hello.james@gmail.com</span>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={48} strokeWidth={1} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={48} strokeWidth={1} />
      </button>
    </section>
  );
};

export default HeroSlider;
