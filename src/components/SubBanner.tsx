import HomeIcon from '@/assets/icons/HomeIcon'
import subanner from '@/assets/images/sub-banner.webp'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

interface PropsType {
    children: React.ReactNode
}

const SubBanner = ({children}:PropsType) => {
  return (
    <div className=' relative'>
        <Image src={subanner} alt='Sub-banner' className=' mx-auto'/>
        <div className='w-full h-full absolute top-0 left-0'>
            <div className=' container h-full flex items-center'>
                <Link href={'#'}>
                    <HomeIcon/>
                </Link>
                <IoIosArrowForward className=" text-text mx-3"/>
                {children}
            </div>
        </div>
    </div>
  )
}

export default SubBanner