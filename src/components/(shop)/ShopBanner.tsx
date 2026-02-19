import Image from "next/image"
import banner from '@/assets/images/shop-bannar.webp'
import HomeIcon from "@/assets/icons/HomeIcon"
import { IoIosArrowForward } from "react-icons/io"
import Link from "next/link"
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon"
import SaleTimer from "../SaleTimer"
const ShopBanner = () => {
  return (
    <section className=" container">
        <div className=" py-6">
            <div className=" flex items-center justify-start gap-x-3">
                <Link href={'#'}>
                    <HomeIcon/>
                </Link>
                <IoIosArrowForward className=" text-text"/>
                <Link href={'#'}>
                    <span className=" font-poppins font-normal text-base text-text">Categories</span>
                </Link>
                <IoIosArrowForward className=" text-text"/>
                <Link href={'#'}>
                    <span className=" font-poppins font-normal text-base text-text">Vegetables</span>
                </Link>
            </div>
        </div>
        
        <div className=" relative">
            <Image src={banner} alt="Shop banner"/>

            <div className=" absolute top-0 left-0 pl-15 pt-17">
            <div className=" flex gap-x-15">
              <div>
                <p className=" text-white uppercase font-poppins font-medium text-sm leading-[100%] tracking-[3%]">
                    Best Deals
                </p>
                <h2 className="mt-3 font-poppins font-semibold text-[40px] leading-[120%] text-white">
                    Sale of the Month
                </h2>

                <div className=" mt-5 mb-8">
                 <SaleTimer/>
                </div>

                <button className="mt-6 cursor-pointer text-white flex items-center gap-x-3 py-3.5 px-8 rounded-full bg-primary">
                    <span className="font-poppins font-semibold text-[14px] leading-[120%]">
                        Shop Now
                    </span>
                    <ArrowRightIcon />
                </button>
                </div>

                <div className=" relative -top-2.5 w-25 h-25 text-white bg-warning rounded-full flex flex-col items-center justify-center">
                    <p className=" font-poppins text-2xl leading-[150%] "> 56% </p>
                    <span className=" font-poppins text-sm leading-[150%] tracking-[3%]"> Off </span>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ShopBanner