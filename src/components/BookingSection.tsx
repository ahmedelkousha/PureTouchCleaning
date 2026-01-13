import { motion } from "framer-motion";
import { Calendar, Clock, Sparkles, CheckCircle } from "lucide-react";

const BookingSection = () => {
  // Replace this with your actual Google Form URL
  const googleFormUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true";
  
  // For now, using a placeholder that shows a styled booking form
  const useEmbeddedForm = false; // Set to true when you have a real Google Form

  return (
    <section className="py-20 bg-muted/30" id="booking">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
            Book Now
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to Get <span className="text-primary">Started?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you with a free quote within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-card rounded-3xl p-8 border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Why Book With Us?
              </h3>
              <div className="space-y-4">
                {[
                  "Free, no-obligation quote",
                  "Flexible scheduling options",
                  "Trained & vetted professionals",
                  "Satisfaction guaranteed",
                  "Safe, eco-friendly products",
                  "Transparent pricing - no hidden fees",
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary rounded-2xl p-6 text-center">
                <Calendar className="text-primary-foreground mx-auto mb-3" size={32} />
                <p className="text-primary-foreground font-semibold">Flexible Dates</p>
                <p className="text-primary-foreground/70 text-sm">7 days a week</p>
              </div>
              <div className="bg-accent rounded-2xl p-6 text-center">
                <Clock className="text-accent-foreground mx-auto mb-3" size={32} />
                <p className="text-accent-foreground font-semibold">Quick Response</p>
                <p className="text-accent-foreground/70 text-sm">Within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl p-8 shadow-xl border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Book Your Cleaning
                </h3>
                <p className="text-muted-foreground text-sm">
                  Get a free quote today
                </p>
              </div>
            </div>

            {useEmbeddedForm ? (
              <iframe
                src={googleFormUrl}
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-xl"
              >
                Loading…
              </iframe>
            ) : (
              <div className="space-y-6">
                <p className="text-sm text-muted-foreground mb-4">
                  👋 Click the button below to open our booking form and request your free quote!
                </p>
                
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe_YOUR_FORM_ID/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                  📝 Open Booking Form
                </a>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-card px-4 text-muted-foreground">or contact us directly</span>
                  </div>
                </div>

                <div className="grid gap-4">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium py-3 px-6 rounded-xl transition-all duration-300"
                  >
                    📞 Call Us Now
                  </a>
                  <a
                    href="mailto:contact@puretouchcleaning.com"
                    className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium py-3 px-6 rounded-xl transition-all duration-300"
                  >
                    ✉️ Send Email
                  </a>
                </div>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  We typically respond within a few hours during business hours.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
