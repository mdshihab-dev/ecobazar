import steps from '@/assets/images/steps.png'
import mango from '@/assets/images/mango.png'
import foodNetwork from '@/assets/images/food-network.png'
import foodCo from '@/assets/images/food-co.png'
import bookOff from '@/assets/images/bookoff.png'
import g_series from '@/assets/images/g-resies.png'
import Image, { StaticImageData } from 'next/image'
import instaImage1 from '@/assets/images/Instagram-Post1.webp'
import instaImage2 from '@/assets/images/Instagram-Post2.webp'
import instaImage3 from '@/assets/images/Instagram-Post3.webp'
import instaImage4 from '@/assets/images/Instagram-Post4.webp'
import instaImage5 from '@/assets/images/Instagram-Post5.webp'
import instaImage6 from '@/assets/images/Instagram-Post6.webp'

const Brands = () => {
    const images: StaticImageData[] = [instaImage1, instaImage2, instaImage3, instaImage4, instaImage5, instaImage6]
  return (
    <section className=" container  pb-15">
        <div className='flex items-center justify-between py-15'>
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
        </div>

        <div>
            <h2 className='text-center font-poppins font-semibold text-[32px] leading-[120%] text-dark'>
                Follow us on Instagram
            </h2>
            <div className='mt-8 flex items-center justify-between'>
                {images.map((image, index) => (
                    <Image key={index} src={image} alt='instagram post'/>
                ))
                }
            </div>
        </div>
    </section>
  )
}

export default Brands