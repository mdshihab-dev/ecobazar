import CartTotal from "@/components/(shopping-cart)/CartTotal"
import CouponCode from "@/components/(shopping-cart)/CouponCode"
import ProductsCalculation from "@/components/(shopping-cart)/ProductsCalculation"
import SubBanner from "@/components/SubBanner"
import Link from "next/link"

const ShoppingCartPage = () => {
  return (
    <>
      <SubBanner>
        <Link
          href={"#"}
          className=" font-poppins font-normal text-base leading-[150%] text-primary"
        >
          Shopping cart
        </Link>
      </SubBanner>
      <section className=" container pt-10 pb-20">
         <h1 className=" text-center font-poppins font-semibold text-[32px] leading-[120%] text-dark">
          My Shopping Cart
        </h1>

         <div className=" mt-8 flex justify-between">
          <div>
            <ProductsCalculation />
            <CouponCode/>
          </div>
          <CartTotal/>
         </div>
      </section>
    </>
  )
}

export default ShoppingCartPage