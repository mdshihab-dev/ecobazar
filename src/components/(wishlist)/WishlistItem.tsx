import CloseIcon from "@/assets/icons/CloseIcon"
import Image, { StaticImageData } from "next/image"

interface PropsType {
    imgSrc: StaticImageData,
    alt: string,
    name: string,
    price: number,
    oldPrice?: number,
    status: "In Stock" | "Out of Stock"
}

const WishlistItem = ({ imgSrc, alt, name, price, oldPrice, status}:PropsType) => {
  return (
    <div className=" flex">
        <div className=" w-[40%] flex items-center gap-5"> 
            <Image src={imgSrc} alt={alt}/>
            <span className=" font-poppins font-normal text-base leading-[150%] text-dark">
                {name}
            </span>
        </div>
        <div className=" w-[30%] flex gap-0.5 items-center [&>span]:font-poppins [&>span]:leading-[150%] [&>span]:text-base"> 
            <span className="font-medium text-dark">
                ${price.toFixed(2)}
            </span>
            {oldPrice &&
                <span  className="font-normal text-secondary">
                ${oldPrice.toFixed(2)}
                </span>
            }
        </div>
        <div className=" w-[30%] pl-2.5 flex items-center justify-between"> 
          <div className=" w-17.5 h-7.5 flex items-center justify-center relative ">
            <div className=" bg-[#20B526] h-full w-full opacity-20 py-1 px-2 rounded absolute top-0 left-0" />
            <span className="text-hard-primary font-poppins font-normal text-[14px] leading-[150%]">
              {status}
            </span>
          </div>

          <div className=" flex items-center gap-6">
            <button className="cursor-pointer py-3.5 px-8 bg-primary rounded-full font-poppins text-white font-semibold text-sm leading-[120%]">
                Add to Cart
            </button>
            <button className=" cursor-pointer">
                <CloseIcon/>
            </button>
          </div>
        </div>
    </div>
  )
}

export default WishlistItem