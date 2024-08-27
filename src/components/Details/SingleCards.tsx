import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../../types/products";
import RelatedProducts from "./RelatedProducts";

const SingleCards = () => {
  const { sku } = useParams<{ sku: string }>();
  const [relatedProducts, setRelatedProducts] = useState<Products[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Products | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();

        const product = data.find((product: Products) => product.sku === sku);
        setCurrentProduct(product || null);

        if (product) {
          const filteredProducts = data.filter(
            (p: Products) =>
              p.category === product.category && p.sku !== product.sku
          );
          setRelatedProducts(filteredProducts.slice(0, 4));
        }
      } catch (error) {
        console.log("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, [sku]);

  return (
    <div>
      {currentProduct && <RelatedProducts relatedProducts={relatedProducts} />}
    </div>
  );
};

export default SingleCards;
