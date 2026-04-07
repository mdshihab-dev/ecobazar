import HeartIcon from "@/assets/icons/HeartIcon"
import Button from "../Button"
import CartIcon from "@/assets/icons/CartIcon"
import SearchIcon from "@/assets/icons/SearchIcon"
import Image from "next/image"
import logo from '@/assets/images/Logo.png'
import Link from "next/link"
import SearchModal from "./SearchModal"
const HeaderMiddle = () => {
  return (
     <section className=" container px-2 md:px-3 py-3  md:py-6 flex items-center justify-between">

      <Link href={'/'} className=" inline-block w-[120px] sm:w-[130px] md:w-[140px] lg:w-full">
          <Image src={logo} alt="logo" />
      </Link>

      {/* For md to upper device */}
      <div className=' hidden md:flex items-center'>
        <span className=' box-border flex relative h-[45px] border-t border-b border-l border-r-transparent border-[#e6e6e6] rounded-l-md'>
          <span className=' absolute top-1/2 -translate-y-1/2 left-4'>
            <SearchIcon/>
          </span>
          <input type="text" placeholder='Search' className=' max-lg:w-70 lg:w-75 xl:w-100 font-normal text-base leading-[150%] font-poppins text-light-gray box-border outline-hidden pl-11 pr-3 py-2' />
        </span>
        <Button text='Search' styles='font-poppins text-[14px] bg-primary font-semibold rounded-r-md px-6 py-3.5 leading-[120%] text-white'/>
      </div>


      <div className=' lg:ml-10 flex items-center'>
        <SearchModal/>
        <span className=' flex md:hidden h-6 w-px bg-[#e6e6e6] mx-3 md:mx-4'></span>
        <HeartIcon/>
        <span className=' h-6 w-px bg-[#e6e6e6] mx-3 md:mx-4'></span>

        <div className=' flex items-center gap-x-1.5 md:gap-x-3'>
          <CartIcon/>
          <div className=" hidden md:grid">
            <p className='font-poppins font-normal text-[11px] leading-[120%] text-sub-secondary whitespace-nowrap'>Shopping cart:</p>
            <span className='font-poppins text-[14px] font-medium text-dark'>$57.00</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaderMiddle