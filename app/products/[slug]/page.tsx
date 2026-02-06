import ProductDetailView from "./ProductDetailView";
import { products } from "@/lib/products";

interface ProductPageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

// Pre-generate all product detail pages at build time
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Only allow known product slugs (better for static hosts / SEO)
export const dynamicParams = false;

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  return <ProductDetailView slug={slug} />;
}
