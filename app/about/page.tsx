"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Target, Users, TrendingUp } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We maintain the highest standards in manufacturing and quality control.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Customer satisfaction is at the heart of everything we do.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Continuously improving and adapting to meet market needs.",
    },
    {
      icon: Award,
      title: "Reliability",
      description: "Trusted partner for over 25 years in the industry.",
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
              About <span className="text-primary-red">Laxmi Engineering</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Trusted manufacturer of Hydraulic Tractor Trolleys and Water
              Tankers since 1996
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl lg:sticky lg:top-24"
            >
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                alt="Manufacturing Facility"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-primary-black">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Established in 1996, Laxmi Engineering Equipments is a trusted
                  and renowned manufacturer of Hydraulic Tractor Trolleys and
                  Water Tankers in the Vidarbha region. Known for quality and
                  durability, we deliver genuine and reliable products to our
                  customers.
                </p>
                <p>
                  We also manufacture truck-mounted storage tanks including
                  water tanks, acid tanks, and bitumen bulkers. In addition, we
                  fabricate polymer storage tanks, fuel tanks, bitumen tanks
                  with burner mechanisms, FRP lining tanks, and undertake other
                  custom fabrication works.
                </p>
                <p>
                  Under the visionary leadership of our owner Mr. Pitambar Lute, we
                  focus on customer-centric services and competitive pricing,
                  enabling strong growth in the local market with plans to expand
                  across multiple states.
                </p>
                <p>
                  With over 15 years of experience, we contribute to agricultural
                  and industrial growth by delivering innovative solutions tailored
                  to customer requirements.
                </p>
                <p>
                  Our company is ISO 9001:2015 certified and holds trade certificates
                  and RTO-approved drawings for semi-trailers and water tankers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg">
              The principles that guide our operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-red/10 rounded-full mb-4">
                  <value.icon className="text-primary-red" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-primary-black mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-primary-black mb-6">
              Certifications & Approvals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-gray-50 rounded-lg">
                <Award className="text-primary-red mx-auto mb-4" size={48} />
                <h3 className="font-semibold text-lg mb-2">
                  ISO 9001:2015
                </h3>
                <p className="text-gray-600 text-sm">Quality Management System</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <Award className="text-primary-red mx-auto mb-4" size={48} />
                <h3 className="font-semibold text-lg mb-2">
                  RTO Approved
                </h3>
                <p className="text-gray-600 text-sm">
                  Certified drawings for semi-trailers & water tankers
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <Award className="text-primary-red mx-auto mb-4" size={48} />
                <h3 className="font-semibold text-lg mb-2">
                  Trade Certificates
                </h3>
                <p className="text-gray-600 text-sm">Authorized manufacturing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
