"use client"
import { useState } from 'react'
import { LuLogIn } from 'react-icons/lu'
const LoginToggle = () => {
    let [active,setActive] = useState<boolean>(false)

  return (
  <div className=" relative flex md:hidden">
        <button onClick={()=> setActive(!active)} className=' cursor-pointer'>
          <LuLogIn className=" text-lg text-text"/>
        </button>

        <div className={` ${active ? 'flex' : 'hidden'} z-50 whitespace-nowrap absolute top-8 -left-17 bg-white flex-col gap-y-2 px-2 py-1.5 rounded-[8px] shadow border border-[#e6e6e6] font-poppins text-sm font-normal leading-[130%] text-text`}>
          <span className=' cursor-pointer transition-colors px-2 py-1 rounded-[6px] hover:bg-[#e7e5e5]'>Sign In</span>
          <span className=' cursor-pointer transition-colors px-2 py-1 rounded-[6px] hover:bg-[#e7e5e5]'>Sign Up</span>
        </div>
      </div>
  )
}

export default LoginToggle