import { motion } from "framer-motion";
import { Home, Sparkles, Truck, Building2, Briefcase, ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import livingRoom from "@/assets/clean-living-room.jpg";
import officeImage from "@/assets/clean-office.jpg";
import airbnbImage from "@/assets/airbnb-clean.jpg";
import deepCleaningImage from "@/assets/deep-cleaning.jpg";
import moveInCleaningImage from "@/assets/move-in-cleaning.jpg";

const services = [
  {
    icon: Home,
    title: "Home & Apartment Cleaning",
    description: "Comprehensive regular cleaning to keep your home spotless and organized at all times.",
    image: livingRoom,
    features: ["Living Areas", "Bedrooms", "Kitchen", "Bathrooms"],
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Perfect for seasonal cleaning or before special occasions. We reach every corner.",
    image: deepCleaningImage,
    features: ["Thorough Scrubbing", "Behind Appliances", "Inside Cabinets", "Baseboards"],
  },
  {
    icon: Truck,
    title: "Move In/Out Cleaning",
    description: "Complete cleaning before or after moving to your new home.",
    image: moveInCleaningImage,
    features: ["Full Property", "All Surfaces", "Appliances", "Windows"],
  },
  {
    icon: Building2,
    title: "Airbnb Cleaning",
    description: "Fast turnover cleaning between bookings to maintain your high ratings.",
    image: airbnbImage,
    features: ["Quick Turnaround", "Fresh Linens", "Restocking", "Quality Check"],
  },
  {
    icon: Briefcase,
    title: "Office & Commercial",
    description: "Regular cleaning after business hours or on your schedule.",
    image: officeImage,
    features: ["Desks & Workstations", "Common Areas", "Restrooms", "Kitchen/Break Room"],
  },
];

const ServicesSection = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-muted/30" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Cleaning{" "}
            <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From homes to offices, we have the expertise to make any space
            sparkle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.13 * index }}
              className="group bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl  border border-border hover:border-primary/20">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <service.icon className="text-primary-foreground" size={24} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="group/btn text-primary hover:text-primary hover:bg-primary/10 p-0"
                  onClick={scrollToBooking}>
                  Book Now
                  <ArrowRight
                    className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                    size={18}
                  />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/80 p-8 md:p-12">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
                <Gift size={16} />
                Special Offer
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                First-Time Customer Discount!
              </h3>
              <p className="text-primary-foreground/80">
                Get a special discount on your first cleaning service with us.
              </p>
            </div>
            <Button
              size="lg"
              onClick={scrollToBooking}
              className="sparkle-button bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap">
              Claim Your Discount
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
