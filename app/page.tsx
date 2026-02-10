"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Award, Users, TrendingUp } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import HeroCarousel from "@/components/HeroCarousel";
import ClientsMarquee from "@/components/ClientsMarquee";
import { products } from "@/lib/products";

// Client logo images - Row 1 (20 images, scrolling right)
const clientLogosRow1 = [
  "https://static.wixstatic.com/media/9356bd_05d3b70c73a04087a5e19f4e1bf3f85b~mv2.png",
  "https://static.wixstatic.com/media/9356bd_d193e57ab5a94ad387584e7888e44b61~mv2.png",
  "https://static.wixstatic.com/media/9356bd_9d72b0fb7f0c4d0fa09860e8c627f4bc~mv2.jpg",
  "https://static.wixstatic.com/media/9356bd_62adec8d6a6042158932ffcc9485bc2b~mv2.jpeg",
  "https://static.wixstatic.com/media/9356bd_b66712afa95f43918e31b9a57177c1c0~mv2.png",
  "https://static.wixstatic.com/media/9356bd_3d617fd1a8cb435692cfbee1ae35b271~mv2.jpg",
  "https://static.wixstatic.com/media/9356bd_4d0bddea9d3244e4add657b2a70fde0b~mv2.jpg",
  "https://static.wixstatic.com/media/9356bd_e5ceb0259f66407b8e56fd0320ad2dde~mv2.png",
  "https://static.wixstatic.com/media/9356bd_8907a7ce1a48496a82cf44b83a12a4a3~mv2.jpg",
  "https://static.wixstatic.com/media/9356bd_234cc9cb525c40bb862254b2f449f03c~mv2.png",
  "https://static.wixstatic.com/media/9356bd_272e908ca2484019b7d82a39d768545d~mv2.jpg",
  "https://static.wixstatic.com/media/9356bd_28fce5c50e864e22b83b8723c36faa6c~mv2.png",
  "https://static.wixstatic.com/media/9356bd_b83c85e54c2848859a78b801b83bed17~mv2.jpg",
  "https://static.wixstatic.com/media/9356bd_4b93e392bd05448788a21d05d24542bd~mv2.png",
  "https://static.wixstatic.com/media/9356bd_2dfeb6d27119496d9eb19a7ae4eed325~mv2.png",
  "https://static.wixstatic.com/media/9356bd_3e7c5fde6832417881ad96d16ac02825~mv2.png",
  "https://static.wixstatic.com/media/9356bd_5232f7fcf836469eaf834effdc5f37c3~mv2.jpg",
  "https://static.wixstatic.com/media/9356bd_87d8a97914994e408f556a5102d51ef2~mv2.png",
  "https://static.wixstatic.com/media/9356bd_5a7925e5081340d08383bb463a3a28f4~mv2.jpg",
  "https://static.wixstatic.com/media/9356bd_bb47f88367a24011a1393ffcb9206c65~mv2.png",
];

// Client logo images - Row 2 (19 images, scrolling left)
const clientLogosRow2 = [
  "https://static.wixstatic.com/media/9356bd_19fc98633d2b49e492ea622e502ce645~mv2.jpg",
  "https://static.wixstatic.com/media/9356bd_01e29acae15f424bb21d998106b628c5~mv2.png",
  "https://static.wixstatic.com/media/9356bd_4e7d91a6547c4f00ae78a6ed01e39d39~mv2.jpg",
  "https://static.wixstatic.com/media/9356bd_b14e1f63e13d4d4989a04b35117a6780~mv2.png",
  "https://static.wixstatic.com/media/9356bd_06278d7cdec04284bf941b893ede7fb3~mv2.jpg",
  "https://static.wixstatic.com/media/9356bd_385b16ae2b024c44bc45c2b5ede3669d~mv2.png",
  "https://static.wixstatic.com/media/9356bd_7b42db9f7797486da59705b50fb9a238~mv2.png",
  "https://static.wixstatic.com/media/9356bd_67a81cda669647aba2ff67d239a13c0f~mv2.png",
  "https://static.wixstatic.com/media/9356bd_bb7c9c0007b14c008da896c43480ac07~mv2.png",
  "https://static.wixstatic.com/media/9356bd_0258fda201e34aaf89471d6958b22b62~mv2.png",
  "https://static.wixstatic.com/media/9356bd_f2d3e142a9454cb386c45786d7240e8e~mv2.jpg",
  "https://static.wixstatic.com/media/9356bd_707192de3c7c4df28e851b0da9057642~mv2.png",
  "https://static.wixstatic.com/media/9356bd_08fa6f43b83e499ca6fd0a3ad593d0a3~mv2.png",
  "https://static.wixstatic.com/media/9356bd_5422d955f9fe48b3ba4a1848e7da1199~mv2.jpg",
  "https://static.wixstatic.com/media/9356bd_f0f0bf6d82d24c17b868ce39741abad2~mv2.jpg",
  "https://static.wixstatic.com/media/9356bd_3153f64cfc0343a6b45b931c56a25a41~mv2.jpg",
  "https://static.wixstatic.com/media/9356bd_a650d66883e94954955c4fdc4bd7379d~mv2.png",
  "https://static.wixstatic.com/media/9356bd_bfbfa7001da34ac1ab883fee48d3a1cc~mv2.png",
  "https://static.wixstatic.com/media/9356bd_1a4afb93764b49378daace4a055e80d7~mv2.png",
];

export default function Home() {
  const featuredProducts = products;

  const features = [
    {
      icon: Award,
      title: "ISO 9001:2015 Certified",
      description: "Quality assured manufacturing processes",
    },
    {
      icon: Users,
      title: "25+ Years Experience",
      description: "Trusted since 1996",
    },
    {
      icon: TrendingUp,
      title: "Customer-Centric",
      description: "Competitive pricing & reliable service",
    },
    {
      icon: CheckCircle,
      title: "RTO Approved",
      description: "Certified drawings for all products",
    },
  ];

  return (
    <div>
      {/* Hero Carousel Section */}
      <div className="pt-20 md:pt-24">
        <HeroCarousel />
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Quality, reliability, and customer satisfaction at the core of
              everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-red/10 rounded-full mb-4">
                  <feature.icon className="text-primary-red" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-primary-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Our Products
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive range of agricultural and industrial equipment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <ClientsMarquee row1Images={clientLogosRow1} row2Images={clientLogosRow2} />

      {/* CTA Section */}
      <section className="py-20 bg-primary-red text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today for competitive pricing and expert consultation
              on your equipment needs
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
            >
              Contact Us Now
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
