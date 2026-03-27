"use client"

import SearchIcon from '@/assets/icons/SearchIcon'
import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoCloseOutline } from 'react-icons/io5'


const SearchModal = () => {
    const [active, setActive] = useState<boolean>(false)

  return (
    <span className='flex md:hidden'>
     <button onClick={()=> setActive(!active)} className=' cursor-pointer'>
      <SearchIcon/>    
     </button>

     <div className={` ${active ? 'top-1/2 opacity-100' : ' top-[40%] opacity-0'} rounded-[12px] px-2.5 flex items-center justify-center transition-all duration-500 absolute  -translate-y-1/2 left-1/2 -translate-x-1/2 h-1/4 w-[98%] bg-[#1e1e1e]`}>
        
        <span onClick={()=> setActive(false)} className='bg-[#4344439c] p-1 rounded-full  absolute top-1.5  right-1.5'>
            <IoCloseOutline className=' cursor-pointer text-white text-lg' />
        </span>

        <input type="text" placeholder='Search...' className='w-full bg-[#434443] rounded-[50px] font-normal text-sm leading-[150%] font-poppins text-white box-border outline-hidden py-2 pl-4 pr-10' />
        <CiSearch className=' cursor-pointer text-white absolute top-1/2 -translate-y-1/2  right-5 text-2xl' />
     </div>
    </span>
  )
}

export default SearchModal