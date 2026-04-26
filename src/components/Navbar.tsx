import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.webp";

const navLinks = [
  { label: "Why Choose Us", href: "why-choose-us" },
  { label: "Services", href: "services" },
  { label: "How It Works", href: "how-it-works" },
  { label: "Our Results", href: "our-results" },
  { label: "Testimonials", href: "testimonials" },
  { label: "FAQ", href: "faq" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 10],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.98)"],
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <header>
        <motion.nav
          style={{ backgroundColor }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? "" : ""
          } `}
          aria-label="Main Navigation"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <a href="#" className="flex items-center" title="Pure Touch Cleaning - Home" aria-label="Pure Touch Cleaning - Home">
                <img
                  src={logo}
                  alt="Pure Touch Cleaning Logo"
                  className={`h-12 md:h-14 w-auto transition-all duration-300 ${
                    isScrolled || isMobileMenuOpen ? "" : "brightness-0 invert"
                  }`}
                />
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8" aria-label="Desktop menu">
                <ul className="flex items-center gap-8">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className={`font-medium transition-colors duration-300 hover:text-primary ${
                          isScrolled ? "text-foreground" : "text-white"
                        }`}
                        title={`Navigate to ${link.label}`}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => scrollToSection("booking")}
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 rounded-full"
                  aria-label="Book a cleaning service"
                >
                  Book Now
                </Button>
              </nav>

              {/* Mobile Menu Button */}
              <button
                ref={buttonRef}
                className="lg:hidden z-[60] relative"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="text-foreground" size={28} />
                ) : (
                  <Menu
                    className={isScrolled ? "text-foreground" : "text-white"}
                    size={28}
                  />
                )}
              </button>
            </div>
          </div>
        </motion.nav>
      </header>

      {/* Blurry Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-20 lg:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <motion.div
        ref={mobileMenuRef}
        initial={{ opacity: 0, height: "auto", left: "-100%" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          left: isMobileMenuOpen ? "0" : "-100%",
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 w-screen pt-16 bg-card border-b border-border z-30 lg:hidden overflow-hidden"
      >
        <div className="container mx-auto px-4 py-6">
          <nav aria-label="Mobile menu">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="w-full text-left font-medium text-foreground hover:text-primary py-2"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Button
                  onClick={() => scrollToSection("booking")}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-full mt-2"
                  aria-label="Book a cleaning service"
                >
                  Book Now
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
