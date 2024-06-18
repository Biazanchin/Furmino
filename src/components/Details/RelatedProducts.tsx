import { Products } from "../../types/products";
import CardItem from "../Home/Cards";
import { useState } from "react";

interface RelatedProductsProps {
  relatedProducts: Products[];
}

const RelatedProducts = ({ relatedProducts }: RelatedProductsProps) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleSelectProduct = (sku: string) => {
    setSelectedProduct(sku);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mt-12 px-4 sm:px-8 lg:px-16">
      <h2 className="flex flex-col items-center font-poppins text-2xl font-bold">Related Products</h2>
      <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.map((product) => (
          <CardItem key={product.sku} product={product} onSelectProduct={handleSelectProduct} />
        ))}
      </div>
      <div className="text-center mt-10 mb-20">
        <a 
          href="/shop"
          className="border border-primary text-primary px-10 py-2 hover:text-white hover:bg-primary transition duration-300"
        >
          Show More
        </a>
      </div>
    </div>
  );
};

export default RelatedProducts;
