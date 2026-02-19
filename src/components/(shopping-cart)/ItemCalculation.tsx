"use client"

import CloseIcon from "@/assets/icons/CloseIcon"
import Image, { StaticImageData } from "next/image"
import Counter from "../Counter"
import { useState } from "react"

interface PropsType {
    imgSrc: StaticImageData,
    alt: string,
    name: string,
    price: number,
}

const ItemCalculation = ({ imgSrc, alt, name, price,}:PropsType) => {
    const [count, setCount] = useState<number>(1);

  return (
    <div className=" flex items-center">
        <div className=" w-[40%] flex items-center gap-3"> 
            <Image src={imgSrc} alt={alt}/>
            <span className=" font-poppins font-normal text-base leading-[150%] text-dark">
                {name}
            </span>
        </div>
        <div className=" w-[20%] flex gap-0.5 items-center [&>span]:font-poppins [&>span]:leading-[150%] [&>span]:text-base"> 
            <span className="font-medium text-dark">
                ${price.toFixed(2)}
            </span>
        </div>
        <div className=" w-[20%] flex gap-0.5 items-center [&>span]:font-poppins [&>span]:leading-[150%] [&>span]:text-base"> 
           <Counter count={count} setCount={setCount}/>
        </div>
        <div className=" w-[20%] flex justify-between items-center [&>span]:font-poppins [&>span]:leading-[150%] [&>span]:text-base"> 
            <span className=" pl-5 font-medium text-dark">
                ${count * price < 1 ? '0.00' : (count * price).toFixed(2)}
            </span>
            <span className=" cursor-pointer">
                <CloseIcon/>
            </span>
        </div>
        
    </div>
  )
}

export default ItemCalculation