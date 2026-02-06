import ProductDetailView from "./ProductDetailView";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  return <ProductDetailView slug={slug} />;
}
