import Description from "../components/Details/Description"
import SingleCards from "../components/Details/SingleCards"
import SingleProduct from "../components/Details/SingleProduct"

const ProductDetails = () => {
  return (
    <div>
      <SingleProduct/>
      <Description/>
      <SingleCards/>
    </div>
  )
}

export default ProductDetails