
const CartTotal = () => {
  return (
    <div className=" h-74 p-6 w-106 border border-[#e6e6e6] rounded-lg">
        <h1 className=" font-poppins font-medium text-xl leading-[150%] text-dark">
            Cart Total
        </h1>

        <div className=" mt-[7px]">
            <div className="border-b border-[#e6e6e6] py-3 flex items-center justify-between ">
            <p className="font-poppins font-normal text-sm leading-[150%] text-sub-secondary">
                Subtotal:
            </p>
            <span className="font-poppins font-medium text-sm leading-[150%] text-dark">
                $84.00
            </span>
        </div>
        <div className="border-b border-[#e6e6e6] py-3 flex items-center justify-between ">
            <p className="font-poppins font-normal text-sm leading-[150%] text-sub-secondary">
                Shipping:
            </p>
            <span className="font-poppins font-medium text-sm leading-[150%] text-dark">
                Free
            </span>
        </div>
        <div className=" py-3 flex items-center justify-between ">
            <p className=" font-poppins font-normal text-sm leading-[150%] text-sub-secondary">
                Total:
            </p>
            <span className="font-poppins font-semibold text-base leading-[150%] text-dark">
                $84.00
            </span>
        </div>
        </div>

        <button className="mt-5 cursor-pointer w-full py-4 rounded-full font-poppins font-semibold text-base leading-[120%] text-white bg-primary">
            Proceed to checkout
        </button>
    </div>
  )
}

export default CartTotal