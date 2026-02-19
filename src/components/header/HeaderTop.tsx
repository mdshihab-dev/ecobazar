import MapIcon from "@/assets/icons/MapIcon"
import Link from "next/link"
import HeaderDropDown from "../HeaderDropDown"

const HeaderTop = () => {
  return (
    <section  className=" border-b border-[#e6e6e6] py-3">
      <div className=" container flex justify-between">
          <Link href="https://maps.app.goo.gl/1AGRgw3vdF23JtYu6" target='_blank'>
            <div className=' flex items-center gap-2'>
              <MapIcon/>
              <p className='font-poppins text-sm font-normal leading-[130%] text-text'>
                Store Location: Lincoln- 344, Illinois, Chicago, USA
              </p>
            </div>
          </Link>

          <div className=' flex items-center'>

            <HeaderDropDown/>
            <span className=' h-3.75 w-px bg-[#e6e6e6] mx-5'></span>

            {/* Register / Login */}
            <div className=' flex items-center justify-center gap-x-1 font-poppins text-sm font-normal leading-[130%] text-text'>
              <span className=' cursor-pointer'>Sign In</span>
              <span>/</span>
              <span className=' cursor-pointer'>Sign Up</span>
            </div>
          </div>
      </div>
    </section>
  )
}

export default HeaderTop