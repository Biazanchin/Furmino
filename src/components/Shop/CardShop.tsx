import { useEffect, useState } from "react";
import { Products } from "../../types/products";
import CardItem from "../Home/Cards";

const CardShop = () => {
  const [allProducts, setAllProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://run.mocky.io/v3/b8c85b8e-c246-4926-b643-226ead116300");
        const data = await response.json();
        setAllProducts(data.products);
      } catch (error) {
        console.log('Error fetching products: ', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="py-20 max-sm:px-4">
      <div className="text-start font-poppins max-w-screen-xl mx-auto">
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {allProducts.map((product) => (
            <CardItem key={product.sku} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardShop;
