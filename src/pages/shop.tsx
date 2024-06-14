import Benefits from "../components/Beneficios/Benefits"
import Fundo from "../components/Fundo/Fundo"
import CardShop from "../components/Shop/CardShop"
import Filter from "../components/Shop/Filter"

const Shop = () => {
  return (
    <div>
      <Fundo children="Shop"/>
      <Filter/>
      <CardShop/>
      <Benefits/>
    </div>
  )
}

export default Shop