import { useEffect, useState } from "react";
import { Products } from "../../types/products";
import CardItem from "./Cards";

const OurProducts = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<number>(8);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://run.mocky.io/v3/b8c85b8e-c246-4926-b643-226ead116300");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log('Error fetching products: ', error);
      }
    };
    fetchProducts();
  }, []);

  const handleShowMore = () => {
    setVisibleProducts((prev) => prev + 8);
  };

  return (
    <section className="py-20 max-sm:px-4">
      <div className="text-start font-poppins max-w-screen-xl mx-auto">
        <h2 className="w-full text-center font-bold sm:text-4xl text-3xl">
          Our Products
        </h2>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, visibleProducts).map((product) => (
            <CardItem key={product.sku} product={product} />
          ))}
        </div>
        {visibleProducts < products.length && (
          <div className="text-center mt-8">
            <button 
              onClick={handleShowMore} 
              className="border border-primary text-primary px-10 py-2"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurProducts;
