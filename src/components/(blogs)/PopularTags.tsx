"use client"
import { PopulerTagsData } from '@/projectData/data'
import { useState } from 'react'

const PopularTags = () => {
    const [active,setActive] = useState<number>(0)
  return (
    <div>
        <h4 className=' font-poppins font-medium text-xl leading-[150%] text-dark'>
            Popular Tag
        </h4>

        <div className="mt-4 space-x-2 space-y-2">
            {PopulerTagsData.map((tag,index)=>(
                <button onClick={()=> setActive(index)} key={index} className={` ${active == index ? ' bg-primary text-white' : 'bg-[#f2f2f2]  text-dark'} cursor-pointer px-4 py-1.5 rounded-[50px] font-poppins font-normal text-sm leading-[150%]`}> 
                    {tag}
                </button>
            ))

            }
        </div>
    </div>
  )
}

export default PopularTags