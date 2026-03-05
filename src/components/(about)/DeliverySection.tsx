import DeliveryImage from '@/assets/images/about-us-img3.webp'
import Image from 'next/image'
import DeliverDesc from './DeliverDesc'

const DeliverySection = () => {
  return (
    <section className=' container flex items-center gap-x-7.5'>
            <div className=' max-w-138'>
              <DeliverDesc/>
            </div>
            <div>
              <Image src={DeliveryImage} alt='delivery image'/>
            </div>
    </section>
  )
}

export default DeliverySection