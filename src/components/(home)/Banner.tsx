import Image from 'next/image'
import BigBanner from '@/assets/images/Bannar Big.webp'
import SmallBanner1 from '@/assets/images/Bannar1.webp'
import SmallBanner2 from '@/assets/images/Bannar2.webp'
const Banner = () => {
  return (
    <section className=" px-2 md:px-3 container my-3 md:my-6 flex items-center md:justify-center xl:justify-between">
          <div className=' md:mr-3 lg:mr-6 2xl:hidden cursor-pointer mx-auto'>
            <Image src={BigBanner} alt="big banner"/>
          </div>
          <Image src={BigBanner} alt="big banner" className=' hidden 2xl:flex'/>

        <div className=' hidden md:flex flex-col md:gap-3 lg:gap-6'>
          <Image src={SmallBanner1} alt="small banner one"  className=' cursor-pointer'/>
          <Image src={SmallBanner2} alt="small banner two"  className=' cursor-pointer'/>
        </div>
    </section>
  )
}

export default Banner