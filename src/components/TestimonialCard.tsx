import qouteImg from '@/assets/images/qoute.png'
import Image, { StaticImageData } from 'next/image'
import Rating from '@/assets/images/five-star.png'
interface PropsType {
    imageSrc: StaticImageData,
    alt: string,
    name: string,
}

const TestimonialCard = ({imageSrc, alt, name} : PropsType) => {
  return (
    <div className=" p-6 box-border bg-white rounded-lg w-106">
        <Image src={qouteImg} alt='qoute image'/>
        <p className=' max-w-[376px] my-4 font-poppins text-[14px] font-normal leading-[150%] text-sub-secondary'>
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget
        </p>
        <div className='flex items-center justify-between'>
            <div className=' flex items-center gap-x-3 '>
                <Image src={imageSrc} alt={alt}/>
                <div className='flex flex-col'>
                    <span className='font-poppins text-base font-medium leading-[150%] text-dark'> {name} </span>
                    <span className='font-poppins text-[14px] font-normal leading-[150%] text-secondary'>Customer</span>
                </div>
            </div>

            <Image src={Rating} alt='rating'/>
        </div>
    </div>
  )
}

export default TestimonialCard