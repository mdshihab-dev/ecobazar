import ArrowRightIcon from "@/assets/icons/ArrowRightIcon"
import CatagoryItem from "./CatagoryItem"
import Link from "next/link"
import { CatagoriesData } from "@/projectData/data"
// type ComponentType = React.ReactNode

const Catagories = () => {
  return (
    <section className=" container px-2 md:px-3  xl:px-0 py-6 md:py-10 lg:py-15">
        <div className=" flex justify-between items-center">
            <h3 className="font-poppins font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-[120%] text-dark">
                Popular Categories
            </h3>

            <div className=" flex items-center justify-center gap-x-3">
                <Link href={'#'} className=" text-primary font-poppins font-medium text-sm md:text-base leading-[150%]">
                    View All
                </Link>
                <span className=" text-[#00B307]">
                  <ArrowRightIcon/>
                </span>
            </div>
        </div>

        <div className=" mt-4 md:mt-6 lg:mt-8 flex max-sm:justify-center max-sm:items-center gap-2 md:gap-4 lg:gap-6 flex-wrap">
            {
            CatagoriesData.map((item,index)=>{
              return  <CatagoryItem key={index} imgSrc={item.imgSrc} alt={item.alt} name={item.name}/>
            })
            }
        </div>
    </section>
  )
}

export default Catagories