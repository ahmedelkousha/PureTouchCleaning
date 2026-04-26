import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Leaf, Sparkles } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="text-accent" size={24} />
              <Leaf className="text-primary" size={24} />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              A Clean Home is a Happy Home
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              Trust us with your space. We deliver cleanliness you can count on.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logo} 
                alt="Pure Touch Cleaning Logo" 
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Professional cleaning services in Chicago and surrounding suburbs. 
              We bring trust and cleanliness to every home and office we serve.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <MapPin size={16} className="text-accent" />
              <span>Serving Chicago & Suburbs</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Our Services", href: "#services" },
                { label: "Our Results", href: "#our-results" },
                { label: "Why Choose Us", href: "#why-choose-us" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Book Now", href: "#booking" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={18} />
                <span className="text-primary-foreground/70">
                  Chicago, IL & Suburbs
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent flex-shrink-0" size={18} />
                <a
                  href="tel:+1 (270) 801-5639"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                  aria-label="Call Pure Touch Cleaning at +1 (270) 801-5639"
                >
                  +1 (270) 801-5639
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={18} />
                <a
                  href="mailto:info@puretouchus.com"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                  aria-label="Email Pure Touch Cleaning at info@puretouchus.com"
                >
                 info@puretouchus.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} Pure Touch Cleaning. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              Professional Cleaning Services in Chicago
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
