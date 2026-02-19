import ItemCalculation from "./ItemCalculation"
import image1 from "@/assets/images/wishlist-img1.png";
import image2 from "@/assets/images/wishlist-img3.png";
const ProductsCalculation = () => {
  return (
    <div className="w-218 border border-[#e6e6e6] rounded-lg overflow-hidden ">
          <div className="flex border-b border-[#e6e6e6]  py-4 [&>div]:font-poppins [&>div]:font-medium [&>div]:text-sm [&>div]:leading-[100%] [&>div]:tracking-[3%] [&>div]:text-light-gray [&>div]:uppercase ">
            <div className=" w-[40%] pl-5"> Product </div>
            <div className=" w-[20%]"> Price </div>
            <div className=" w-[20%]"> Quantity </div>
            <div className=" w-[20%]"> Subtotal </div>
          </div>

          <div className=" px-5">
            <ItemCalculation imgSrc={image1} alt="Green Capsicum" name="Green Capsicum" price={14.00}/>
            <hr className=" border-[#e6e6e6] my-3" />
            <ItemCalculation imgSrc={image2} alt="Green Capsicum" name="Green Capsicum" price={25.00}/>
            <hr className=" border-[#e6e6e6] my-3" />
            <div className="mt-1 mb-4 flex justify-between items-center [&>button]:cursor-pointer [&>button]:py-3.5 [&>button]:px-8 [&>button]:rounded-full [&>button]:font-poppins [&>button]:font-semibold [&>button]:text-sm [&>button]:leading-[120%] [&>button]:text-sub-secondary [&>button]:bg-[#f2f2f2]">
              <button> Return to shop </button>
              <button> Update Cart </button>
            </div>
          </div>
    </div> 
  )
}

export default ProductsCalculation