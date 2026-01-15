"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// استيراد ملفات CSS الخاصة بـ Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Homeowner",
    content:
      "Excellent service and always on time. Highly recommend Pure Touch Cleaning!",
    rating: 5,
  },
  {
    name: "Michael R.",
    role: "Property Manager",
    content:
      "My house is sparkling! Professional and thorough work every time.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    role: "Airbnb Host",
    content:
      "Fast and precise Airbnb turnover cleaning. My ratings have never been better!",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Business Owner",
    content:
      "Our office has never looked better. The team is professional and reliable.",
    rating: 5,
  },
  {
    name: "Amanda T.",
    role: "Working Mom",
    content:
      "Life-saver for busy families! They pay attention to every detail and my kids love coming home to a clean house.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30 overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4">
        {/* عنوان القسم */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
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

        <div className="max-w-4xl mx-auto relative group">
          {/* أزرار التنقل (Arrows) */}
          <button className="swiper-prev-button absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 bg-card hover:bg-primary hover:text-white border border-border rounded-full p-3 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex">
            <ChevronLeft size={24} />
          </button>
          <button className="swiper-next-button absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 bg-card hover:bg-primary hover:text-white border border-border rounded-full p-3 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex">
            <ChevronRight size={24} />
          </button>

          {/* الكاروسيل */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            navigation={{
              nextEl: ".swiper-next-button",
              prevEl: ".swiper-prev-button",
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            className="testimonial-swiper">
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border relative mx-4 mb-10">
                  <Quote
                    className="absolute top-6 left-6 text-primary/10"
                    size={60}
                  />

                  <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-accent fill-accent"
                          size={20}
                        />
                      ))}
                    </div>

                    <p className="text-lg md:text-2xl text-foreground text-center mb-8 font-medium italic leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    <div className="text-center">
                      <p className="font-display font-bold text-xl text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-primary font-medium text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* نقاط التنقل (Dots) - معالجة بالتيلويند لتجنب أخطاء TypeScript */}
          <div
            className="custom-pagination flex justify-center gap-2 mt-4 
            [&_.swiper-pagination-bullet]:w-3 
            [&_.swiper-pagination-bullet]:h-3 
            [&_.swiper-pagination-bullet]:bg-primary 
            [&_.swiper-pagination-bullet]:opacity-30 
            [&_.swiper-pagination-bullet]:transition-all 
            [&_.swiper-pagination-bullet]:duration-300 
            [&_.swiper-pagination-bullet]:rounded-full
            [&_.swiper-pagination-bullet-active]:opacity-100 
            [&_.swiper-pagination-bullet-active]:w-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
