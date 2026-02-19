"use client"

import { useState } from "react"
import Description from "./Description"
import AdditionalInfo from "./AdditionalInfo"
import CustomerFeedback from "./CustomerFeedback"

const ProductDetails = () => {
    const [active,setActive] = useState<number>(0)
    const tabs:string[] = ['Descriptions','Additional Information','Customer Feedback']
  return (
    <section>
        <div className={`flex justify-center border-b border-[#e6e6e6] `}>
            {tabs.map((tab,index)=> 
             <span onClick={()=> setActive(index)} key={index} className={`p-4 border-b-2 ${active === index ? 'border-primary text-dark' : 'border-transparent text-light-gray'} font-poppins font-medium text-base leading-[150%]  cursor-pointer`}> {tab} </span>
            )}
        </div>

        {active === 0 && <Description/> }
        {active === 1 && <AdditionalInfo/>}
        {active === 2 && <CustomerFeedback/>}
        
      
    </section>
  )
}

export default ProductDetails