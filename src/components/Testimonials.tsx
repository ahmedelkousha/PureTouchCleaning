import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

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
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

        {/* Featured Testimonial */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12"
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

        {/* All Testimonials Grid for larger screens */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-card rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                index === activeIndex
                  ? "border-primary shadow-lg"
                  : "border-border hover:border-primary/30"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={14} />
                ))}
              </div>
              <p className="text-foreground text-sm mb-4 line-clamp-3">
                "{testimonial.content}"
              </p>
              <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
              <p className="text-muted-foreground text-xs">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
