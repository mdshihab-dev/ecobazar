"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

interface Time{
    days: number | string,
    hours: number | string,
    minutes: number | string,
    seconds: number | string
}


const SaleTimer = () => {
    const path = usePathname()
    const [time,setTime] = useState<Time>({
        days:0,
        hours:0,
        minutes:0,
        seconds:0
    })

    useEffect(()=>{
        const timer = setInterval(()=>{
                const deadline = new Date('December 31, 2026 11:59:59 PM +06').getTime()
                const currentTime = new Date().getTime()
                const difference = deadline - currentTime
                
                if (difference < 0) {
                    return setTime({
                        days: "00",
                        hours: "00",
                        minutes: "00",
                        seconds: "00"
                    })
                } else {
                    
                const days = Math.floor(difference / (1000 * 60 * 60 * 24))
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
                const minutes = Math.floor((difference % (1000 * 60 * 60) / (1000 * 60)))
                const seconds = Math.floor((difference % (1000 * 60) / 1000))

                setTime({
                    days: days < 10 ? `0${days}` : days,
                    hours: hours < 10 ? `0${hours}` : hours,
                    minutes: minutes < 10 ? `0${minutes}` : minutes,
                    seconds: seconds < 10 ? `0${seconds}` : seconds
                })
                }
        },1000)

        return ()=> clearInterval(timer)
    },[])


  return (
    <div className=" flex items-start">
            <div className=" flex justify-center flex-col gap-1">
                <span className={` font-poppins font-normal text-2xl leading-[150%] ${path === "/shop" ? "text-primary" : "text-white"} `}> {time.days} </span>
                <span className=" font-poppins font-normal text-sm leading-[100%] tracking-[3%] text-white"> Days </span>
            </div>

            <div className=" relative bottom-0.5 mx-2 font-poppins font-normal text-2xl leading-[150%] text-white"> : </div>

            <div className=" flex justify-center flex-col gap-1">
                <span className={` font-poppins font-normal text-2xl leading-[150%] ${path === "/shop" ? "text-primary" : "text-white"} `}> {time.hours} </span>
                <span className=" relative -left-0.5 font-poppins font-normal text-sm leading-[100%] tracking-[3%] text-white"> Hours </span>
            </div>

            <div className=" relative bottom-0.5 mx-2 font-poppins font-normal text-2xl leading-[150%] text-white"> : </div>

            <div className=" flex justify-center flex-col gap-1">
                <span className={` font-poppins font-normal text-2xl leading-[150%] ${path === "/shop" ? "text-primary" : "text-white"} `}> {time.minutes} </span>
                <span className=" relative -left-0.5 font-poppins font-normal text-sm leading-[100%] tracking-[3%] text-white"> Mins </span>
            </div>

            <div className=" relative bottom-0.5 mx-2 font-poppins font-normal text-2xl leading-[150%] text-white"> : </div>

            <div className=" flex justify-center flex-col gap-1">
                <span className={` font-poppins font-normal text-2xl leading-[150%] ${path === "/shop" ? "text-primary" : "text-white"} `}>{time.seconds} </span>
                <span className=" relative -left-0.5 font-poppins font-normal text-sm leading-[100%] tracking-[3%] text-white"> Secs </span>
            </div>
    </div>
  )
}

export default SaleTimer