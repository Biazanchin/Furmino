import { useState } from 'react';

const Filter = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center bg-filter p-4  pl-16 pr-16 font-poppins relative">
      <div className="flex items-center mb-4 sm:mb-0">
        <button onClick={togglePopup} className="focus:outline-none">
          <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/shop/filtro.png" alt="Filtro" className="w-6 h-6" />
        </button>
        <span onClick={togglePopup} className="ml-2 cursor-pointer">Filter</span>
        <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/shop/bolinhas.png" alt="bolinhas" className="w-6 h-6 ml-4" />
        <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/shop/lista.png" alt="page" className="w-6 h-6 ml-4" />
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
              <select className="p-2 border border-gray rounded hover:scale-105">
                <option disabled selected>Category</option>
                <option>Sofa</option>
                <option>Chair</option>
                <option>Table</option>
                <option>Pot</option>
                <option>Mug</option>
                <option>Bed</option>
                <option>Lamp</option>
              </select>
              <button className="p-2 border border-gray rounded bg-white hover:scale-105">Price</button>
              <button className="p-2 border border-gray rounded bg-white hover:scale-105">A-Z</button>
              <select className="p-2 border border-gray rounded hover:scale-105">
                <option disabled selected>Discount</option>
                <option>50%</option>
                <option>30%</option>
              </select>
              <button className="p-2 border border-gray rounded bg-white hover:scale-105">New</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
