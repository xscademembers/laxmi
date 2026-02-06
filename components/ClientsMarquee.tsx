"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MarqueeRowProps {
  images: string[];
  direction: "left" | "right";
  speed?: number;
}

const MarqueeRow = ({ images, direction, speed = 30 }: MarqueeRowProps) => {
  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];
  
  return (
    <div className="relative overflow-hidden w-full py-4">
      <div
        className={`flex gap-8 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-3 flex items-center justify-center"
          >
            <Image
              src={src}
              alt={`Client logo ${(index % images.length) + 1}`}
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface ClientsMarqueeProps {
  row1Images: string[];
  row2Images: string[];
}

export default function ClientsMarquee({ row1Images, row2Images }: ClientsMarqueeProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary-black mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We are proud to partner with some of the most respected names in agriculture, 
            manufacturing, and beyond. Our commitment to quality has earned the trust of 
            businesses across India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Row 1 - Scrolling Right */}
          <MarqueeRow images={row1Images} direction="right" speed={40} />
          
          {/* Row 2 - Scrolling Left */}
          <MarqueeRow images={row2Images} direction="left" speed={35} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Join 100+ satisfied clients who trust Laxmi Engineering for their equipment needs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
