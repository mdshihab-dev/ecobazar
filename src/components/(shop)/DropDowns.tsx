"use client"
import { useContext, useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { ProductContext } from "../MainContext";
interface PropTypes {
    defaults: string,
    options: Array<string | number>,
}

const DrowDowns = ({defaults, options}: PropTypes) => {
    const [openDropdown,setOpenDropdown] = useState<boolean>(false)
    const [selectedOption,setSelectedOption] = useState<number | null>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const {setShowProduct} = useContext(ProductContext)


    useEffect(()=>{
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
              setOpenDropdown(false);
            }
          }
          document.addEventListener('mousedown', handleClickOutside);
          return () => document.removeEventListener('mousedown', handleClickOutside)
    },[])

    const handleClick = (index: number, value:number) => {
        setSelectedOption(index)
        setOpenDropdown(false)
        if (defaults === 'Show: 16') {
            setShowProduct(value)
        }
    }

  return (
    <div className=" relative">
    <div onClick={()=> setOpenDropdown(!openDropdown)} className=" cursor-pointer border border-[#e6e6e6] bg-white w-44.5 h-10 rounded flex items-center justify-center gap-x-5">
         {selectedOption === null ?
            <span className=" font-poppins text-sm font-normal leading-[150%] text-sub-secondary"> { defaults} </span>
            :
            <span className=" font-poppins text-sm font-normal leading-[150%] text-sub-secondary"> { defaults === "Show: 16" ?  `Show: ${options[selectedOption]}` : options[selectedOption] } </span>
         }
         <IoIosArrowDown  className={`${openDropdown ? 'rotate-180' : 'rotate-0'} text-sub-secondary transition-all duration-300`}/>
    </div>

    <div ref={dropdownRef}>
        {openDropdown &&
        <div  className=' rounded overflow-hidden z-50 absolute bg-white top-11 left-0 inline-block shadow transition-all font-poppins text-sm font-normal leading-[130%] text-text border border-[#e6e6e6] [&>div]:w-44.5 [&>div]:h-8 [&>div]:flex [&>div]:items-center [&>div]:px-2.5 [&>div]:border-b [&>div]:border-[#e6e6e6] [&>div]:last:border-b-transparent [&>div]:hover:bg-[#ddd] [&>div]:cursor-pointer '>
            {options.map((item,index) => 
                <div onClick={()=> handleClick(index, item as number)} key={index}>
                    {defaults === 'Show: 16' ? `Show: ${item}` : item}
                </div>
            )}
        </div>
    }
    </div>
  </div> 
  )
}

export default DrowDowns