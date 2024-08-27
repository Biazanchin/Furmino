import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { Link } from "react-router-dom";
import {
  updateProductQuantity,
  removeProductFromCart,
} from "../../redux/Actions/cartActions";
import { Products } from "../../types/products";

const CartPage = () => {
  const products = useSelector(
    (state: RootState) => state.cartReducer.products
  );
  const dispatch = useDispatch();

  const handleQuantityChange = (product: Products, quantity: number) => {
    dispatch(updateProductQuantity(product.sku, quantity));
  };

  const handleRemoveProduct = (sku: string) => {
    dispatch(removeProductFromCart(sku));
  };

  const total = products.reduce(
    (sum, { product, quantity }) => sum + product.price * quantity,
    0
  );

  return (
    <div className="container mx-auto font-poppins p-8 lg:px-20 pb-20">
      {products.length > 0 ? (
        <div className="lg:flex lg:flex-row lg:space-x-6">
          <div className="flex-1 mb-6">
            <div className="bg-white p-4 mb-4 md:bg-filter">
              <div className="md:flex justify-between font-semibold hidden">
                <span className="lg:ml-32">Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span className="lg:mr-32">Subtotal</span>
              </div>
            </div>
            <div className="flex-col sm:flex-row">
              {products.map(({ product, quantity }) => (
                <div
                  key={product.sku}
                  className="flex flex-col sm:flex-row items-center mb-4 pb-4 sm:items-center"
                >
                  <div className="w-full sm:w-1/3 flex flex-col sm:flex-row items-center">
                    <img
                      src={product.imgUrl[0]}
                      alt={product.name}
                      className="w-20 h-20 rounded-lg"
                    />
                    <div className="sm:ml-4 mt-2 sm:mt-0">
                      <span className="md:hidden inline-block font-bold bg-filter px-2">
                        Product
                      </span>
                      <h3 className="font-semibold text-gray text-center sm:text-left lg:ml-14">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  <p className="w-full sm:w-1/6 text-center mt-2 sm:mt-0 text-gray">
                    <span className="md:hidden inline-block bg-filter text-black font-bold px-2">
                      Price:
                    </span>
                    Rs. {product.price.toLocaleString()}
                  </p>
                  <div className="flex justify-center items-center py-2 px-2 border border-light-gray rounded-lg mt-2 sm:mt-0 sm:ml-8">
                    <button
                      onClick={() =>
                        handleQuantityChange(product, quantity - 1)
                      }
                      className="mr-4"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="mx-2">{quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(product, quantity + 1)
                      }
                      className="ml-4"
                    >
                      +
                    </button>
                  </div>
                  <p className="w-full sm:w-1/6 text-center sm:text-right mt-2 sm:mt-0 sm:ml-10">
                    <span className="md:hidden inline-block font-bold bg-filter px-2">
                      Subtotal:
                    </span>
                    Rs. {(product.price * quantity).toLocaleString()}
                  </p>
                  <button
                    onClick={() => handleRemoveProduct(product.sku)}
                    className="ml-4 mt-2 sm:mt-0 text-red-500"
                  >
                    <img
                      className="lg:ml-10 mr-2"
                      src="/lixeira.png"
                      alt="lixeira"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block w-1/3 bg-filter p-2 pl-12 pr-12 ml-6 h-[300px] sm:h-80">
            <h2 className="text-2xl font-semibold mb-12 text-center">
              Cart Totals
            </h2>
            <div className="flex justify-between mb-6">
              <span className="font-semibold">Subtotal:</span>
              <span className="text-gray">Rs. {total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span className="text-primary">Rs. {total.toLocaleString()}</span>
            </div>
            <div className="lg:px-20">
              <Link
                to="/checkout"
                className="block text-center border border-black rounded-lg mt-12 py-2 lg:py-3 hover:font-bold"
              >
                Check Out
              </Link>
            </div>
          </div>
          {/* Responsividade */}
          <div className="lg:hidden w-full bg-filter p-2 pl-4 pr-4 mt-6">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Cart Totals
            </h2>
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Subtotal:</span>
              <span className="text-gray">Rs. {total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span className="text-primary">Rs. {total.toLocaleString()}</span>
            </div>
            <div className="px-20 md:px-60">
              <Link
                to="/checkout"
                className="block text-center border border-black rounded-lg py-2 hover:font-bold"
              >
                Check Out
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center p-20">
          <p>Your cart is empty.</p>
          <Link
            to="/shop"
            className="text-primary hover:underline text-2xl font-medium"
          >
            Continue shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
