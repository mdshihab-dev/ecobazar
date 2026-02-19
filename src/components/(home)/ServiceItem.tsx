import Image, { StaticImageData } from "next/image"

interface ServiceData {
    imgSrc: StaticImageData,
    alt: string
    title: string,
    description: string
}

const ServiceItem = ({imgSrc,title,description,alt}:ServiceData) => {
  return (
    <div className=" flex items-center gap-x-4">
        <Image src={imgSrc} alt={alt}/>
        <div className=' flex flex-col gap-2'>
            <h4 className='font-poppins font-semibold text-base leading-[120%] text-dark'>
                {title}
            </h4>
            <p className='font-poppins font-normal text-[14px] leading-[150%] text-secondary'>
                {description}
            </p>
        </div>
    </div>
  )
}

export default ServiceItem