import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-nav text-nav-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-1 mb-4">
              <span className="font-display text-2xl font-bold">James</span>
              <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            </Link>
            <p className="text-nav-foreground/60 text-sm leading-relaxed">
              Capturing moments that tell stories. Professional photography with a creative edge.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-nav-foreground/60 hover:text-accent transition-colors text-sm">Home</Link>
              <Link to="/about" className="text-nav-foreground/60 hover:text-accent transition-colors text-sm">About</Link>
              <Link to="/gallery" className="text-nav-foreground/60 hover:text-accent transition-colors text-sm">Gallery</Link>
              <Link to="/contact" className="text-nav-foreground/60 hover:text-accent transition-colors text-sm">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contact</h4>
            <p className="text-nav-foreground/60 text-sm">hello.james@gmail.com</p>
            <p className="text-nav-foreground/60 text-sm mt-1">+6511.188.888</p>
          </div>
        </div>
        <div className="border-t border-nav-foreground/10 mt-10 pt-6 text-center text-nav-foreground/40 text-xs">
          © {new Date().getFullYear()} James Photography. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
