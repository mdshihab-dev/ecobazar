import ArrowRightIcon from "@/assets/icons/ArrowRightIcon"
import { StaticImageData } from "next/image"
import Link from "next/link"
import ProductPrototype from "../ProductPrototype"

interface ProductType {
    imgSrc: StaticImageData,
    alt: string,
    name: string,
    price: number,
    oldPrice?: number,
    discount: boolean,
}

interface ProductDataType {
    heading: string,
    products: ProductType[]
}

const PopulerDeals = ({ heading, products } :ProductDataType) => {
  return (
    <section className=" container">
        <div className=" flex justify-between items-center">
            <h3 className="font-poppins font-semibold text-[32px] leading-[120%] text-dark">
                {heading}
            </h3>

            <div className=" flex items-center justify-center gap-x-3">
                <Link href={'#'} className="font-poppins text-primary font-medium text-base leading-[150%]">
                    View All
                </Link>
                <span className=" text-[#00B307]">
                  <ArrowRightIcon/>
                </span>
            </div>
        </div>

        <div className=" mt-8 flex flex-wrap ">
            {
                products.map((item,index)=>{
                    return <ProductPrototype key={index} imgSrc={item.imgSrc} alt={item.alt} name={item.name} price={item.price} oldPrice={item.oldPrice} discount={item.discount}/>
                })
            }
        </div>
    </section>
  )
}

export default PopulerDeals