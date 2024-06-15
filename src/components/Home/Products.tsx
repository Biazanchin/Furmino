import { useEffect, useState } from "react";
import { Products } from "../../types/products";
import CardItem from "./Cards";

const OurProducts = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [visibleProducts] = useState<number>(8);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://run.mocky.io/v3/978b1590-629d-4bf8-9768-31d8b292b888");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log('Error fetching products: ', error);
      }
    };
    fetchProducts();
  }, []);

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
          <div className="text-center mt-8">
            <a 
             href="/shop"
              className="border border-primary text-primary px-10 py-2"
            >
              Show More
            </a>
          </div>
      </div>
    </section>
  );
};

export default OurProducts;
