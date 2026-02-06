export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  variants?: string[];
  capacity?: string;
  useCases: string[];
  category: string;
  image?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "2-Wheel Trolley",
    slug: "2-wheel-trolley",
    description: "Durable and efficient 2-wheel hydraulic tractor trolley designed for agricultural transportation. Built with high-quality materials for long-lasting performance.",
    variants: ["Standard Model", "Heavy Duty Model"],
    capacity: "3-5 Tons",
    useCases: [
      "Crop transportation",
      "Farm equipment hauling",
      "Agricultural material transport",
      "General farm logistics"
    ],
    category: "Trolleys",
    image: "https://static.wixstatic.com/media/9356bd_db47c064c99b4efdb0a13939e729f3da~mv2.png/v1/fill/w_870,h_759,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/WOR_8294.png",
  },
  {
    id: "2",
    name: "2-Wheel Water Tanker",
    slug: "2-wheel-water-tanker",
    description: "Compact 2-wheel water tanker perfect for small to medium farms. Ideal for irrigation, livestock watering, and agricultural water supply.",
    variants: ["Standard Model", "Premium Model"],
    capacity: "2000-3000 Liters",
    useCases: [
      "Farm irrigation",
      "Livestock watering",
      "Crop spraying",
      "Water supply for agricultural operations"
    ],
    category: "Water Tankers",
    image: "https://static.wixstatic.com/media/9356bd_a792adf1c62c4e03ae8a860bd8cefeb7~mv2.png/v1/fill/w_870,h_759,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_4666(1)_HEIC.png",
  },
  {
    id: "3",
    name: "4-Wheel Trolley",
    slug: "4-wheel-trolley",
    description: "Robust 4-wheel hydraulic tractor trolley with enhanced stability and load capacity. Perfect for heavy-duty agricultural and industrial applications.",
    variants: ["Standard Model", "Heavy Duty Model"],
    capacity: "5-8 Tons",
    useCases: [
      "Heavy load transportation",
      "Industrial material hauling",
      "Large-scale farm operations",
      "Construction material transport"
    ],
    category: "Trolleys",
    image: "https://static.wixstatic.com/media/9356bd_3306a963d1e745a596e72a50a191e798~mv2.png/v1/fill/w_870,h_759,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1154_HEIC.png",
  },
  {
    id: "4",
    name: "4-Wheel Water Tanker (With Pump)",
    slug: "4-wheel-water-tanker-pump",
    description: "Advanced 4-wheel water tanker equipped with integrated pump system. Designed for efficient water distribution and irrigation operations.",
    variants: ["Standard Model", "Premium Model with High-Pressure Pump"],
    capacity: "4000-6000 Liters",
    useCases: [
      "Large-scale irrigation",
      "Fire fighting operations",
      "Industrial water supply",
      "Municipal water distribution"
    ],
    category: "Water Tankers",
    image: "https://static.wixstatic.com/media/9356bd_500c4d2a4b474463ab8f60c1e8231f9f~mv2.png/v1/fill/w_870,h_759,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_9202_HEIC.png",
  },
  {
    id: "5",
    name: "Mini Tractor Trolley",
    slug: "mini-tractor-trolley",
    description: "Compact and versatile mini tractor trolley designed for small farms and narrow spaces. Lightweight yet durable construction.",
    capacity: "1-2 Tons",
    useCases: [
      "Small farm operations",
      "Orchard and vineyard work",
      "Nursery transportation",
      "Light agricultural hauling"
    ],
    category: "Trolleys",
    image: "https://static.wixstatic.com/media/9356bd_da7fe411afad421f92d3ab3578877ec8~mv2.jpg/v1/fill/w_826,h_720,al_c,q_85,enc_avif,quality_auto/5e4cfede-1f45-4c15-a9b9-f8d1ae1d2afb.jpg",
  },
  {
    id: "6",
    name: "Trailer Only Platform",
    slug: "trailer-platform",
    description: "Versatile flatbed trailer platform available in multiple lengths. Perfect for transporting various agricultural and industrial goods.",
    variants: ["14 Ft", "16 Ft", "18 Ft", "20 Ft", "22 Ft", "24 Ft"],
    capacity: "8-15 Tons",
    useCases: [
      "General cargo transport",
      "Machinery transportation",
      "Construction material hauling",
      "Agricultural equipment transport"
    ],
    category: "Trailers",
    image: "https://static.wixstatic.com/media/9356bd_9ae10e617ff249768bbfb0fe337b6361~mv2.png/v1/fill/w_870,h_759,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1077_HEIC.png",
  },
  {
    id: "7",
    name: "Truck Mounted Water Tanker",
    slug: "truck-mounted-water-tanker",
    description: "Heavy-duty truck-mounted water tanker for large-scale water transportation. Built to handle high volumes and long-distance operations.",
    variants: ["6KL", "10KL", "15KL", "20KL", "25KL", "30KL"],
    capacity: "6,000 - 30,000 Liters",
    useCases: [
      "Municipal water supply",
      "Industrial water transport",
      "Construction site water supply",
      "Emergency water distribution"
    ],
    category: "Water Tankers",
    image: "https://static.wixstatic.com/media/9356bd_ec29e875020a4de785cfab5bccb94d9c~mv2.png/v1/fill/w_870,h_829,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1641_HEIC.png",
  },
  {
    id: "8",
    name: "M.S. Storage Tanks",
    slug: "ms-storage-tanks",
    description: "High-quality mild steel storage tanks for various industrial and agricultural applications. Customizable sizes to meet specific requirements.",
    variants: ["5KL", "10KL", "15KL", "20KL", "25KL", "30KL", "40KL", "50KL"],
    capacity: "5,000 - 50,000 Liters",
    useCases: [
      "Water storage",
      "Chemical storage",
      "Agricultural liquid storage",
      "Industrial material storage"
    ],
    category: "Storage Tanks",
    image: "https://static.wixstatic.com/media/9356bd_28cf5bb4ee894f2a91b33b80bbeabf99~mv2.jpg/v1/fill/w_660,h_576,al_c,q_85,enc_avif,quality_auto/6df4ce88-730b-46bf-bd92-fdb82d0a648b.jpg",
  },
  {
    id: "9",
    name: "Bitumen Storage Tank with Burner",
    slug: "bitumen-storage-tank-burner",
    description: "Specialized bitumen storage tank with integrated burner system for maintaining optimal temperature. Designed for road construction and industrial applications.",
    variants: ["10KL", "15KL", "20KL", "25KL", "30KL", "35KL"],
    capacity: "10,000 - 35,000 Liters",
    useCases: [
      "Road construction",
      "Asphalt production",
      "Industrial bitumen storage",
      "Infrastructure projects"
    ],
    category: "Storage Tanks",
    image: "https://static.wixstatic.com/media/9356bd_77b3294aa0154cf3ba979215cf4023fd~mv2.png/v1/fill/w_870,h_759,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_2530_HEIC.png",
  },
  {
    id: "10",
    name: "Polymer Storage Tank",
    slug: "polymer-storage-tank",
    description: "Durable polymer storage tanks resistant to corrosion and chemicals. Ideal for storing various liquids in agricultural and industrial settings.",
    variants: ["5KL", "10KL", "15KL", "20KL", "25KL", "30KL", "40KL", "50KL"],
    capacity: "5,000 - 50,000 Liters",
    useCases: [
      "Chemical storage",
      "Water storage",
      "Agricultural liquid storage",
      "Industrial material storage"
    ],
    category: "Storage Tanks",
    image: "https://static.wixstatic.com/media/9356bd_aea778cc22104b58adf37068e2c546be~mv2.jpg/v1/fill/w_870,h_759,al_c,q_85,enc_avif,quality_auto/64B18DFC-9D41-43DD-8952-6F28C125FADB.jpg",
  },
  {
    id: "11",
    name: "M.S. Casing",
    slug: "ms-casing",
    description: "Precision-engineered mild steel casing available in various thicknesses. Used for structural applications and protective enclosures.",
    variants: ["3mm", "5mm", "8mm", "10mm", "12mm", "15mm", "20mm", "25mm", "30mm"],
    capacity: "Custom sizes available",
    useCases: [
      "Structural applications",
      "Protective enclosures",
      "Industrial fabrication",
      "Custom engineering projects"
    ],
    category: "Fabrication",
    image: "https://static.wixstatic.com/media/9356bd_50fe52b8b8384173a8b0c02dc0d3c390~mv2.png/v1/fill/w_564,h_492,al_c,lg_1,q_85,enc_avif,quality_auto/casing1.png",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}
