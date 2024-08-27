import { useState, ChangeEvent } from "react";

interface FilterProps {
  applyFilters: (filters: {
    category: string;
    sortBy: string;
    isNew: boolean;
  }) => void;
  clearFilters: () => void;
  currentPage: number;
  totalProducts: number;
  itemsPerPage: number;
  filtersVisible: boolean;
}

const Filter = ({
  applyFilters,
  clearFilters,
  currentPage,
  totalProducts,
  itemsPerPage,
}: FilterProps) => {
  const [filtersVisible, setFiltersVisible] = useState<boolean>(false);
  const [tempCategory, setTempCategory] = useState<string>("");
  const [tempSortBy, setTempSortBy] = useState<string>("");

  const toggleFiltersVisible = () => {
    setFiltersVisible(!filtersVisible);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTempCategory(event.target.value);
  };

  const handleSortByChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTempSortBy(event.target.value);
  };

  const handleApplyButtonClick = () => {
    const isNew = tempSortBy === "new";
    applyFilters({
      category: tempCategory,
      sortBy: isNew ? "" : tempSortBy,
      isNew,
    });
  };

  const handleClearButtonClick = () => {
    clearFilters();
    setTempCategory("");
    setTempSortBy("");
  };

  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalProducts);

  return (
    <div className="font-poppins">
      <div className="flex flex-col sm:flex-row items-center bg-filter p-4 pl-16 pr-16 relative">
        <div className="flex items-center mb-4 sm:mb-0">
          <button onClick={toggleFiltersVisible} className="focus:outline-none">
            <img src="/filtro.png" alt="Filtro" className="w-6 h-6" />
          </button>
          <span onClick={toggleFiltersVisible} className="ml-2 cursor-pointer">
            Filter
          </span>
          <img
            src="/bolinha.png"
            alt="bolinhas"
            className="cursor-pointer w-6 h-6 ml-4"
          />
          <img
            src="/view-list.png"
            alt="page"
            className="cursor-pointer w-6 h-6 ml-4"
          />
          <div className="bg-black h-6 w-0.5 ml-8 mr-4"></div>
          <span className="ml-4 text-sm">
            Showing {start}-{end} of {totalProducts} results
          </span>
        </div>
        <div className="flex items-center lg:ml-auto">
          <label className="mr-2 text-sm">Show</label>
          <div className="mr-4 py-2 px-4 text-gray bg-white text-sm">
            {Math.min(itemsPerPage, totalProducts)}
          </div>
          <label className="mr-2 text-sm">Sort by</label>
          <div className="bg-white text-gray py-2 pl-4 pr-10 text-sm">
            Default
          </div>
        </div>
      </div>
      {filtersVisible && (
        <div className="flex flex-wrap items-center justify-center bg-filter p-4 pl-16 pr-16">
          <select
            onChange={handleCategoryChange}
            className="p-2 border border-gray rounded hover:scale-105"
            value={tempCategory}
            data-testid="category-select"
          >
            <option value="" disabled>
              Category
            </option>
            <option value="Sofa">Sofa</option>
            <option value="Chair">Chair</option>
            <option value="Table">Table</option>
            <option value="Pot">Pot</option>
            <option value="Mug">Mug</option>
            <option value="Bed">Bed</option>
            <option value="Lamp">Lamp</option>
          </select>

          <select
            onChange={handleSortByChange}
            className="p-2 border border-gray rounded hover:scale-105 ml-4"
            value={tempSortBy}
            data-testid="sort-select"
          >
            <option value="" disabled>
              Sort By
            </option>
            <option value="alphabetical">Alphabetical</option>
            <option value="price">Price</option>
            <option value="new">New Arrivals</option>
          </select>

          <div className="flex space-x-4 mt-4 sm:mt-0 ml-4">
            <button
              onClick={handleApplyButtonClick}
              className="bg-primary text-white py-2 px-4 rounded hover:bg-opacity-90 transition duration-300"
            >
              Apply Filters
            </button>
            <button
              onClick={handleClearButtonClick}
              className="bg-gray text-white py-2 px-4 rounded hover:bg-opacity-90 transition duration-300"
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
