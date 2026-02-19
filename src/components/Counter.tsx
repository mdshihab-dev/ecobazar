"use client"

import { FiMinus, FiPlus } from "react-icons/fi"

interface CounterProps {
    count: number,
    setCount: (value: number)=> void,
}

const Counter = ({count, setCount}: CounterProps) => {

  return (
    <div className=" w-31 h-12.5 p-2 flex items-center justify-between rounded-full border border-[#e6e6e6]">
        <button disabled={count === 0} onClick={()=> setCount(count - 1)} className=" cursor-pointer w-8.5 h-8.5 rounded-full bg-[#F2F2F2] flex items-center justify-center">
            <FiMinus className="text-dark"/>
        </button>

        <span className="w-10 text-center select-none font-poppins text-base font-normal leading-[150%] text-dark">
            {count}
        </span>

        <button onClick={()=> setCount(count + 1 )} className="cursor-pointer w-8.5 h-8.5 rounded-full bg-[#F2F2F2] flex items-center justify-center">
            <FiPlus className="text-dark"/>
        </button>
    </div>
  )
}

export default Counter