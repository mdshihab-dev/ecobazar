import Image from 'next/image'
import BigBanner from '@/assets/images/Bannar Big.webp'
import SmallBanner1 from '@/assets/images/Bannar1.webp'
import SmallBanner2 from '@/assets/images/Bannar2.webp'
const Banner = () => {
  return (
    <section className=" container my-6 flex items-center justify-between">
        <Image src={BigBanner} alt="big banner" className=' cursor-pointer'/>
        <div className=' flex flex-col gap-6'>
          <Image src={SmallBanner1} alt="small banner one"  className=' cursor-pointer'/>
          <Image src={SmallBanner2} alt="small banner two"  className=' cursor-pointer'/>
        </div>
    </section>
  )
}

export default Banner