import DropDowns from "./DropDowns"
import {CategoryOptions ,PriceOptions ,RatingOptions,SortOptions,ShowOptions} from '@/projectData/data'
const ProductControls = () => {
  return (
    <section className="  pt-10 pb-8">
       <div className="container flex items-center justify-between">
          <div className=" flex gap-x-4">
            <DropDowns defaults="Select Category" options={CategoryOptions}/>
            <DropDowns defaults="Select Price" options={PriceOptions}/>
            <DropDowns defaults="Select Rating" options={RatingOptions}/>
          </div>
          <div className=" flex gap-x-4">
            <DropDowns defaults="Sort by: Latest" options={SortOptions}/>
            <DropDowns defaults="Show: 16" options={ShowOptions}/>
          </div>
       </div>

       <div className=" py-4 mt-6 border border-[#e6e6e6]">
        <div className="container flex items-center justify-between ">
          <div className=" flex items-center">
            <p className=" font-poppins font-normal text-sm leading-[150%] text-light-gray">
              Active Filters:
            </p>
            <div className="ml-2 font-poppins font-normal text-sm leading-[150%] text-light-gray">
              Currently there is no filter active
            </div>
          </div>
          <div className=" font-poppins font-normal text-sm leading-[150%] text-light-gray">
            0 Results found.
          </div>
       </div>
       </div>
    </section>
  )
}

export default ProductControls