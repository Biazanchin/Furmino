import { useEffect, useState } from "react";
import { Products } from "../../types/products";
import CardItem from "./Cards";

const OurProducts = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [visibleProducts] = useState<number>(8);
  const [, setSelectedProduct] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, []);

  const handleSelectProduct = (sku: string) => {
    setSelectedProduct(sku);
  };

  return (
    <section className="py-20 max-sm:px-4">
      <div className="text-start font-poppins max-w-screen-xl mx-auto">
        <h2 className="w-full text-center font-bold sm:text-4xl text-3xl">
          Our Products
        </h2>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {products.slice(0, visibleProducts).map((product) => (
            <CardItem
              key={product.sku}
              product={product}
              onSelectProduct={handleSelectProduct}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/shop"
            className="border border-primary text-primary px-10 py-2 hover:text-white hover:bg-primary transition duration-300"
          >
            Show More
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
