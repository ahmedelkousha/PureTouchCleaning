import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    setIsExpanded(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                className="bg-card rounded-2xl shadow-2xl border border-border p-6 w-72"
              >
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
                >
                  <X size={18} />
                </button>
                
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="text-primary" size={20} />
                  <span className="font-display font-semibold text-foreground">
                    Need Cleaning?
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">
                  Get a free quote in minutes! We're ready to help.
                </p>
                
                <div className="space-y-2">
                  <button
                    onClick={scrollToBooking}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-4 rounded-xl transition-colors"
                  >
                    Book Now
                  </button>
                  <a
                    href="tel:+1234567890"
                    className="block w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium py-3 px-4 rounded-xl text-center transition-colors"
                  >
                    📞 Call Us
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.button
                key="collapsed"
                onClick={() => setIsExpanded(true)}
                className="relative bg-primary hover:bg-primary/90 text-primary-foreground w-14 h-14 rounded-full shadow-lg flex items-center justify-center group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={24} />
                
                {/* Pulse Animation */}
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                
                {/* Tooltip */}
                <span className="absolute right-full mr-3 bg-card text-foreground px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-border">
                  Get a Quote! ✨
                </span>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
