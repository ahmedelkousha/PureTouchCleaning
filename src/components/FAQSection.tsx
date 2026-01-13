import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of cleaning services do you offer?",
    answer: "We offer: Home & Apartment Cleaning, Deep Cleaning, Move In/Out Cleaning, Airbnb Turnover Cleaning, and Office & Commercial Cleaning.",
  },
  {
    question: "Are the cleaning products you use safe?",
    answer: "Yes! We use safe, effective, eco-friendly cleaning products that are suitable for homes with children and pets.",
  },
  {
    question: "Can I book same-day service?",
    answer: "In some cases, yes - depending on availability. We recommend booking in advance to secure your preferred time slot.",
  },
  {
    question: "How is pricing determined?",
    answer: "Pricing depends on: the size of the space, type of service needed, and current condition of the property. We provide clear quotes with no hidden fees after consultation.",
  },
  {
    question: "Do you offer a first-time customer discount?",
    answer: "Yes! We offer a special discount for first-time customers on their initial cleaning service.",
  },
  {
    question: "Do you offer recurring cleaning contracts?",
    answer: "Yes, we offer weekly, bi-weekly, and monthly cleaning contracts with special discounted rates for regular customers.",
  },
  {
    question: "Do you provide Airbnb cleaning services?",
    answer: "Yes! We specialize in quick turnover cleaning between bookings to help maintain your high ratings and keep guests happy.",
  },
  {
    question: "Do you serve Chicago suburbs?",
    answer: "Yes, we proudly serve Chicago and surrounding suburban areas.",
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer: "Your satisfaction is extremely important to us! Contact us directly with any concerns and we'll address them promptly.",
  },
  {
    question: "How do I book a cleaning?",
    answer: "Simply fill out our booking form on this page or send us a message. We'll respond quickly to confirm your appointment.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-card" id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about our services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
