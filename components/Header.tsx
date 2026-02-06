"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact Us" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-primary-red text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a
                href="tel:+919822221937"
                className="flex items-center gap-2 hover:text-gray-200 transition-colors"
              >
                <Phone size={16} />
                <span>+91 98222 21937</span>
              </a>
              <a
                href="mailto:info@thelaxmiengineering.com"
                className="flex items-center gap-2 hover:text-gray-200 transition-colors"
              >
                <Mail size={16} />
                <span>info@thelaxmiengineering.com</span>
              </a>
            </div>
            <div className="text-xs">
              ISO 9001:2015 Certified
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-16 w-auto"
            >
              <Image
                src="https://static.wixstatic.com/media/9356bd_c61ed5934e324ec3b0ef8856e942872f~mv2.png"
                alt="Laxmi Engineering Equipments"
                width={220}
                height={64}
                className="object-contain h-full w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-primary-red"
                    : "text-primary-black hover:text-primary-red"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-red"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 font-medium ${
                      isActive(link.href)
                        ? "text-primary-red"
                        : "text-primary-black"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <a
                  href="tel:+919822221937"
                  className="flex items-center gap-2 text-sm text-primary-black"
                >
                  <Phone size={16} />
                  <span>+91 98222 21937</span>
                </a>
                <a
                  href="tel:+919503290443"
                  className="flex items-center gap-2 text-sm text-primary-black"
                >
                  <Phone size={16} />
                  <span>+91 95032 90443</span>
                </a>
                <a
                  href="mailto:info@thelaxmiengineering.com"
                  className="flex items-center gap-2 text-sm text-primary-black"
                >
                  <Mail size={16} />
                  <span>info@thelaxmiengineering.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
