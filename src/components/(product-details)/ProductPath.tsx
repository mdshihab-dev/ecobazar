import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"

const ProductPath = () => {
  return (
    <div className=" flex items-center justify-center">
        <Link href={'#'} className=" font-poppins font-normal leading-[150%] text-base text-secondary">
            Category
        </Link>
        <IoIosArrowForward className=" text-text mx-3"/>
        <Link href={'#'} className=" font-poppins font-normal leading-[150%] text-base text-secondary">
            Vegetables
        </Link>
        <IoIosArrowForward className=" text-text mx-3"/>
        <Link href={'#'} className=" font-poppins font-normal leading-[150%] text-base text-primary">
            Chinese Cabbage
        </Link>
    </div>
  )
}

export default ProductPath