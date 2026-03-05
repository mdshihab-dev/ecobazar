import Image, { StaticImageData } from "next/image"

interface PropTypes {
    imgSrc: StaticImageData,
    alt: string,
    name: string,
    position: string
}

const TeamMember = ({imgSrc,alt,name,position}:PropTypes) => {
  return (
    <div className=" rounded-[10px] border border-[#e6e6e6] overflow-hidden bg-white transition-shadow duration-300 hover:shadow-2xl">
        <Image src={imgSrc} alt={alt}/>
        <div className=" px-5 pt-4 pb-5">
            <span className=" font-poppins font-medium text-lg leading-[150%] text-dark">
                {name}
            </span>
            <p className="mt-1 font-poppins font-normal text-sm leading-[150%] text-light-gray">
                {position}
            </p>
        </div>
    </div>
  )
}

export default TeamMember