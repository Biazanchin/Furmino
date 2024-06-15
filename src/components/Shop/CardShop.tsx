import { useEffect, useState } from "react";
import { Products } from "../../types/products";
import CardItem from "../Home/Cards";
import Filter from "./Filter";

function CardShop() {
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://run.mocky.io/v3/978b1590-629d-4bf8-9768-31d8b292b888");
        const data = await response.json();
        setAllProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        console.log('Error fetching products: ', error);
      }
    };
    fetchProducts();
  }, []);

  const applyFilters = ({ category, sortBy, isNew }: { category: string, sortBy: string, isNew: boolean }) => {
    let filtered: Products[] = [...allProducts];
  
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }
  
    if (!category && sortBy === "alphabetical") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (!category && sortBy === "price") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (isNew) {
      filtered = filtered.filter(product => product.isNew);
    }
  
    setFilteredProducts(filtered);
  };

  return (
    <section>
      <Filter applyFilters={applyFilters} />
      <div className="py-20 max-sm:px-4">
        <div className="text-start font-poppins max-w-screen-xl mx-auto">
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <CardItem key={product.sku} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardShop;
