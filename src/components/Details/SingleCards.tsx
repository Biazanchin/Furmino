import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../../types/products";
import RelatedProducts from "./RelatedProducts";

const SingleCards = () => {
  const { sku } = useParams<{ sku: string }>();
  const [, setProducts] = useState<Products[]>([]);
  const [relatedProducts, setRelatedProducts] = useState<Products[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Products | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/41508ff4-254e-4a3d-8da8-47aea9b0d5d3"
        );
        const data = await response.json();
        setProducts(data.products);
        const product = data.products.find(
          (product: Products) => product.sku === sku
        );
        setCurrentProduct(product || null);

        if (product) {
          const filteredProducts = data.products.filter(
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
