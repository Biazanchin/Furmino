import Benefits from "../components/Beneficios/Benefits"
import Fundo from "../components/Fundo/Fundo"
import CardShop from "../components/Shop/CardShop"

const Shop = () => {
  return (
    <div>
      <Fundo children="Shop"/>
      <CardShop/>
      <Benefits/>
    </div>
  )
}

export default Shop