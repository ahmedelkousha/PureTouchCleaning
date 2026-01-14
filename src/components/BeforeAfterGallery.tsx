import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeftRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import livingRoomBefore from "@/assets/living-room-before.png";
import livingRoomAfter from "@/assets/living-room-after.png";
import kitchenBefore from "@/assets/kitchen-before.png";
import kitchenAfter from "@/assets/kitchen-after.png";

interface BeforeAfterItem {
  id: number;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
}

const galleryItems: BeforeAfterItem[] = [
  {
    id: 1,
    title: "Kitchen Deep Clean",
    category: "Deep Cleaning",
    beforeImage: kitchenBefore,
    afterImage: kitchenAfter,
  },
  {
    id: 2,
    title: "Living Room Transformation",
    category: "Home Cleaning",
    beforeImage: livingRoomBefore,
    afterImage: livingRoomAfter,
  },
  {
    id: 3,
    title: "Bathroom Refresh",
    category: "Deep Cleaning",
    beforeImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Office Space",
    category: "Commercial",
    beforeImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
  },
];

const BeforeAfterCard = ({ item }: { item: BeforeAfterItem }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div
        className="relative h-64 md:h-80 rounded-2xl overflow-hidden cursor-ew-resize shadow-lg border border-border"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleMove}
      >
        {/* After Image (Background) */}
        <img
          src={item.afterImage}
          alt={`${item.title} - After`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={item.beforeImage}
            alt={`${item.title} - Before`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
            <ArrowLeftRight className="text-primary" size={20} />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-foreground/80 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
          After
        </div>
      </div>

      {/* Card Info */}
      <div className="mt-4">
        <span className="text-primary text-sm font-medium">{item.category}</span>
        <h3 className="font-display font-semibold text-lg text-foreground">{item.title}</h3>
      </div>
    </motion.div>
  );
};

const BeforeAfterGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsToShow = 2;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % Math.ceil(galleryItems.length / itemsToShow));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + Math.ceil(galleryItems.length / itemsToShow)) % Math.ceil(galleryItems.length / itemsToShow));
  };

  return (
    <section className="py-20 bg-muted/30" id="gallery">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
            Our Results
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            See the <span className="text-primary">Transformation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Drag the slider to see the dramatic before & after results of our professional cleaning services.
          </p>
        </motion.div>

        {/* Mobile: Single column with all items */}
        <div className="md:hidden space-y-8">
          {galleryItems.map((item) => (
            <BeforeAfterCard key={item.id} item={item} />
          ))}
        </div>

        {/* Desktop: Carousel */}
        <div className="hidden md:block relative">
          <div className="grid md:grid-cols-2 gap-8">
            {galleryItems
              .slice(activeIndex * itemsToShow, activeIndex * itemsToShow + itemsToShow)
              .map((item) => (
                <BeforeAfterCard key={item.id} item={item} />
              ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(galleryItems.length / itemsToShow) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === activeIndex ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-card rounded-full px-6 py-3 border border-border">
            <Sparkles className="text-accent" size={20} />
            <span className="text-foreground font-medium">1000+ Spaces Cleaned & Counting</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
