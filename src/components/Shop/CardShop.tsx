import { useEffect, useState } from "react";
import { Products } from "../../types/products";
import CardItem from "../Home/Cards";
import Filter from "./Filter";

function CardShop() {
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
  const [, setSelectedProduct] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filtersVisible] = useState(false);
  const itemsPerPage = 16;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();
        setAllProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.log("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, []);

  const applyFilters = ({
    category,
    sortBy,
    isNew,
  }: {
    category: string;
    sortBy: string;
    isNew: boolean;
  }) => {
    let filtered: Products[] = [...allProducts];

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (sortBy === "alphabetical") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "price") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (isNew) {
      filtered = filtered.filter((product) => product.isNew);
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
    scrollToProductsSection();
  };

  const clearFilters = () => {
    setFilteredProducts(allProducts);
    setCurrentPage(1);
  };

  const handleSelectProduct = (sku: string) => {
    setSelectedProduct(sku);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToProductsSection();
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToProductsSection();
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToProductsSection();
    }
  };

  const scrollToProductsSection = () => {
    const element = document.getElementById("products-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getPageNumbers = () => {
    let startPage, endPage;

    if (totalPages <= 3) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= 2) {
      startPage = 1;
      endPage = 3;
    } else if (currentPage + 1 >= totalPages) {
      startPage = totalPages - 2;
      endPage = totalPages;
    } else {
      startPage = currentPage - 1;
      endPage = currentPage + 1;
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <section>
      <Filter
        applyFilters={applyFilters}
        clearFilters={clearFilters}
        filtersVisible={filtersVisible}
        currentPage={currentPage}
        totalProducts={filteredProducts.length}
        itemsPerPage={itemsPerPage}
      />
      <div className="py-20 max-sm:px-4" id="products-section">
        {filteredProducts.length === 0 ? (
          <div className="flex items-center justify-center">
            <p className="text-gray text-xl">There's nothing to see here :(</p>
          </div>
        ) : (
          <div className="text-start font-poppins max-w-screen-xl mx-auto">
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              {paginatedProducts.map((product) => (
                <CardItem
                  key={product.sku}
                  product={product}
                  onSelectProduct={handleSelectProduct}
                />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              {currentPage >= 2 && (
                <button
                  onClick={handlePreviousPage}
                  className="px-4 py-2 mx-1 rounded bg-filter hover:bg-primary hover:text-white transition duration-300"
                >
                  Previous
                </button>
              )}
              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 mx-1 rounded ${
                    currentPage === page
                      ? "bg-primary text-white"
                      : "hover:bg-primary hover:text-white bg-filter"
                  }`}
                >
                  {page}
                </button>
              ))}
              {currentPage !== totalPages && (
                <button
                  onClick={handleNextPage}
                  className="px-4 py-2 mx-1 rounded hover:bg-primary hover:text-white bg-filter transition duration-300"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CardShop;
