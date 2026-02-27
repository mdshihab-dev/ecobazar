"use client"

import Image, { StaticImageData } from "next/image"
import Rating from '@/assets/images/Rating.png'
import BagIcon from "@/assets/icons/BagIcon"
import { HiOutlineEye } from "react-icons/hi"
import { GoHeart } from "react-icons/go"
import { usePathname } from "next/navigation"

interface ProductType {
    imgSrc: StaticImageData,
    alt: string,
    name: string,
    price: number,
    oldPrice?: number,
    discount: boolean,
}

const ProductPrototype = ({imgSrc, alt, name, price, oldPrice, discount}: ProductType) => {
    const path = usePathname()

  return (
    <div className={`${path === '/' ? 'w-66 h-[327px] ' : 'w-78 h-[407px] rounded-lg'} overflow-hidden bg-white relative cursor-pointer transition-all duration-300 group hover:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] hover:border-[#2c732e] border border-[#e6e6e6] flex flex-col justify-between `}>

        {discount &&
            <span className=" absolute top-4 left-4 z-30 flex items-center justify-center font-poppins text-[14px] leading-[150%] font-normal text-white w-20 h-[27px] bg-danger rounded">Sale 50%</span>
        }
        
        <div className={`${path === '/' ? '' : 'w-[312px] h-[312px] items-center'} flex justify-center relative `}>
          <Image src={imgSrc} alt={alt} className=" bg-center"/>

          <div className=" transition-all duration-500 absolute flex flex-col gap-1.5 top-4 opacity-0 group-hover:opacity-100 -right-10 group-hover:right-4">
            <span className=" group/group-icon bg-white hover:bg-primary hover:border-primary text-xl cursor-pointer w-10 h-10 flex items-center justify-center transition-colors duration-500 rounded-full border border-[#f2f2f2]">
            <GoHeart className="transition-colors duration-500 text-dark group-hover/group-icon:text-white"/>
            </span>
            <span className=" group/group-icon bg-white hover:bg-primary hover:border-primary text-xl cursor-pointer w-10 h-10 flex items-center justify-center transition-colors duration-500 rounded-full border border-[#f2f2f2]">
            <HiOutlineEye className="transition-colors duration-500 text-dark group-hover/group-icon:text-white"/>
            </span>
          </div>
        </div>

        <div className="p-3 flex items-center justify-between">
            <div>
                <h4 className=" font-poppins text-[14px] font-normal leading-[150%] text-sub-secondary">
                    {name}
                </h4>
                <span className="font-poppins text-base font-medium leading-[150%] text-dark">
                  ${price.toFixed(2)}
                </span>
                {oldPrice && <span className="font-poppins text-base font-normal leading-[150%] text-secondary line-through ml-1">
                    ${oldPrice.toFixed(2)}
                </span>}
                <Image src={Rating} alt="rating" className=" mt-1.5"/>
            </div>
            
            <button className="mr-1 cursor-pointer w-10 h-10 flex items-center justify-center transition-colors duration-500 rounded-full bg-[#F2F2F2] hover:bg-primary group/icon">
              <span className="transition-colors duration-500 text-dark group-hover/icon:text-white">
              <BagIcon/>
            </span>
            </button>
        </div>
    </div>
  )
}

export default ProductPrototype