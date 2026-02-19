import Image, { StaticImageData } from "next/image"

interface CatagoryProps {
    imgSrc: StaticImageData,
    alt: string
    name: string,
}

const CatagoryItem = ({imgSrc, alt, name}: CatagoryProps) => {
  return (
    <div className=" group cursor-pointer flex flex-col items-center justify-center w-50 h-[213px] border border-[#e6e6e6] rounded-[5px] hover:border-hard-primary hover:shadow-[0px_0px_15px_2px_rgba(0,0,0,0.1)] transition-all duration-500">
        <Image src={imgSrc} alt={alt} />
        <p className=" mt-4 font-poppins font-medium text-lg leading-[150%] text-dark transition-all duration-500 group-hover:text-hard-primary">
          {name}
        </p>
    </div>
  )
}

export default CatagoryItem