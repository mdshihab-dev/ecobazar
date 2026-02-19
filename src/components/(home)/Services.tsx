import image1 from '@/assets/images/delivery.png'
import image2 from '@/assets/images/headphone.png'
import image3 from '@/assets/images/shopping-bag.png'
import image4 from '@/assets/images/package.png'
import ServiceItem from './ServiceItem'
import { StaticImageData } from 'next/image'

interface ServiceData {
    imgSrc: StaticImageData,
    alt: string
    title: string,
    description: string
}

const data: ServiceData[] = [
    {
        imgSrc: image1,
        alt: 'Shipping',
        title: 'Free Shipping',
        description: 'Free shipping on all your order'
    },
    {
        imgSrc: image2,
        alt: 'Support',
        title: 'Customer Support 24/7',
        description: 'Instant access to Support'
    },
    {
        imgSrc: image3,
        alt: 'Payment',
        title: '100% Secure Payment',
        description: 'We ensure your money is save'
    },
    {
        imgSrc: image4,
        alt: 'Guarantee',
        title: 'Money-Back Guarantee',
        description: '30 Days Money-Back Guarantee'
    },
]

const Services = () => {
  return (
    <section className=" container flex items-center justify-between shadow-[0px_0px_30px_0px_rgba(0,0,0,0.05),0px_0px_50px_0px_rgba(0,0,0,0.05)] p-10 rounded-lg">
        {
            data.map((item, index) => (
                <ServiceItem key={index} imgSrc={item.imgSrc} alt={item.alt} title={item.title} description={item.description}/>
            ))
        }
    </section>
  )
}

export default Services