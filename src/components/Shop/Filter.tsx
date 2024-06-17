import { useState, ChangeEvent } from 'react';

interface FilterProps {
  applyFilters: (filters: { category: string; sortBy: string, isNew: boolean }) => void;
}

const Filter = ({ applyFilters }: FilterProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  const [tempCategory, setTempCategory] = useState<string>("");
  const [tempSortBy, setTempSortBy] = useState<string>("");

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTempCategory(event.target.value);
  };

  const handleSortByChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTempSortBy(event.target.value);
  };

  const handleApplyButtonClick = () => {
    setCategory(tempCategory);
    setSortBy(tempSortBy);

    const isNew = tempSortBy === "new";
    applyFilters({ category: tempCategory, sortBy: isNew ? "" : tempSortBy, isNew });
    setTempCategory("");
    setTempSortBy("");
    togglePopup();
  };

  return (
    <div className="flex flex-col sm:flex-row items-center bg-filter p-4 pl-16 pr-16 font-poppins relative">
      <div className="flex items-center mb-4 sm:mb-0">
        <button onClick={togglePopup} className="focus:outline-none">
          <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/shop/filtro.png" alt="Filtro" className="w-6 h-6" />
        </button>
        <span onClick={togglePopup} className="ml-2 cursor-pointer">Filter</span>
        <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/shop/bolinhas.png" alt="bolinhas" className="cursor-pointer w-6 h-6 ml-4" />
        <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/shop/lista.png" alt="page" className="cursor-pointer w-6 h-6 ml-4" />
        <div className="bg-black h-6 w-0.5 ml-8 mr-4"></div>
        <span className="ml-4 text-sm">Showing 1-16 of 32 results</span>
      </div>
      <div className="flex items-center lg:ml-auto">
        <label htmlFor="show-select" className="mr-2 text-sm">Show</label>
        <div className='mr-4 py-2 px-4 text-gray bg-white text-sm'>16</div>
        <label htmlFor="sort-select" className="mr-2 text-sm">Sort by</label>
        <div className="bg-white text-gray py-2 pl-4 pr-10 text-sm">
          Default
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="p-6 rounded-lg relative bg-pink">
            <button onClick={togglePopup} className="absolute top-2 right-2 text-2xl">&times;</button>
            <div className="flex flex-col space-y-4">
              <select onChange={handleCategoryChange} className="p-2 border border-gray rounded hover:scale-105" value={tempCategory}>
                <option value="">Category</option>
                <option value="Sofa">Sofa</option>
                <option value="Chair">Chair</option>
                <option value="Table">Table</option>
                <option value="Pot">Pot</option>
                <option value="Mug">Mug</option>
                <option value="Bed">Bed</option>
                <option value="Lamp">Lamp</option>
              </select>
              <select onChange={handleSortByChange} className="p-2 border border-gray rounded hover:scale-105" value={tempSortBy}>
                <option value="">Sort by</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="price">Price</option>
                <option value="new">New</option>
              </select>
              <button onClick={handleApplyButtonClick} className="p-2 border border-gray rounded bg-light-gray hover:scale-105">Apply</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
