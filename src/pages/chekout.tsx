import Benefits from "../components/Beneficios/Benefits"
import CheckoutForm from "../components/Checkout/Checkout"
import Fundo from "../components/Fundo/Fundo"

const Chekout = () => {
  return (
    <div>
      <Fundo children="Checkout"/>
      <CheckoutForm/>
      <Benefits/>
    </div>
  )
}

export default Chekout