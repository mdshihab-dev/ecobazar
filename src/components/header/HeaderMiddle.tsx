import HeartIcon from "@/assets/icons/HeartIcon"
import Button from "../Button"
import CartIcon from "@/assets/icons/CartIcon"
import SearchIcon from "@/assets/icons/SearchIcon"
import Image from "next/image"
import logo from '@/assets/images/Logo.png'
import Link from "next/link"
const HeaderMiddle = () => {
  return (
     <section className=" container py-6 flex items-center justify-between">

      <Link href={'/'}>
          <Image src={logo} alt="logo" />
      </Link>

      <div className=' flex items-center'>
        <span className=' box-border flex relative h-[45px] border-t border-b border-l border-r-transparent border-[#e6e6e6] rounded-l-md'>
          <span className=' absolute top-1/2 -translate-y-1/2 left-4'>
            <SearchIcon/>
          </span>
          <input type="text" placeholder='Search' className=' w-100 font-normal text-base leading-[150%] font-poppins text-light-gray box-border outline-hidden pl-11 pr-3 py-2' />
        </span>
        <Button text='Search' styles='font-poppins text-[14px] bg-primary font-semibold rounded-r-md px-6 py-3.5 leading-[120%] text-white'/>
      </div>

      <div className=' flex items-center'>
        <HeartIcon/>
        <span className=' h-6 w-px bg-[#e6e6e6] mx-4'></span>

        <div className=' flex items-center gap-x-3'>
          <CartIcon/>
          <div>
            <p className='font-poppins font-normal text-[11px] leading-[120%] text-sub-secondary'>Shopping cart:</p>
            <span className='font-poppins text-[14px] font-medium text-dark'>$57.00</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaderMiddle