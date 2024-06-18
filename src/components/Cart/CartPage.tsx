import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/root-reducer';
import { Link } from 'react-router-dom';
import { updateProductQuantity, removeProductFromCart } from '../../redux/Actions/cartActions';
import { Products } from '../../types/products';

const CartPage = () => {
  const products = useSelector((state: RootState) => state.cartReducer.products);
  const dispatch = useDispatch();

  const handleQuantityChange = (product: Products, quantity: number) => {
    dispatch(updateProductQuantity(product.sku, quantity));
  };

  const handleRemoveProduct = (sku: string) => {
    dispatch(removeProductFromCart(sku));
  };

  const total = products.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);

  return (
    <div className="container mx-auto mt-10 p-6">
      {products.length > 0 ? (
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 mb-6 md:mb-0">
            <div className="bg-filter p-4 mb-4">
              <div className="flex justify-between font-semibold">
                <span className="w-1/3">Product</span>
                <span className="w-1/6 text-center">Price</span>
                <span className="w-1/6 text-center">Quantity</span>
                <span className="w-1/6 text-right">Subtotal</span>
              </div>
            </div>
            {products.map(({ product, quantity }) => (
              <div key={product.sku} className="flex items-center mb-4 pb-4">
                <div className="w-1/3 flex items-center">
                  <img src={product.imgUrl[0]} alt={product.name} className="w-20 h-20 rounded-lg" />
                  <div className="ml-4">
                    <h3 className="font-semibold">{product.name}</h3>
                  </div>
                </div>
                <p className="w-1/6 text-center">Rs. {product.price.toLocaleString()}</p>
                <div className="w-1/6 flex justify-center items-center">
                  <button
                    onClick={() => handleQuantityChange(product, quantity - 1)}
                    className="px-2 py-1 border rounded-md"
                    disabled={quantity <= 1}
                  >-</button>
                  <span className="mx-2">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(product, quantity + 1)}
                    className="px-2 py-1 border rounded-md"
                  >+</button>
                </div>
                <p className="w-1/6 text-right">Rs. {(product.price * quantity).toLocaleString()}</p>
                <button onClick={() => handleRemoveProduct(product.sku)} className="ml-4 text-red-500">
                  <img src='https://desafio3furniro.s3.us-east-2.amazonaws.com/cart/lixeira.png' alt='lixeira'/>
                </button>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/3 bg-filter p-6">
            <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span className='text-gray'>Rs. {total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span className='text-primary'>Rs. {total.toLocaleString()}</span>
            </div>
            <Link
              to="/checkout"
              className="block text-center border border-black rounded-lg mt-4 hover:font-bold"
            >Check Out</Link>
          </div>
        </div>
      ) : (
        <div className="text-center p-20">
          <p>Your cart is empty.</p>
          <Link to="/shop" className="text-primary hover:underline text-2xl font-medium">Continue shopping</Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
