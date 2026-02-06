"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react";
import { getProductBySlug, products } from "@/lib/products";

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-black mb-4">
            Product Not Found
          </h1>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary-red hover:text-primary-red/80 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700 uppercase tracking-wide">
            <Link
              href="/"
              className="hover:text-primary-red transition-colors"
            >
              HOME
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/products"
              className="hover:text-primary-red transition-colors"
            >
              PRODUCTS
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-primary-black">
              {product.name.toUpperCase()}
            </span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary-red hover:text-primary-red/80 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl bg-gray-100"
            >
              <Image
                src={
                  product.image ||
                  `https://via.placeholder.com/800x600/DC2626/FFFFFF?text=${encodeURIComponent(
                    product.name
                  )}`
                }
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <span className="inline-block bg-primary-red/10 text-primary-red px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {product.category}
                </span>
                <h1 className="text-4xl font-bold text-primary-black mb-4">
                  {product.name}
                </h1>
                {product.capacity && (
                  <p className="text-2xl text-primary-red font-semibold mb-6">
                    Capacity: {product.capacity}
                  </p>
                )}
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Variants */}
              {product.variants && product.variants.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-primary-black mb-4">
                    Available Variants
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.variants.map((variant, index) => (
                      <motion.div
                        key={variant}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                        className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg"
                      >
                        <CheckCircle className="text-primary-red" size={20} />
                        <span className="text-gray-700">{variant}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Use Cases */}
              <div>
                <h3 className="text-xl font-semibold text-primary-black mb-4">
                  Use Cases
                </h3>
                <ul className="space-y-3">
                  {product.useCases.map((useCase, index) => (
                    <motion.li
                      key={useCase}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle
                        className="text-primary-red mt-0.5 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-gray-700">{useCase}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-600 mb-4">
                  Interested in this product? Contact us for pricing and
                  availability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-primary-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-red/90 transition-all duration-300 hover:shadow-lg"
                  >
                    <Mail size={20} />
                    Request Quote
                  </a>
                  <a
                    href="tel:+919822221937"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary-red border-2 border-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-primary-red hover:text-white transition-all duration-300"
                  >
                    <Phone size={20} />
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
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
              Related Products
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                >
                  <Link href={`/products/${relatedProduct.slug}`}>
                    <div className="relative bg-gray-100 overflow-hidden flex items-center justify-center aspect-[4/3]">
                      <Image
                        src={
                          relatedProduct.image ||
                          `https://via.placeholder.com/400x300/DC2626/FFFFFF?text=${encodeURIComponent(
                            relatedProduct.name
                          )}`
                        }
                        alt={relatedProduct.name}
                        fill
                        className="object-contain group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-primary-black mb-2 hover:text-primary-red transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedProduct.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
