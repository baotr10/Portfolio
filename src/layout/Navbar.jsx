import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";

const navLinkList = [
  { href: "#about", label: "About" },
  { href: "#project", label: "Project" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      }
      else {
        setIsScroll(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScroll ? "bg-background/80 backdrop-blur-md py-3 shadow-md border-none" : "bg-transparent py-5"}`}>
      <nav className="container mx-auto px-6 flex items-center justify-between relative">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
          Henry<span>.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-3">
            {navLinkList.map((navLink) => (
              <a key={`desktop-nav-${navLink.label}`} href={navLink.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors">
                {navLink.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:block">
          <Button onClick={() => window.location.href = "#contact"} size="sm">
            Contact me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-3 glass-strong rounded-2xl p-6 shadow-2xl flex flex-col gap-4 border border-border">
            <div className="flex flex-col gap-2">
              {navLinkList.map((navLink) => (
                <a
                  key={`mobile-nav-${navLink.label}`}
                  href={navLink.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground py-2 px-3 rounded-lg hover:bg-surface transition-colors"
                >
                  {navLink.label}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-border/50">
              <Button size="sm" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                Contact me
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
