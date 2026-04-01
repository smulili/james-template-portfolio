import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import aboutImg from "@/assets/about-passion.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import { Film, PenTool, Camera, Play, X, Facebook, Twitter, Linkedin } from "lucide-react";

const features = [
  { icon: Film, title: "High Quality Images", desc: "Professional grade photos with stunning clarity and vivid colors." },
  { icon: PenTool, title: "Abundant Experience", desc: "Over a decade of capturing life's most important moments." },
  { icon: Camera, title: "Modern Equipment", desc: "Using the latest technology to deliver exceptional results." },
];

const teamMembers = [
  { name: "Andrew Dean", role: "Photographer", img: team1 },
  { name: "Tommy Kim", role: "Photographer", img: team2 },
  { name: "Max McCormick", role: "Photographer", img: team3 },
  { name: "Robert Ward", role: "Photographer", img: team4 },
];

const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Layout>
      <PageHero title="About Us" breadcrumb="About" />

      {/* We Live For Passion */}
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
            {/* Video play button */}
            <button
              onClick={() => setShowVideo(true)}
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Play video"
            >
              <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center hover:bg-accent transition-colors shadow-lg group">
                <Play className="text-accent-foreground ml-1 group-hover:scale-110 transition-transform" size={32} fill="currentColor" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4" onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-background hover:text-accent transition-colors"
              aria-label="Close video"
            >
              <X size={28} />
            </button>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Portfolio Video"
            />
          </div>
        </div>
      )}

      {/* Why Choose Us */}
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

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-12">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="bg-card shadow-lg p-8 group hover:bg-accent transition-colors duration-300"
              >
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-border group-hover:border-accent-foreground/30 transition-colors">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={512}
                    height={512}
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent-foreground transition-colors">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-semibold uppercase tracking-wider mt-1 group-hover:text-accent-foreground/80 transition-colors">
                  {member.role}
                </p>
                <div className="flex items-center justify-center gap-4 mt-4">
                  {[Facebook, Twitter, Linkedin].map((Icon, j) => (
                    <a key={j} href="#" className="text-muted-foreground hover:text-accent group-hover:text-accent-foreground/70 group-hover:hover:text-accent-foreground transition-colors">
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
