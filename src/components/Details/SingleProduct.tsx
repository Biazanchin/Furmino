import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../../types/products";
import Details from "./Details";

const SingleProduct = () => {
  const { sku } = useParams<{ sku: string }>();
  const [products, setProducts] = useState<Products[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://run.mocky.io/v3/41508ff4-254e-4a3d-8da8-47aea9b0d5d3");
        const data = await response.json();
        setProducts(data.products);
        const product = data.products.find((product: Products) => product.sku === sku);
        setSelectedProduct(product || null);
      } catch (error) {
        console.log('Error fetching products: ', error);
      }
    };
    fetchProducts();
  }, [sku]);

  return (
    <div>
      {selectedProduct && (
        <Details product={selectedProduct} />
      )}
    </div>
  );
};

export default SingleProduct;
