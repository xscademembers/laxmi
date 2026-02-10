"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const productHref = `/products/${product?.slug ?? ""}`.replace(/\/+$/, "") || "/products";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={productHref} prefetch={true}>
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
          {/* Image */}
          <div className="relative overflow-hidden flex items-center justify-center aspect-[4/3] p-4">
            <Image
              src={
                product.image ||
                `https://via.placeholder.com/400x300/DC2626/FFFFFF?text=${encodeURIComponent(
                  product.name
                )}`
              }
              alt={product.name}
              fill
              className="object-contain group-hover:scale-[1.03] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-primary-red/0 group-hover:bg-primary-red/10 transition-colors duration-300" />
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-primary-black mb-2 group-hover:text-primary-red transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
              {product.description}
            </p>
            {product.capacity && (
              <p className="text-primary-red font-semibold text-sm mb-4">
                Capacity: {product.capacity}
              </p>
            )}
            <div className="flex items-center text-primary-red font-medium text-sm group-hover:gap-2 transition-all">
              <span>View Details</span>
              <ArrowRight
                size={16}
                className="ml-1 group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
