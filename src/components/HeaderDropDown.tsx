"use client"

import { useEffect, useRef, useState } from 'react'
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";

const HeaderDropDown = () => {
    const [language,setLanguage] = useState<string[]>(['English','Bangali','Arabic','Hindi','Spanish','French'])
    const [currency,setCurrency] = useState<string[]>(['USD', 'BDT', 'EUR', 'GBP', 'INR'])
    const [langOpen,setLangOpen] = useState<boolean>(false)
    const [currncyOpen,setCurrencyOpen] = useState<boolean>(false)
    const [selectedLang,setSelectedLang] = useState<number>(0)
    const [selectedCurrency,setSelectedCurrency] = useState<number>(0)
    const languageRef = useRef<HTMLDivElement>(null)
    const currencyRef = useRef<HTMLDivElement>(null)

     useEffect(()=>{
        const languageDropDown = (e: MouseEvent)=>{
        if(languageRef.current && !languageRef.current.contains(e.target as Node)){
            setLangOpen(false)
        }
        }
        const currencyDropDown = (e: MouseEvent)=>{
        if(currencyRef.current && !currencyRef.current.contains(e.target as Node)){
            setCurrencyOpen(false)
        }
        }
        document.addEventListener('click', languageDropDown)
        document.addEventListener('click', currencyDropDown)
        return ()=> {
        document.removeEventListener('click', languageDropDown)
        document.removeEventListener('click', currencyDropDown)
        }

  },[])

  return (
     <div className=' flex items-center justify-center gap-x-2.5 md:gap-x-5'>
             {/* currency  drop down*/}
             <div ref={languageRef} className='relative'>
              <div onClick={()=> setLangOpen(!langOpen)} className='  cursor-pointer flex items-center justify-center gap-x-1.5'>
                <span className='font-poppins text-sm font-normal leading-[130%] text-text'> {language[selectedLang]} </span>
                <span className={`${langOpen ? 'rotate-180' : 'rotate-0'} transition-all`}><ArrowDownIcon/></span>
              </div>

                {langOpen &&
                (
                <div  className=' z-50 rounded-[6px] overflow-hidden absolute bg-white top-6 -left-4 inline-block shadow transition-all font-poppins text-sm font-normal leading-[130%] text-text border border-[#e6e6e6] [&>div]:px-4 [&>div]:py-1 [&>div]:border-b [&>div]:border-[#e6e6e6] [&>div]:last:border-b-transparent [&>div]:hover:bg-[#ddd] [&>div]:cursor-pointer '>
                  {language.map((item,index) => 
                      <div onClick={()=> { setSelectedLang(index) ; setLangOpen(false)}} key={index}>{item}</div>
                    )}
                </div>
                )
              }

             </div>

              {/* currency  drop down*/}
             <div ref={currencyRef} className='relative'>
              <div onClick={()=> setCurrencyOpen(!currncyOpen)} className='cursor-pointer flex items-center justify-center gap-x-1.5'>
                <span className='font-poppins text-sm font-normal leading-[130%] text-text'> {currency[selectedCurrency]} </span>
                <span className={`${currncyOpen ? 'rotate-180' : 'rotate-0'} transition-all`}><ArrowDownIcon/></span>
              </div>

                {currncyOpen &&
                (
                <div  className=' z-50 absolute bg-white top-6 -left-1 inline-block rounded-[6px] overflow-hidden shadow transition-all font-poppins text-sm font-normal leading-[130%] text-text border border-[#e6e6e6] [&>div]:border-b [&>div]:border-[#e6e6e6] [&>div]:last:border-b-transparent [&>div]:px-4 [&>div]:py-1 [&>div]:hover:bg-[#ddd] [&>div]:cursor-pointer '>
                  {currency.map((item,index) => 
                      <div onClick={()=> { setSelectedCurrency(index) ; setCurrencyOpen(false)}} key={index}>{item}</div>
                    )}
                </div>
                )
              }
             </div>
        </div>
  )
}

export default HeaderDropDown