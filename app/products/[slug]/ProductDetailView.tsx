"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react";
import { getProductBySlug, products } from "@/lib/products";

type SpecRow = {
  label: string;
  values: string[];
};

type SpecTable = {
  columns: string[];
  rows: SpecRow[];
};

const specTables: Record<string, SpecTable> = {
  "2-wheel-trolley": {
    columns: ["Description", "LEE2W10FT", "LEE2W12FT"],
    rows: [
      {
        label: "Dimensions (mm/Ft.)",
        values: [
          "3048 × 1828 × 609 (10’ × 6’ × 2’)",
          "3658 × 1828 × 609 (12’ × 6’ × 2’)",
        ],
      },
      { label: "Chassis", values: ["200×75 ISMC", "200×75 ISMC"] },
      {
        label: "Flooring Sheet",
        values: ["3.5mm (TATA Prima)", "3.5mm (TATA Prima)"],
      },
      { label: "Side Panel Sheet", values: ["2.5mm", "2.5mm"] },
      { label: "Axle", values: ["75mm Sq. Bar", "75mm Sq. Bar"] },
      { label: "Spring Leaf", values: ['36"', '42"'] },
      {
        label: "Tyre",
        values: ["9.00 × 20 / 10.00 × 20", "9.00 × 20 / 10.00 × 20"],
      },
      { label: "Hydraulic Jack", values: ["10MT", "15MT"] },
      { label: "Weight", values: ["1460Kg", "1600Kg"] },
    ],
  },
  "2-wheel-water-tanker": {
    columns: ["Description", "LEE2W4KL", "LEE2W5KL"],
    rows: [
      { label: "Capacity", values: ["4000Ltr.", "5000Ltr."] },
      {
        label: "Dimensions (mm/Ft.)",
        values: [
          "4050 × 1700 × 2200 (13’ × 5’5” × 7’)",
          "4050 × 1828 × 2400 (13’ × 6’ × 8’)",
        ],
      },
      { label: "Chassis", values: ["200×75 ISMC", "200×75 ISMC"] },
      { label: "Shell1 Sheet", values: ["3.15mm (TATA)", "3.15mm (TATA)"] },
      { label: "Axle", values: ["75mm Sq. Bar", "75mm Sq. Bar"] },
      { label: "Spring Leaf", values: ['36"', '36"'] },
      {
        label: "Tyre",
        values: ["9.00 × 20 / 10.00 × 20", "9.00 × 20 / 10.00 × 20"],
      },
      { label: "Weight", values: ["1200Kg", "1300Kg"] },
      {
        label: "Outlet",
        values: ["80mm C.I. Ball Valve", "80mm C.I. Ball Valve"],
      },
      { label: "Manhole", values: ["430mm × 2 No’s", "430mm × 2 No’s"] },
    ],
  },
  "4-wheel-trolley": {
    columns: ["Description", "LEE4W10FT", "LEE4W12FT"],
    rows: [
      {
        label: "Dimensions (mm/Ft.)",
        values: [
          "3048 × 1828 × 609 (10’ × 6’ × 2’)",
          "3658 × 1828 × 609 (12’ × 6’ × 2’)",
        ],
      },
      { label: "Main Chassis", values: ["200×75 ISMC", "200×75 ISMC"] },
      { label: "Sub Chassis", values: ["100×50 ISMC", "100×50 ISMC"] },
      {
        label: "Flooring Sheet",
        values: ["3.5mm (TATA Prima)", "3.5mm (TATA Prima)"],
      },
      { label: "Side Panel Sheet", values: ["2.5mm", "2.5mm"] },
      { label: "Axle", values: ["65mm Sq. Bar", "65mm Sq. Bar"] },
      { label: "Spring Leaf", values: ['32"', '32"'] },
      { label: "Tyre", values: ["7.50 × 16", "7.50 × 16"] },
      { label: "Hydraulic Jack", values: ["10MT", "15MT"] },
      { label: "Weight", values: ["1500Kg", "1600Kg"] },
    ],
  },
  "4-wheel-water-tanker-pump": {
    columns: ["Description", "LEE4W4KL", "LEE4W5KL"],
    rows: [
      { label: "Capacity", values: ["4000Ltr.", "5000Ltr."] },
      {
        label: "Dimensions (mm/Ft.)",
        values: [
          "4050 × 1700 × 2200 (13’ × 5’5” × 7’)",
          "4050 × 1828 × 2400 (13’ × 6’ × 8’)",
        ],
      },
      { label: "Main Chassis", values: ["150×75 ISMC", "150×75 ISMC"] },
      { label: "Sub Chassis", values: ["100×50 ISMC", "100×50 ISMC"] },
      { label: "Shell1 Sheet", values: ["3.15mm (TATA)", "3.15mm (TATA)"] },
      { label: "Axle", values: ["65mm Sq. Bar", "65mm Sq. Bar"] },
      { label: "Spring Leaf", values: ['32"', '32"'] },
      { label: "Tyre", values: ["7.50×16", "7.50×16"] },
      { label: "Weight", values: ["1300Kg", "1400Kg"] },
      {
        label: "Outlet",
        values: ["80mm C.I. Ball Valve", "80mm C.I. Ball Valve"],
      },
      { label: "Manhole", values: ["430mm × 2 No’s", "430mm × 2 No’s"] },
    ],
  },
  "mini-tractor-trolley": {
    columns: ["Description", "LEE8M4", "LEE8M5"],
    rows: [
      {
        label: "Dimensions (mm/Ft.)",
        values: [
          "2500 × 1250 × 457 (8’ × 4’ × 1’6”)",
          "2500 × 1500 × 457 (8’ × 5’ × 1’6”)",
        ],
      },
      { label: "Chassis", values: ["100×50 ISMC", "100×50 ISMC"] },
      {
        label: "Flooring Sheet",
        values: ["2.5mm (TATA Prima)", "2.5mm (TATA Prima)"],
      },
      { label: "Side Panel Sheet", values: ["1.6mm", "1.6mm"] },
      { label: "Axle", values: ["50mm Sq. Bar", "50mm Sq. Bar"] },
      { label: "Tyre", values: ["6.00×16", "6.00×16"] },
      { label: "Hydraulic Jack", values: ["3MT/5MT", "3MT/5MT"] },
      { label: "Weight", values: ["400Kg", "465Kg"] },
    ],
  },
  "trailer-platform": {
    columns: ["Description", "Specifications"],
    rows: [
      { label: "Dimensions (Ft.)", values: ["14ft. – 24ft."] },
      {
        label: "Chassis",
        values: ["100×50 ISMC / 150×75 ISMC"],
      },
      { label: "Axle", values: ["60mm Sq. Bar"] },
      { label: "Tyre", values: ["6.00×16 / 7.50×16"] },
      { label: "Weight", values: ["400Kg"] },
    ],
  },
  "truck-mounted-water-tanker": {
    columns: ["Description", "LEE6KL", "LEE8KL", "LEE12KL", "LEE18KL", "LEE24KL"],
    rows: [
      {
        label: "Capacity",
        values: [
          "6000Ltr.",
          "8000Ltr.",
          "12000Ltr.",
          "18000Ltr.",
          "24000Ltr.",
        ],
      },
      {
        label: "Dimensions (Ft.)",
        values: [
          "13’ × 5’5” × 7’",
          "13’ × 6’ × 8’",
          "13’ × 6’ × 8’",
          "13’ × 6’ × 8’",
          "13’ × 6’ × 8’",
        ],
      },
      {
        label: "Shell1 Sheet",
        values: [
          "3.15mm (TATA)",
          "3.15mm (TATA)",
          "3.15mm (TATA)",
          "3.15mm (TATA)",
          "3.15mm (TATA)",
        ],
      },
      {
        label: "Weight",
        values: ["1300Kg", "1400Kg", "—", "—", "—"],
      },
      {
        label: "Outlet",
        values: [
          "80mm C.I. Ball Valve",
          "80mm C.I. Ball Valve",
          "80mm C.I. Ball Valve",
          "80mm C.I. Ball Valve",
          "80mm C.I. Ball Valve",
        ],
      },
      {
        label: "Manhole",
        values: [
          "430mm × 2 No’s",
          "430mm × 2 No’s",
          "430mm × 2 No’s",
          "430mm × 2 No’s",
          "430mm × 2 No’s",
        ],
      },
      {
        label: "Compartments",
        values: ["3", "4", "4", "4", "5"],
      },
    ],
  },
  "ms-storage-tanks": {
    columns: ["Description", "Specifications"],
    rows: [
      { label: "Capacity", values: ["10KL to 30KL"] },
      { label: "Tank Orientation", values: ["Cylindrical / Cuboidal"] },
      { label: "Diameter / Width", values: ["1250mm to 3300mm"] },
      { label: "Length / Height", values: ["3000mm to 9000mm"] },
      { label: "Shell Thickness", values: ["3mm to 6mm"] },
      { label: "Dish End Thickness", values: ["5mm to 8mm"] },
    ],
  },
  "bitumen-storage-tank-burner": {
    columns: ["Description", "Specifications"],
    rows: [
      { label: "Capacity", values: ["10KL to 30KL"] },
      { label: "Tank Orientation", values: ["U-shape / Round-shape"] },
      { label: "Diameter / Width", values: ["2000mm to 3300mm"] },
      { label: "Length / Height", values: ["3000mm to 9000mm"] },
      { label: "Shell Thickness", values: ["5mm / 6mm"] },
      { label: "Dish End Thickness", values: ["5mm to 8mm"] },
      { label: "Manhole", values: ["300×500 × 2 No’s"] },
      {
        label: "Insulation",
        values: ["50mm LRB Sheet (with GI covering)"],
      },
      { label: "Fire Pipeline", values: ["250 × 6mm thickness"] },
      {
        label: "Blower",
        values: ["3HP 3Phase, 800RPM (Crompton Motor)"],
      },
      { label: "Burner", values: ["LAP-1, LAP-2"] },
      { label: "Drain Valve", values: ["100mm"] },
    ],
  },
  "ms-casing": {
    columns: ["Description", "Specifications"],
    rows: [
      { label: "Diameter", values: ["750mm to 2500mm"] },
      { label: "Length", values: ["3000mm to 9000mm"] },
      { label: "Casing Thickness", values: ["3mm to 20mm"] },
      { label: "Collar Thickness", values: ["10mm to 30mm"] },
    ],
  },
};

