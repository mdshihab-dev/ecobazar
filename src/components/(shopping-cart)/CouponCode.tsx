import Button from "../Button"

const CouponCode = () => {
  return (
    <div className="mt-6 p-5 w-218 border border-[#e6e6e6] rounded-lg flex items-center justify-between">
        <p className=" font-poppins font-medium text-xl leading-[150%] text-dark">
            Coupon Code
        </p>

        <div className="w-167 flex items-center border border-[#e5e5e5] h-13 bg-white rounded-full">
          <input type="text" placeholder="Enter code" className=" w-full py-3.5 px-6 font-normal font-poppins text-base leading-[150%] text-light-gray outline-hidden"/>
          <Button text="Apply Coupon" styles="whitespace-nowrap  px-10 py-4 bg-[#333333] text-white rounded-full font-semibold text-base leading-[20px]"/>
        </div>
    </div>
  )
}

export default CouponCode