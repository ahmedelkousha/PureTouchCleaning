import { motion } from "framer-motion";
import { Users, Clock, Shield, Eye, DollarSign, Heart } from "lucide-react";
import cleanerImage from "@/assets/cleaner-professional.jpg";

const features = [
  {
    icon: Users,
    title: "Trained & Committed Team",
    description: "Our professional cleaners are thoroughly vetted and trained",
  },
  {
    icon: Clock,
    title: "Punctual Service",
    description: "We respect your time and always arrive on schedule",
  },
  {
    icon: Shield,
    title: "Safe Cleaning Products",
    description: "Eco-friendly and family-safe cleaning solutions",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description: "We don't miss a spot - every corner matters to us",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Clear rates with no hidden fees or surprises",
  },
  {
    icon: Heart,
    title: "Satisfaction Guaranteed",
    description: "Your happiness is our priority",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden" id="why-choose-us">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We Don't Just Clean,{" "}
            <span className="text-primary">We Care</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We deliver more than sparkling spaces - we bring you peace of mind and trust.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={cleanerImage}
                alt="Professional cleaner"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-2xl shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="font-display font-bold text-2xl">100%</p>
              <p className="text-sm font-medium">Satisfaction</p>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <feature.icon size={24} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
