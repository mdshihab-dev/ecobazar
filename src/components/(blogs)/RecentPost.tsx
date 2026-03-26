import Image, { StaticImageData } from "next/image"
import { MdOutlineDateRange } from "react-icons/md"

interface PropType{
    imgSrc: StaticImageData,
    alt: string,
    title: string
}


const RecentPost = ({imgSrc,alt,title}: PropType) => {
  return (
    <div className=" cursor-pointer flex gap-x-3">
        <Image src={imgSrc} alt={alt}/>

        <div className=" max-w-78">
            <p className=" font-poppins font-medium text-base leading-[150%] text-dark">
                {title}
            </p>
            <p className="mt-2 flex items-center gap-1.5">
                <MdOutlineDateRange className=" text-xl text-primary"/>
                <span className="font-poppins font-normal text-sm leading-[150%] text-text">
                    Apr 25, 2021
                </span>
            </p>
        </div>
    </div>
  )
}

export default RecentPost