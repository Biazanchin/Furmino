import { useState } from "react";
import { Products } from "../../types/products";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  updateProductQuantity,
} from "../../redux/Actions/cartActions";
import Description from "./Description";
import Header from "../Header/index";

interface DetailsProps {
  product: Products;
}

const Details = ({ product }: DetailsProps) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleProductClick = () => {
    dispatch(addProductToCart(product, quantity));
    setSuccessMessage("Product added to cart successfully!");
    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    dispatch(updateProductQuantity(product.sku, newQuantity));
  };

  return (
    <div>
      <Header />
      <div className="font-poppins border border-b-2 border-light-gray">
        <div className="flex flex-col sm:flex-row items-center bg-filter p-4 pl-8 sm:pl-16 pr-8 sm:pr-16 relative mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <a href="/" className="text-gray">
              Home
            </a>
            <span className="font-bold ml-2">{">"}</span>
            <a href="/shop" className="text-gray ml-4">
              Shop
            </a>
            <span className="font-bold ml-4">{">"}</span>
            <div className="bg-gray h-6 w-0.5 ml-8 mr-4"></div>
            <span className="ml-4 font-bold">{product.name}</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row px-4 md:px-8 lg:px-32">
          <div className="flex flex-row w-full sm:w-1/2">
            <div className="flex flex-col w-1/5 mr-4">
              {product.imgUrl.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="mb-4 w-full h-16 md:h-20 sm:h-24 object-contain rounded-lg cursor-pointer"
                />
              ))}
            </div>
            <div className="w-4/5">
              <img
                src={product.imgUrl[0]}
                alt={product.name}
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 sm:pl-8 mt-8 sm:mt-0">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl mb-4 text-gray">
              Rs. {product.price.toLocaleString()}
            </p>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <img
                  src={product.stars}
                  alt="Stars"
                  className="w-24 sm:w-32 h-6"
                />
                <div className="bg-gray h-6 w-0.5 ml-8 mr-4"></div>
                <span className="ml-2 text-gray">
                  {product.customers} Customer Reviews
                </span>
              </div>
            </div>
            <div className="mb-4">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </div>
            <div className="mb-4">
              <span className="block mb-2">Size:</span>
              <div className="flex items-center flex-wrap">
                {product.size.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md mr-2 mb-2 sm:mb-0 ${
                      selectedSize === size
                        ? "bg-primary text-white"
                        : "bg-filter"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <span className="block mb-2">Color:</span>
              <div className="flex items-center">
                {product.colors.map((color, index) => (
                  <img
                    key={index}
                    src={color}
                    alt={`Color ${index}`}
                    className={`w-8 h-8 mr-2 cursor-pointer ${
                      selectedColor === index ? "scale-125" : ""
                    }`}
                    onClick={() => setSelectedColor(index)}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center mb-8">
              <div className="border border-gray rounded-lg py-4 ">
                <button
                  className="px-4 lg:px-6 hover:font-bold transition duration-300"
                  disabled={quantity <= 1}
                  onClick={() => handleQuantityChange(quantity - 1)}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="px-4 lg:px-6 hover:font-bold transition duration-300"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                onClick={handleProductClick}
                className="border border-black rounded-lg px-8 md:px-10 py-4 mt-10 ml-6 mb-10 hover:bg-filter hover:font-bold transition duration-300"
              >
                Add To Cart
              </button>
            </div>
            {successMessage && (
              <div className="text-green-500 mb-2">{successMessage}</div>
            )}
            <hr className="border-gray" />
            <div className="flex flex-col sm:flex-row justify-between items-start mt-10">
              <div className="flex flex-col sm:mr-4">
                <div className="flex items-center mb-4">
                  <span className="text-gray w-24">SKU</span>
                  <span className="text-gray">: {product.sku}</span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-gray w-24">Category</span>
                  <span className="text-gray">: {product.category}</span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-gray w-24">Tags</span>
                  <span className="text-gray">: {product.tags.join(", ")}</span>
                </div>
                <div className="flex items-center mb-20">
                  <span className="text-gray w-24">Share</span>
                  <span className="text-gray mr-2">:</span>
                  <div className="flex">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="mr-4"
                    >
                      <img
                        src="https://desafio3furniro.s3.us-east-2.amazonaws.com/product/facebook.png"
                        alt="Facebook"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      className="mr-4"
                    >
                      <img
                        src="https://desafio3furniro.s3.us-east-2.amazonaws.com/product/linkedin.png"
                        alt="LinkedIn"
                      />
                    </a>
                    <a href="https://x.com/" target="_blank">
                      <img
                        src="https://desafio3furniro.s3.us-east-2.amazonaws.com/product/twitter.png"
                        alt="Twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Description />
    </div>
  );
};

export default Details;
