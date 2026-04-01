import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import aboutImg from "@/assets/about-passion.jpg";
import { Film, PenTool, Camera } from "lucide-react";

const features = [
  { icon: Film, title: "High Quality Images", desc: "Professional grade photos with stunning clarity and vivid colors." },
  { icon: PenTool, title: "Abundant Experience", desc: "Over a decade of capturing life's most important moments." },
  { icon: Camera, title: "Modern Equipment", desc: "Using the latest technology to deliver exceptional results." },
];

const About = () => {
  return (
    <Layout>
      <PageHero title="About Us" breadcrumb="About" />

      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground">We Live For Passion</h2>
            <div className="section-underline" />
            <p className="text-muted-foreground mt-6 leading-relaxed">
              We believe photography is more than just capturing images—it's about preserving emotions, telling stories, and creating art that stands the test of time.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              With an eye for detail and a passion for creativity, we transform everyday moments into extraordinary visual narratives.
            </p>
            <a
              href="/contact"
              className="inline-block mt-8 border-2 border-foreground text-foreground px-8 py-3 uppercase text-sm tracking-wider font-semibold hover:bg-foreground hover:text-background transition-all duration-300 rounded-full"
            >
              Contact Us
            </a>
          </div>
          <div className="relative">
            <img src={aboutImg} alt="About passion" className="w-full rounded-sm shadow-xl" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-card p-10 shadow-lg group hover:bg-accent transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-foreground transition-colors">
                  <f.icon className="text-primary-foreground group-hover:text-accent" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent-foreground transition-colors">
                  {f.title}
                </h3>
                <p className="text-muted-foreground mt-3 group-hover:text-accent-foreground/80 transition-colors">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
