import DeliveryImage from '@/assets/images/about-us-img3.webp'
import Image from 'next/image'

const DeliverySection = () => {
  return (
    <section className='mb-20 container flex items-center gap-x-6'>
         <div className=' w-1/2'>

         </div>
          <div className=' w-1/2'>
            <Image src={DeliveryImage} alt='delivery image'/>
          </div>
    
          
        </section>
  )
}

export default DeliverySection