import { Link } from "react-router-dom";
import { Products } from "../../types/products";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/Actions/cartActions";

interface CardItemProps {
  product: Products;
  onSelectProduct: (sku: string) => void;
}

const CardItem = ({ product, onSelectProduct }: CardItemProps) => {
  const dispatch = useDispatch()

  const handleProductClick = () => {
    dispatch(addProductToCart(product, 1))
  }

  return (
    <div
      onClick={() => onSelectProduct(product.sku)}
      className="block w-[285px] h-[446px] relative group cursor-pointer"
    >
      <Link
        to={`/products/${product.sku}`}
        className="block w-full h-full"
      >
        <div className="relative">
          <img
            src={product.imgUrl[0]}
            className="object-cover w-full h-[285px]"
            alt={product.name}
          />
          {product.onDiscount && (
            <span className="bg-discount text-white text-xs w-8 h-8 rounded-full flex items-center justify-center absolute top-2 right-2">
              -{product.discountPercentage}%
            </span>
          )}
          {product.isNew && (
            <span className="bg-new text-white text-xs w-8 h-8 rounded-full flex items-center justify-center absolute top-2 right-2">
              New
            </span>
          )}
        </div>
        <Link
        to='#'
          onClick={handleProductClick}
          className="bg-white text-primary py-2 px-10 transition-opacity opacity-0 group-hover:opacity-100 hover:font-bold absolute top-[35%] left-[20%] z-10"
        >
          Add to Cart
        </Link>
        <div className="flex justify-between mt-2 gap-10 opacity-0 group-hover:opacity-100 transition-opacity z-10 absolute top-[50%] pl-2 pr-4 text-white cursor-pointer">
          <Link to='/share'>
            <span className="flex items-center">
              <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/Share.png" alt="Share Icon" className="inline-block mr-1" />
              Share
            </span>
          </Link>
          <Link to='/compare'>
            <span className="flex items-center">
              <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/compare.png" alt="Compare Icon" className="inline-block mr-1" /> 
              Compare
            </span>
          </Link>
          <Link to='/like'>
            <span className="flex items-center">
              <img src="https://desafio3furniro.s3.us-east-2.amazonaws.com/home/Heart.png" alt="Like Icon" className="inline-block mr-1" />
              Like
            </span>
          </Link>
        </div>
        <div className="pt-4 pb-6 px-4 h-[161px] bg-component relative">
          <h5 className="text-ellipsis overflow-hidden font-bold text-xl mb-2">
            {product.name}
          </h5>
          <p className="text-lighter-gray">{product.subtitle}</p>
          {product.onDiscount ? (
            <div className="flex items-center text-sm gap-2 mt-2">
              <p className="text-base">
                <strong>
                  Rp{" "}
                  {((product.price) - (product.price) * (product.discountPercentage / 100)).toLocaleString()}
                </strong>{" "}
                <span className="text-lighter-gray line-through ml-2">
                  Rp {product.price.toLocaleString()}
                </span>
              </p>
            </div>
          ) : (
            <strong className="font-bold mt-2 block">
              Rp {product.price.toLocaleString()}
            </strong>
          )}
        </div>
        <span className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-50"></span>
      </Link>
    </div>
  );
};

export default CardItem;
