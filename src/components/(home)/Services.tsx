
import { ServiceData } from '@/projectData/data'
import ServiceItem from './ServiceItem'


const Services = () => {
    const item1 = ServiceData[0]
    const item2 = ServiceData[1]
    const item3 = ServiceData[2]
    const item4 = ServiceData[3]

  return (
    <section className='container px-2 md:px-3'>
        <div className="  shadow-[0px_0px_30px_0px_rgba(0,0,0,0.05),0px_0px_50px_0px_rgba(0,0,0,0.05)] max-sm:p-4 sm:p-6 md:p-10 rounded-lg">
        <div className=' hidden xl:flex 2xl:flex items-center justify-between'>
            {
            ServiceData.map((item, index) => (
                <ServiceItem key={index} imgSrc={item.imgSrc} alt={item.alt} title={item.title} description={item.description}/>
            ))
        }
        </div>
        
        <div className=' flex lg:hidden xl:hidden flex-wrap max-sm:justify-start sm:justify-around md:justify-around lg:justify-between space-y-8'>
            <div className='space-y-5 lg:hidden'>
                <ServiceItem imgSrc={item1.imgSrc} alt={item1.alt} title={item1.title} description={item1.description}/>
                <ServiceItem imgSrc={item2.imgSrc} alt={item2.alt} title={item2.title} description={item2.description}/>
            </div>
            <div className='space-y-5 lg:hidden'>
                <ServiceItem imgSrc={item3.imgSrc} alt={item3.alt} title={item3.title} description={item3.description}/>
                <ServiceItem imgSrc={item4.imgSrc} alt={item4.alt} title={item4.title} description={item4.description}/>
            </div>
        </div>
        <div className=' max-lg:hidden lg:flex  xl:hidden flex-wrap max-sm:justify-start sm:justify-around md:justify-around lg:justify-between space-y-5'>
            <ServiceItem imgSrc={item1.imgSrc} alt={item1.alt} title={item1.title} description={item1.description}/>
            <ServiceItem imgSrc={item2.imgSrc} alt={item2.alt} title={item2.title} description={item2.description}/>
            <ServiceItem imgSrc={item3.imgSrc} alt={item3.alt} title={item3.title} description={item3.description}/>
            <ServiceItem imgSrc={item4.imgSrc} alt={item4.alt} title={item4.title} description={item4.description}/>
        </div>
        
    </div>
    </section>
  )
}

export default Services