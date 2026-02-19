import CartDescription from "./CartDescription"
import ProductView from "./ProductView"

const AddToCart = () => {
  return (
    <section className=" container flex gap-x-6 pt-8">
        <ProductView/>
        <CartDescription/>
    </section>
  )
}

export default AddToCart