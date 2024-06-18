import Benefits from "../components/Beneficios/Benefits"
import CartPage from "../components/Cart/CartPage"
import Fundo from "../components/Fundo/Fundo"

const Cart = () => {
  return (
    <div>
      <Fundo children="Cart"/>
      <CartPage/>
      <Benefits/>
    </div>
  )
}

export default Cart 