interface ProductDetailViewProps {
  slug: string;
}

export default function ProductDetailView({ slug }: ProductDetailViewProps) {
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

          <div className="flex flex-col gap-10 lg:gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-4xl mx-auto aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-gray-100"
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
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
                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Specifications table (from provided images) */}
              {specTables[product.slug] && (
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-primary-black mb-4">
                    Technical Specifications
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200 text-sm md:text-base">
                      <thead className="bg-gray-100">
                        <tr>
                          {specTables[product.slug].columns.map((col) => (
                            <th
                              key={col}
                              scope="col"
                              className="px-4 py-3 text-left font-semibold text-primary-black border-b border-gray-200"
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {specTables[product.slug].rows.map((row) => (
                          <tr
                            key={row.label}
                            className="odd:bg-white even:bg-gray-50 align-middle"
                          >
                            <th
                              scope="row"
                              className="px-4 py-3 font-medium text-primary-black text-left border-t border-gray-200 align-middle"
                            >
                              {row.label}
                            </th>
                            {row.values.map((value, idx) => (
                              <td
                                key={idx}
                                className="px-4 py-3 text-gray-700 text-left border-t border-gray-200 align-middle"
                              >
                                {value || "—"}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Fallback (for products without a specs image, e.g. Polymer Storage Tank) */}
              {!specTables[product.slug] && (
                <>
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
                            transition={{
                              duration: 0.3,
                              delay: 0.3 + index * 0.05,
                            }}
                            className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg"
                          >
                            <CheckCircle
                              className="text-primary-red"
                              size={20}
                            />
                            <span className="text-gray-700">{variant}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

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
                          transition={{
                            duration: 0.3,
                            delay: 0.4 + index * 0.05,
                          }}
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
                </>
              )}

              {/* CTA */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-600 mb-4">
                  Interested in this product? Contact us for pricing and
                  availability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-primary-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-red/90 transition-all duration-300 hover:shadow-lg"
                  >
                    <Mail size={20} />
                    Request Quote
                  </Link>
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
