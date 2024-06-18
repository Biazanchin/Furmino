import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, UPDATE_PRODUCT_QUANTITY } from '../Actions/cartActions';
import { Products } from '../../types/products';

interface CartState {
  products: { product: Products; quantity: number }[];
}

const initialState: CartState = {
  products: [],
};

const cartReducer = (state = initialState, action: any): CartState => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const { product, quantity } = action.payload;
      const productIndex = state.products.findIndex(p => p.product.sku === product.sku);

      if (productIndex !== -1) {
        const updatedProducts = state.products.map((item, index) =>
          index === productIndex ? { ...item, quantity: item.quantity + quantity } : item
        );
        return { ...state, products: updatedProducts };
      } else {
        return { ...state, products: [...state.products, { product, quantity }] };
      }
    }
    case REMOVE_PRODUCT_FROM_CART: {
      return {
        ...state,
        products: state.products.filter(item => item.product.sku !== action.payload),
      };
    }
    case UPDATE_PRODUCT_QUANTITY: {
      return {
        ...state,
        products: state.products.map((item) =>
          item.product.sku === action.payload.sku
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
