import steps from '@/assets/images/steps.png'
import mango from '@/assets/images/mango.png'
import foodNetwork from '@/assets/images/food-network.png'
import foodCo from '@/assets/images/food-co.png'
import bookOff from '@/assets/images/bookoff.png'
import g_series from '@/assets/images/g-resies.png'
import Image from 'next/image'

const AboutBrands = () => {
  return (
    <section className='container flex items-center justify-between py-20'>
            <Image src={steps} alt='Steps brand'/>
            <span className=' w-px h-8 bg-[#E6D6E6]'/>
            <Image src={mango} alt='Mango brand'/>
            <span className=' w-px h-8 bg-[#E6D6E6]'/>
            <Image src={foodNetwork} alt='Food Network brand'/>
            <span className=' w-px h-8 bg-[#E6D6E6]'/>
            <Image src={foodCo} alt='Food.co.uk brand'/>
            <span className=' w-px h-8 bg-[#E6D6E6]'/>
            <Image src={bookOff} alt='bookoff brand'/>
            <span className=' w-px h-8 bg-[#E6D6E6]'/>
            <Image src={g_series} alt='G series brand'/>
    </section>
  )
}

export default AboutBrands