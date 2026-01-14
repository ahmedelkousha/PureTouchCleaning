import { motion } from "framer-motion";
import { Calendar, Clock, CalendarPlus, CheckCircle, MessageCircle, Send, Phone, Mail, User, Home, Bed, Bath, MapPin, FileText, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });

  const whatsappNumber = "1234567890"; // Replace with actual WhatsApp number

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const sendToWhatsApp = () => {
    const message = `
*New Cleaning Booking Request*

*Contact Information:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}

*Service Details:*
Service Type: ${formData.serviceType}
Property Type: ${formData.propertyType}
Bedrooms: ${formData.bedrooms}
Bathrooms: ${formData.bathrooms}
Area/Neighborhood: ${formData.area}

*Preferred Schedule:*
Date: ${formData.preferredDate}
Time: ${formData.preferredTime}

*Additional Notes:*
${formData.notes || "None"}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const isFormValid = formData.name && formData.phone && formData.serviceType && formData.propertyType;

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
                <CalendarPlus className="text-primary" size={24} />
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

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Contact Info */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                    <User size={16} className="text-primary" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="rounded-xl"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                      <Phone size={16} className="text-primary" />
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                      <Mail size={16} className="text-primary" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="flex items-center gap-2 mb-2">
                      <Sparkles size={16} className="text-primary" />
                      Service Type *
                    </Label>
                    <Select onValueChange={(value) => handleChange("serviceType", value)}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home">Home/Apartment</SelectItem>
                        <SelectItem value="deep">Deep Cleaning</SelectItem>
                        <SelectItem value="movein">Move In/Out</SelectItem>
                        <SelectItem value="airbnb">Airbnb</SelectItem>
                        <SelectItem value="office">Office/Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="flex items-center gap-2 mb-2">
                      <Home size={16} className="text-primary" />
                      Property Type *
                    </Label>
                    <Select onValueChange={(value) => handleChange("propertyType", value)}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="office">Office</SelectItem>
                        <SelectItem value="airbnb">Airbnb</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="flex items-center gap-2 mb-2">
                      <Bed size={16} className="text-primary" />
                      Bedrooms
                    </Label>
                    <Select onValueChange={(value) => handleChange("bedrooms", value)}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="studio">Studio</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4+">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="flex items-center gap-2 mb-2">
                      <Bath size={16} className="text-primary" />
                      Bathrooms
                    </Label>
                    <Select onValueChange={(value) => handleChange("bathrooms", value)}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3+">3+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Location & Schedule */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="area" className="flex items-center gap-2 mb-2">
                    <MapPin size={16} className="text-primary" />
                    City / Neighborhood
                  </Label>
                  <Input
                    id="area"
                    placeholder="e.g., Downtown Chicago"
                    value={formData.area}
                    onChange={(e) => handleChange("area", e.target.value)}
                    className="rounded-xl"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="min-w-0">
                    <Label htmlFor="date" className="flex items-center gap-2 mb-2">
                      <Calendar size={16} className="text-primary" />
                      Preferred Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleChange("preferredDate", e.target.value)}
                      className="rounded-xl w-full"
                    />
                  </div>
                  <div className="min-w-0">
                    <Label className="flex items-center gap-2 mb-2">
                      <Clock size={16} className="text-primary" />
                      Preferred Time
                    </Label>
                    <Select onValueChange={(value) => handleChange("preferredTime", value)}>
                      <SelectTrigger className="rounded-xl w-full">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning</SelectItem>
                        <SelectItem value="afternoon">Afternoon</SelectItem>
                        <SelectItem value="evening">Evening</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <Label htmlFor="notes" className="flex items-center gap-2 mb-2">
                  <FileText size={16} className="text-primary" />
                  Additional Notes
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Pets, special requests, or any details we should know..."
                  value={formData.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  className="rounded-xl min-h-[80px]"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="button"
                onClick={sendToWhatsApp}
                disabled={!isFormValid}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-6 rounded-xl text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <MessageCircle size={22} className="mr-2" />
                Send via WhatsApp
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Your information will be sent securely via WhatsApp. We typically respond within a few hours.
              </p>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-card px-4 text-muted-foreground">or contact us directly</span>
              </div>
            </div>

            <div className="grid gap-3">
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium py-3 px-6 rounded-xl transition-all duration-300"
              >
                <Phone size={18} />
                Call Us Now
              </a>
              <a
                href="mailto:contact@puretouchcleaning.com"
                className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium py-3 px-6 rounded-xl transition-all duration-300"
              >
                <Mail size={18} />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
