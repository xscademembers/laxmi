"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // TODO: Replace with your form submission endpoint
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      
      // For now, simulate form submission
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      // Handle error silently in production
      if (process.env.NODE_ENV === 'development') {
        console.error('Form submission error:', error);
      }
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98222 21937 / +91 95032 90443",
      link: "tel:+919822221937",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@thelaxmiengineering.com",
      link: "mailto:info@thelaxmiengineering.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Plot No.1, Dipti Signal Road, Chikhali Layout, Sakharkar Wadi, Nagpur, Maharashtra – 440035, India",
      link: "#",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary-black mb-6">
              Get In <span className="text-primary-red">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-primary-black mb-8">
                Contact Information
              </h2>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-red/10 rounded-full flex items-center justify-center">
                    <info.icon className="text-primary-red" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-black mb-1">
                      {info.title}
                    </h3>
                    {info.link !== "#" ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-primary-red transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-primary-black mb-6">
                  Send us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle
                      className="text-green-500 mx-auto mb-4"
                      size={64}
                    />
                    <h3 className="text-2xl font-semibold text-primary-black mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      Your message has been sent successfully. We'll get back to
                      you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none transition-all"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none transition-all"
                          placeholder="+91 98222 21937"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none transition-all"
                        >
                          <option value="">Select a subject (optional)</option>
                          <option value="product-inquiry">Product Inquiry</option>
                          <option value="quote-request">Quote Request</option>
                          <option value="support">Support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your requirements (optional)..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-red/90 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
