"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  heading: string;
  paragraph: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  overlay?: boolean;
}

const slides: Slide[] = [
  {
    id: 1,
    heading: "Quality Agricultural & Industrial Equipment",
    paragraph: "Trusted manufacturer of Hydraulic Tractor Trolleys, Water Tankers, and Storage Tanks. Delivering genuine and reliable products across Vidarbha and beyond.",
    buttonText: "Explore Products",
    buttonLink: "/products",
    // Industrial workshop / fabrication (generic, not a specific product)
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=60&auto=format&fit=crop",
  },
  {
    id: 2,
    heading: "Premium Water Tankers & Storage Solutions",
    paragraph: "From 2-wheel to truck-mounted water tankers, we manufacture high-quality storage solutions for agricultural and industrial applications. ISO 9001:2015 certified.",
    buttonText: "View Products",
    buttonLink: "/products",
    // Tanks / industrial equipment
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=60&auto=format&fit=crop",
  },
  {
    id: 3,
    heading: "Durable Tractor Trolleys for Every Need",
    paragraph: "Our range includes 2-wheel, 4-wheel, and mini tractor trolleys designed for maximum durability and performance. Built to last in demanding agricultural environments.",
    buttonText: "Learn More",
    buttonLink: "/products",
    // Agriculture / field machinery
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=60&auto=format&fit=crop",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Safety: handle hot reload or unexpected indexes
  const totalSlides = slides.length;
  const safeIndex =
    totalSlides > 0 ? ((currentSlide % totalSlides) + totalSlides) % totalSlides : 0;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={safeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={slides[safeIndex].image}
              alt={slides[safeIndex].heading}
              fill
              className="object-cover"
              priority={safeIndex === 0}
              sizes="100vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container mx-auto px-4 py-10 md:py-16 relative z-10 h-full flex items-center">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="text-white space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <span className="bg-primary-red/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                  Since 1996
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {slides[currentSlide].heading}
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                {slides[currentSlide].paragraph}
              </p>

              <div className="pt-4">
                <Link
                  href={slides[currentSlide].buttonLink}
                  className="inline-flex items-center gap-2 bg-primary-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-red/90 transition-all duration-300 hover:shadow-lg hover:scale-105 text-lg"
                >
                  {slides[currentSlide].buttonText}
                  <ArrowRight size={24} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary-red w-8"
                : "bg-white/50 w-2 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows - Bottom Right */}
      <div className="absolute bottom-8 right-4 md:right-8 z-20 flex gap-2">
        <button
          onClick={goToPrevious}
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Bar */}
      {isAutoPlaying && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-primary-red z-20"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentSlide}
        />
      )}
    </section>
  );
}
