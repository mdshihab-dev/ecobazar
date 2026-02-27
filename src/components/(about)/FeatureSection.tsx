import Image from 'next/image'
import FeatureImage from '@/assets/images/about-us-img2.webp'
import {FeatureItemData} from '@/projectData/data' 
import FeatureItem from './FeatureItem'

const FeatureSection = () => {
  return (
    <section className='mb-20 container flex items-center gap-x-6'>
      <div className=' w-1/2'>
        <Image src={FeatureImage} alt='feature image'/>
      </div>

      <div className=' w-1/2'>
          <div className=' max-w-[570px]'>
            <h1 className="  font-poppins font-semibold text-[56px] leading-[120%] text-dark">
              100% Trusted Organic Food Store
            </h1>
            <p className=" mt-5 font-poppins font-normal text-light-gray text-base leading-[150%]">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat. 
            </p>
          </div>

          <ul className=' mt-6 flex items-center justify-center gap-6 flex-wrap '>
            {
            FeatureItemData.map((item,index)=>(
             <div key={index} className='w-78'>
              <FeatureItem src={item.image} alt={item.alt} title={item.title} paragraph={item.paragraph}/>
             </div>
          ))
            }
          </ul>
        </div>
    </section>
  )
}

export default FeatureSection