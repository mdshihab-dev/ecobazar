
import MapIcon from "@/assets/icons/MapIcon"
import Link from "next/link"
import HeaderDropDown from "../HeaderDropDown"
import LoginToggle from "./LoginToggle"

const HeaderTop = () => {
  return (
    <section  className=" px-2 md:px-3 border-b border-[#e6e6e6] py-2 md:py-3">
      <div className=" container flex justify-between">
          <Link href="https://maps.app.goo.gl/1AGRgw3vdF23JtYu6" target='_blank'>
            <div className=' flex items-center gap-2'>
              <MapIcon/>
              <p className=' hidden sm:flex font-poppins text-sm font-normal leading-[130%] text-text'>
                Store Location: Lincoln- 344, Illinois, Chicago, USA
              </p>
              <p className='flex sm:hidden font-poppins text-sm font-normal leading-[130%] text-text'>
                Chicago, USA
              </p>
            </div>
          </Link>

          <div className=' flex items-center'>

            <HeaderDropDown/>
            <span className=' h-3.75 w-px bg-[#e6e6e6] mx-2 md:mx-5'></span>

            {/* Register / Login */}
            <div className=' hidden md:flex items-center justify-center gap-x-1 font-poppins text-sm font-normal leading-[130%] text-text'>
              <span className=' cursor-pointer'>Sign In</span>
              <span>/</span>
              <span className=' cursor-pointer'>Sign Up</span>
            </div>

            <LoginToggle/>
          </div>
      </div>
    </section>
  )
}

export default HeaderTop