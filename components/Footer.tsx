"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/#products", label: "Products" },
      { href: "/contact", label: "Contact Us" },
    ],
    products: [
      { href: "/#products", label: "Trolleys" },
      { href: "/#products", label: "Water Tankers" },
      { href: "/#products", label: "Storage Tanks" },
      { href: "/#products", label: "Custom Fabrication" },
    ],
  };

  return (
    <footer className="bg-white text-primary-black border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="inline-block mb-4">
                <div className="relative h-20 w-auto">
                  <Image
                    src="https://static.wixstatic.com/media/9356bd_c61ed5934e324ec3b0ef8856e942872f~mv2.png"
                    alt="Laxmi Engineering Equipments"
                    width={280}
                    height={80}
                    className="object-contain h-full w-auto"
                  />
                </div>
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trusted manufacturer of Hydraulic Tractor Trolleys and Water
                Tankers since 1996. ISO 9001:2015 certified.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg font-semibold mb-4 text-primary-black"
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary-red transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-semibold mb-4 text-primary-black"
            >
              Products
            </motion.h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary-red transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg font-semibold mb-4 text-primary-black"
            >
              Contact Us
            </motion.h4>
            <ul className="space-y-3">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-3 text-gray-600 text-sm"
              >
                <MapPin size={18} className="mt-0.5 text-primary-red flex-shrink-0" />
                <span>Plot No.1, Dipti Signal Road, Chikhali Layout, Sakharkar Wadi, Nagpur, Maharashtra – 440035, India</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex items-center gap-3 text-gray-600 text-sm"
              >
                <Phone size={18} className="text-primary-red flex-shrink-0" />
                <a
                  href="tel:+919822221937"
                  className="hover:text-primary-red transition-colors"
                >
                  +91 98222 21937
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.36 }}
                className="flex items-center gap-3 text-gray-600 text-sm"
              >
                <Phone size={18} className="text-primary-red flex-shrink-0" />
                <a
                  href="tel:+919503290443"
                  className="hover:text-primary-red transition-colors"
                >
                  +91 95032 90443
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-3 text-gray-600 text-sm"
              >
                <Mail size={18} className="text-primary-red flex-shrink-0" />
                <a
                  href="mailto:info@thelaxmiengineering.com"
                  className="hover:text-primary-red transition-colors"
                >
                  info@thelaxmiengineering.com
                </a>
              </motion.li>
            </ul>
            <div className="flex gap-4 mt-6">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-primary-red/20 flex items-center justify-center hover:bg-primary-red hover:text-white transition-colors text-primary-red"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>
              © {currentYear} Laxmi Engineering Equipments. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="hover:text-primary-red transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-primary-red transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
