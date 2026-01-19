import { motion } from "framer-motion";
import { MapPin, Phone, Sparkles, ArrowDown, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cleaning.jpg";
import heroMobileImage from "@/assets/hero-mobile.png";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Clock, text: "Same Day Available" },
    { icon: Award, text: "5-Star Rated" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0">
        {/* Desktop background */}
        <img
          src={heroImage}
          alt="Clean modern home"
          className="hidden md:block w-full h-full object-cover"
        />
        {/* Mobile background */}
        <img
          src={heroMobileImage}
          alt="Professional cleaning team"
          className="md:hidden w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/30" />
      </div>

      {/* Subtle Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 1.2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            style={{
              left: `${20 + i * 20}%`,
              top: `${50 + Math.random() * 30}%`,
            }}
          >
            <Sparkles size={20} className="text-primary/60" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full mb-8"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium">Chicago's Trusted Cleaning Experts</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1]"
          >
            Professional Cleaning,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              Your Peace of Mind
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed"
          >
            Looking for a reliable cleaning company that's punctual and meticulous? 
            We're here to give you a spotless home or office, stress-free.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
              >
                <feature.icon size={16} className="text-primary" />
                <span className="text-white/90 text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Location & Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-6 mb-10"
          >
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="text-primary" size={20} />
              <span>Serving Chicago & Suburbs</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Phone className="text-primary" size={20} />
              <span>Quick Booking</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              onClick={scrollToBooking}
              className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
            >
              Get Your Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white font-medium text-lg px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300"
            >
              Our Services
            </Button>
          </motion.div>
        </div>
      </div>
{/* Scroll Indicator */}
      <motion.button
        onClick={() => document.getElementById("why-choose-us")?.scrollIntoView({ behavior: "smooth" })}
        // التغييرات السحرية هنا:
        // 1. شلنا left-1/2 و translate
        // 2. حطينا left-0 و right-0 و mx-auto (دي بتجبره ييجي في النص بالظبط)
        // 3. w-fit: عشان ياخد مساحة على قد حجمه بس
        className="absolute bottom-8 left-0 right-0 mx-auto w-fit z-20 text-white/50 hover:text-white/80 transition-colors cursor-pointer p-4"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to Why Choose Us"
      >
        <ArrowDown size={28} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
