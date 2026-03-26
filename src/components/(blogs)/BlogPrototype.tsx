import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { CiUser } from 'react-icons/ci'
import { FaRegUser } from 'react-icons/fa'
import { GoComment, GoTag } from 'react-icons/go'

interface PropType {
    imgSrc: StaticImageData,
    alt: string
}

const BlogPrototype = ({imgSrc,alt}: PropType) => {
  return (
    <div className=' overflow-hidden rounded-[8px] border border-[#e6e6e6]'>
        <Image src={imgSrc} alt={alt}/>

        <div className=' p-6'>
            <div className=' flex items-center gap-x-4'>
                <p className=' flex items-center gap-x-1 font-poppins font-normal text-sm leading-[150%] text-sub-secondary'>
                    <GoTag className=' text-lg'/>
                    Food
                </p>
                <p className=' flex items-center gap-x-1 font-poppins font-normal text-sm leading-[150%] text-sub-secondary'>
                    <CiUser className=' text-xl'/>
                    by Admin
                </p>
                <p className=' flex items-center gap-x-1 font-poppins font-normal text-sm leading-[150%] text-sub-secondary'>
                    <GoComment className=' text-lg'/>
                    65 Comments
                </p>
            </div>
            <p className='mt-2 mb-5 max-w-94 font-poppins font-medium text-lg leading-[150%] text-dark'>
                Curabitur porttitor orci eget neque
                accumsan venenatis. Nunc fermentum.
            </p>
            <Link href={'#'} className=' flex items-center gap-x-3 font-poppins font-semibold text-base leading-[120%] text-primary'>
                Read More
                <BsArrowRight  />
            </Link>
        </div>
    </div>
  )
}

export default BlogPrototype