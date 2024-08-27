import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../../types/products";
import Details from "./Details";

const SingleProduct = () => {
  const { sku } = useParams<{ sku: string }>();
  const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();
        const product = data.find((product: Products) => product.sku === sku);
        setSelectedProduct(product || null);
      } catch (error) {
        console.log("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, [sku]);

  return <div>{selectedProduct && <Details product={selectedProduct} />}</div>;
};

export default SingleProduct;
