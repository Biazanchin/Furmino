import { useSelector } from 'react-redux';
import { RootState } from '../../redux/root-reducer';
import CartCard from './CartCard';
import { Link } from 'react-router-dom';

type CartProps = {
  toggleCart: (event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => void;
};

const Cart = ({ toggleCart }: CartProps) => {
  const products = useSelector((state: RootState) => state.cartReducer.products);

  const total = products.reduce((sum, { product, quantity }) => {
    return sum + product.price * quantity;
  }, 0);

  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
        onClick={toggleCart}
      ></div>
      
      <div
        className="fixed top-0 right-0 w-80 h-[500px] bg-white z-50 shadow-lg flex flex-col"
      >
        <div className="flex justify-between items-center p-4 border-b border-light-gray bg-white z-50">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <img
            src="https://desafio3furniro.s3.us-east-2.amazonaws.com/cart/sacola.png"
            alt="Sacola"
            className="w-6 h-6 cursor-pointer"
            onClick={toggleCart}
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          {products.length > 0 ? (
            <ul>
              {products.map(({ product, quantity }) => (
                <li key={product.sku} className="p-4">
                  <CartCard product={product} quantity={quantity} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-4 text-center text-gray">Your cart is empty.</p>
          )}
        </div>
        <div className="p-4 flex justify-between">
          <h3 className="text-lg font-semibold">
            Subtotal:
          </h3>
          <span className='text-primary font-semibold mr-10'>Rs. {total.toLocaleString()}</span>
        </div>
        <div className="flex p-6 border-t border-light-gray space-x-2">
          <Link
            to="/cart"
            className='flex-1 border rounded-full text-center hover:font-bold transition duration-100'
            onClick={toggleCart}>
              Cart
          </Link>
          <Link
            to="/checkout"
            className='flex-1 border rounded-full text-center hover:font-bold transition duration-100'
            onClick={toggleCart}>
              Checkout
          </Link>
          <Link
            to="/compare"
            className='flex-1 border rounded-full text-center hover:font-bold transition duration-100'
            onClick={toggleCart}>
              Compare
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
