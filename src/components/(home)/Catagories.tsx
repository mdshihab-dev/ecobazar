import ArrowRightIcon from "@/assets/icons/ArrowRightIcon"
import CatagoryItem from "./CatagoryItem"
import Link from "next/link"
import { CatagoriesData } from "@/projectData/data"
// type ComponentType = React.ReactNode

const Catagories = () => {
  return (
    <section className=" container py-15">
        <div className=" flex justify-between items-center">
            <h3 className="font-poppins font-semibold text-[32px] leading-[120%] text-dark">
                Popular Categories
            </h3>

            <div className=" flex items-center justify-center gap-x-3">
                <Link href={'#'} className=" text-primary font-poppins font-medium text-base leading-[150%]">
                    View All
                </Link>
                <span className=" text-[#00B307]">
                  <ArrowRightIcon/>
                </span>
            </div>
        </div>

        <div className=" mt-8 flex gap-6 flex-wrap">
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