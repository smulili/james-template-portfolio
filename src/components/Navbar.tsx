import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav/90 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <Link to="/" className="flex items-center gap-1">
          <span className="font-display text-2xl font-bold text-nav-foreground">James</span>
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? "active text-accent" : ""}`}
            >
              {item.label}
            </Link>
          ))}
          <button className="text-nav-foreground hover:text-accent transition-colors" aria-label="Search">
            <Search size={18} />
          </button>
        </div>

        <button
          className="md:hidden text-nav-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-nav border-t border-nav-foreground/10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 text-nav-foreground hover:text-accent transition-colors ${
                location.pathname === item.path ? "text-accent" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
