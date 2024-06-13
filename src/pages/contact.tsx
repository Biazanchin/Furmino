import Benefits from "../components/Beneficios/Benefits"
import Touch from "../components/Contact/Touch/Touch"
import Fundo from "../components/Fundo/Fundo"

const Contact = () => {
  return (
    <div>
      <Fundo children="Contact"/>
      <Touch/>
      <Benefits/>
    </div>
  )
}

export default Contact