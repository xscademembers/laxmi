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
  /**
   * Optional gallery of additional product images.
   * The first image should generally be the main image.
   */
  galleryImages?: string[];
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
    image: "https://static.wixstatic.com/media/9356bd_db47c064c99b4efdb0a13939e729f3da~mv2.png",
    galleryImages: [
      "https://static.wixstatic.com/media/9356bd_db47c064c99b4efdb0a13939e729f3da~mv2.png",
      "https://static.wixstatic.com/media/9356bd_b15bbb2f79cc4913b958eaa752c76907~mv2.png",
      "https://static.wixstatic.com/media/9356bd_01b4e42ce37c45c9935e2714fcff4769~mv2.png",
      "https://static.wixstatic.com/media/9356bd_f4d87054f1be4ce19e930172970e7a96~mv2.png",
      "https://static.wixstatic.com/media/9356bd_5c485abda2074ff383fcc8b85a56c02b~mv2.png",
      "https://static.wixstatic.com/media/9356bd_3197746fed0348cc9ce7bd7b4f5cff16~mv2.png",
      "https://static.wixstatic.com/media/9356bd_02d5e3f307a546889008642383fbfd07~mv2.png",
    ],
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
    image: "https://static.wixstatic.com/media/9356bd_426f36cf68b843e88ec1ebc9801b7f53~mv2.png",
    galleryImages: [
      "https://static.wixstatic.com/media/9356bd_426f36cf68b843e88ec1ebc9801b7f53~mv2.png",
      "https://static.wixstatic.com/media/9356bd_8a1fc91d015140ea93b25544a0863044~mv2.png",
      "https://static.wixstatic.com/media/9356bd_fe42658cb2524ccbb4ce86aa4ecc659f~mv2.jpg",
      "https://static.wixstatic.com/media/9356bd_f86dbd3b2d80416c8f9bdcf968f8f72a~mv2.jpg",
      "https://static.wixstatic.com/media/9356bd_78fda198f9df4f029298840c264896b3~mv2.jpg",
      "https://static.wixstatic.com/media/9356bd_3f929c41af5e4953b365d64407969965~mv2.jpg",
    ],
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
    image: "https://static.wixstatic.com/media/9356bd_3306a963d1e745a596e72a50a191e798~mv2.png",
    galleryImages: [
      "https://static.wixstatic.com/media/9356bd_3306a963d1e745a596e72a50a191e798~mv2.png",
      "https://static.wixstatic.com/media/9356bd_f46f863fbdd6467aa2255977d20ed7f1~mv2.png",
      "https://static.wixstatic.com/media/9356bd_1c5ac97a93c244ab896f09ce59b08b64~mv2.png",
      "https://static.wixstatic.com/media/9356bd_011007b69edf46b0bae66b165b0ea41~mv2.png",
      "https://static.wixstatic.com/media/9356bd_1ce9ce71ccb449e696d6468c4f90bd1c~mv2.png",
      "https://static.wixstatic.com/media/9356bd_992570e1de444768bf9a28141ab5d424~mv2.png",
    ],
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
    image: "https://static.wixstatic.com/media/9356bd_500c4d2a4b474463ab8f60c1e8231f9f~mv2.png",
    galleryImages: [
      "https://static.wixstatic.com/media/9356bd_500c4d2a4b474463ab8f60c1e8231f9f~mv2.png",
      "https://static.wixstatic.com/media/9356bd_886f7e7292854ddf92db2bf04afe7db5~mv2.png",
      "https://static.wixstatic.com/media/9356bd_4dbe036702b6404889e0f6a63c64171b~mv2.png",
      "https://static.wixstatic.com/media/9356bd_2a68d7be3a7e49d3837dc9185781bffb~mv2.png",
    ],
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
    image: "https://static.wixstatic.com/media/9356bd_da7fe411afad421f92d3ab3578877ec8~mv2.jpg",
    galleryImages: [
      "https://static.wixstatic.com/media/9356bd_da7fe411afad421f92d3ab3578877ec8~mv2.jpg",
      "https://static.wixstatic.com/media/9356bd_96967c817cf84114b7e4943b1b8ea053~mv2.png",
      "https://static.wixstatic.com/media/9356bd_245d02f690374478b85926cba497b402~mv2.jpg",
      "https://static.wixstatic.com/media/9356bd_b445fed2c9af498f9c761b5a5b4ce595~mv2.jpg",
    ],
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
    image: "https://static.wixstatic.com/media/9356bd_9ae10e617ff249768bbfb0fe337b6361~mv2.png",
    galleryImages: [
      "https://static.wixstatic.com/media/9356bd_9ae10e617ff249768bbfb0fe337b6361~mv2.png",
      "https://static.wixstatic.com/media/9356bd_ea9b6fe768864dc09e59ac0ae66c2263~mv2.png",
      "https://static.wixstatic.com/media/9356bd_9c9f47f0c62845b5aeed7c11bb3772ef~mv2.png",
      "https://static.wixstatic.com/media/9356bd_78c36751660045a9a8020d7af61918b4~mv2.png",
    ],
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
    image: "https://static.wixstatic.com/media/9356bd_ec29e875020a4de785cfab5bccb94d9c~mv2.png",
    galleryImages: [
      "https://static.wixstatic.com/media/9356bd_ec29e875020a4de785cfab5bccb94d9c~mv2.png",
      "https://static.wixstatic.com/media/9356bd_0344110779e9470f8d85be2904ed9aed~mv2.png",
      "https://static.wixstatic.com/media/9356bd_b7d1629478a84ae19a58510148a44f31~mv2.png",
      "https://static.wixstatic.com/media/9356bd_3aa7b37beeb142d490edd44c97e48e65~mv2.png",
      "https://static.wixstatic.com/media/9356bd_ff95da1455f5475d854dfba8676960c8~mv2.jpg",
    ],
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
    image: "https://static.wixstatic.com/media/9356bd_28cf5bb4ee894f2a91b33b80bbeabf99~mv2.jpg",
    galleryImages: [
      "https://static.wixstatic.com/media/9356bd_28cf5bb4ee894f2a91b33b80bbeabf99~mv2.jpg",
      "https://static.wixstatic.com/media/9356bd_7d04483f10d24e829aa536aea50202a9~mv2.jpg",
      "https://static.wixstatic.com/media/9356bd_a12e319abfe64508a238fbdf589147df~mv2.png",
      "https://static.wixstatic.com/media/9356bd_0eedbac61cc2431b8bb6e4e105a579a7~mv2.jpg",
      "https://static.wixstatic.com/media/9356bd_b5ce2e30dcc74b22a1655bea327396bf~mv2.jpg",
      "https://static.wixstatic.com/media/9356bd_70ca8b1e2b064c00a237666ce03fe99f~mv2.jpg",
    ],
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
    image: "https://static.wixstatic.com/media/9356bd_77b3294aa0154cf3ba979215cf4023fd~mv2.png",
    galleryImages: [
      "https://static.wixstatic.com/media/9356bd_77b3294aa0154cf3ba979215cf4023fd~mv2.png",
      "https://static.wixstatic.com/media/9356bd_df387ba5be4543dd8ac427aa00cb1f24~mv2.png",
      "https://static.wixstatic.com/media/9356bd_c94d338eebfb4a9ea10af81635ed6211~mv2.png",
      "https://static.wixstatic.com/media/9356bd_d92b2bb597cd40c394a8bb2a44cdefaf~mv2.png",
    ],
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
    image: "https://static.wixstatic.com/media/9356bd_aea778cc22104b58adf37068e2c546be~mv2.jpg",
    galleryImages: [
      "https://static.wixstatic.com/media/9356bd_aea778cc22104b58adf37068e2c546be~mv2.jpg",
      "https://static.wixstatic.com/media/9356bd_53b929d1bf5242419cebf6c7c71b0a6b~mv2.jpg",
      "https://static.wixstatic.com/media/9356bd_8ffefbdacd0f49528bb4984be34dcd19~mv2.jpg",
      "https://static.wixstatic.com/media/9356bd_f2c94ce253124eb5a4b33c58ec7c0fad~mv2.jpg",
    ],
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
    image: "https://static.wixstatic.com/media/9356bd_50fe52b8b8384173a8b0c02dc0d3c390~mv2.png",
    galleryImages: [
      "https://static.wixstatic.com/media/9356bd_50fe52b8b8384173a8b0c02dc0d3c390~mv2.png",
      "https://static.wixstatic.com/media/9356bd_1489759391dc4a23877f2dc32b12a23c~mv2.png",
      "https://static.wixstatic.com/media/9356bd_3b9c82187ba44db9b8abcb80c80ad28b~mv2.png",
      "https://static.wixstatic.com/media/9356bd_cbaba6f33fa743ff9911d21c1e27dd62~mv2.png",
      "https://static.wixstatic.com/media/9356bd_b6ace0129879445ebf008c8dca601f93~mv2.png",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}
