import { useEffect, useState } from "react";
import { Products } from "../../types/products";
import CardItem from "../Home/Cards";

const CardShop = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [visibleProducts] = useState<number>(16);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://run.mocky.io/v3/2dab94cd-edf5-47e3-9a8f-0835778afec8");
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
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, visibleProducts).map((product) => (
            <CardItem key={product.sku} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default CardShop;
