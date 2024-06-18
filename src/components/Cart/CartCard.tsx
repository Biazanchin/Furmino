import { useDispatch } from 'react-redux';
import { removeProductFromCart } from '../../redux/Actions/cartActions';
import { Products } from '../../types/products';

interface CartCardProps {
  product: Products;
  quantity: number;
}

const CartCard = ({ product, quantity }: CartCardProps) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeProductFromCart(product.sku));
  };

  return (
    <div className="flex items-center">
      <img src={product.imgUrl[0]} alt={product.name} className="w-20 h-20 rounded-lg" />
      <div className="flex-1 ml-6">
        <h3 className="font-semibold mb-2">{product.name}</h3>
        <p className="text-sm">{quantity} <span className='ml-2'>x</span> <span className="text-primary font-semibold ml-2">Rs. {(product.price * quantity).toLocaleString()}</span></p>
      </div>
      <button onClick={handleRemoveClick}>
        <img src='https://desafio3furniro.s3.us-east-2.amazonaws.com/cart/sair.png' alt='deletar' className="w-6 h-6"/>
      </button>
    </div>
  );
};

export default CartCard;
