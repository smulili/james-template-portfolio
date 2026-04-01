import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <PageHero title="Contact" breadcrumb="Contact" />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-5xl font-bold text-foreground leading-tight">
                Let's Work Together
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Mail size={16} />
                  <span className="text-sm">Email</span>
                </div>
                <p className="text-foreground font-semibold">hello.james@gmail.com</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <MapPin size={16} />
                  <span className="text-sm">Visit Us</span>
                </div>
                <p className="text-foreground font-semibold">60-49 Road 11378 New York</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Phone size={16} />
                  <span className="text-sm">Call Us</span>
                </div>
                <p className="text-foreground font-semibold">+6511.188.888</p>
              </div>
            </div>
          </div>

          <form className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-border bg-background px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-border bg-background px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-border bg-background px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors md:col-span-2"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="border border-border bg-background px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors md:col-span-2 resize-none"
            />
            <div>
              <button
                type="submit"
                className="bg-accent text-accent-foreground px-10 py-4 font-semibold uppercase text-sm tracking-wider hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Google Map */}
      <section className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps - Our Location"
        />
      </section>
    </Layout>
  );
};

export default Contact;
