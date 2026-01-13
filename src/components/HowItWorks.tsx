import { motion } from "framer-motion";
import { MessageCircle, Calendar, Sparkles, Star } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Contact Us",
    description: "Fill out our booking form or send us a message with your cleaning needs.",
  },
  {
    icon: Calendar,
    step: "02",
    title: "Schedule a Time",
    description: "We'll find the perfect time that works for your schedule.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "We Clean Professionally",
    description: "Our trained team arrives and delivers exceptional cleaning service.",
  },
  {
    icon: Star,
    step: "04",
    title: "Enjoy & Relax",
    description: "Your satisfaction is our goal. Enjoy your sparkling clean space!",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-card" id="how-it-works">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple <span className="text-primary">4-Step</span> Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting your space professionally cleaned has never been easier.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-background rounded-3xl p-8 text-center border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <step.icon className="text-primary" size={32} />
                  </div>
                  
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 text-primary text-2xl -translate-y-1/2 z-20">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
