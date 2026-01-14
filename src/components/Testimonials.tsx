import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Homeowner",
    content: "Excellent service and always on time. Highly recommend Pure Touch Cleaning!",
    rating: 5,
  },
  {
    name: "Michael R.",
    role: "Property Manager",
    content: "My house is sparkling! Professional and thorough work every time.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    role: "Airbnb Host",
    content: "Fast and precise Airbnb turnover cleaning. My ratings have never been better!",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Business Owner",
    content: "Our office has never looked better. The team is professional and reliable.",
    rating: 5,
  },
  {
    name: "Amanda T.",
    role: "Working Mom",
    content: "Life-saver for busy families! They pay attention to every detail and my kids love coming home to a clean house.",
    rating: 5,
  },
  {
    name: "Robert J.",
    role: "Real Estate Agent",
    content: "I trust Pure Touch for all my property showings. They make every home look its absolute best.",
    rating: 5,
  },
  {
    name: "Lisa C.",
    role: "Condo Owner",
    content: "Been using them for over a year now. Consistent quality and the team is always friendly and respectful.",
    rating: 5,
  },
  {
    name: "Marcus W.",
    role: "Restaurant Owner",
    content: "They handle our deep cleaning needs perfectly. Kitchen passes every health inspection with flying colors!",
    rating: 5,
  },
  {
    name: "Emily H.",
    role: "New Homeowner",
    content: "Used their move-in service and was blown away. The place looked brand new when they finished!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  return (
    <section className="py-20 bg-muted/30" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </motion.div>

        {/* Featured Testimonial with Swipe Support */}
        <div 
          className="max-w-3xl mx-auto mb-12 relative"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-card hover:bg-muted border border-border rounded-full p-2 shadow-md transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-foreground" size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-card hover:bg-muted border border-border rounded-full p-2 shadow-md transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-foreground" size={24} />
          </button>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 * direction }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border relative">
                <Quote className="absolute top-6 left-6 text-primary/20" size={48} />
                <div className="relative">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="text-accent fill-accent" size={24} />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-foreground text-center mb-8 font-medium italic">
                    "{testimonials[activeIndex].content}"
                  </p>
                  <div className="text-center">
                    <p className="font-display font-bold text-lg text-foreground">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-primary w-8"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
