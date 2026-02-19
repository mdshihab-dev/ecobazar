import Image from 'next/image'
import videoImage from '@/assets/images/video.webp'
import LeafImage from '@/assets/images/leaf.png'
import PriceTagImage from '@/assets/images/price-tag.png'
import Link from 'next/link'

const AdditionalInfo = () => {
    const productInfoKeys:string[] = ['Weight:','Color:','Type:','Category:','Stock Status:']
    const productInfoValues:string[] = ['03','Green','Organic','Vegetables','Available (5,413)']

  return (
    <div className=' container mt-8 flex justify-between'>
          <div className=' flex gap-5.5'>
            <ul className=' flex flex-col gap-3'>
              {productInfoKeys.map((key,index)=> 
                <li key={index} className=' font-poppins font-normal text-[14px] leading-[150%] text-dark'>
                  {key} 
                </li>
                )
              }
                <li className=' font-poppins font-normal text-[14px] leading-[150%] text-dark'>
                  Tags:
                </li>
            </ul>
            <ul className=' flex flex-col gap-3'>
              {productInfoValues.map((key,index)=> 
                <li key={index} className=' font-poppins font-normal text-[14px] leading-[150%] text-text'>
                  {key} 
                </li>
                )
              }
              <li className=' font-poppins font-normal text-[14px] leading-[150%] text-text'>
                  Vegetables,  Healthy, <Link href={'#'} className=' text-dark underline'>Chinese,</Link> Cabbage, Green Cabbage,
              </li>
            </ul>
          </div>
    
          <div>
            <Image src={videoImage} alt='video' className=' cursor-pointer'/>
    
            <div className='mt-5 py-6 px-5 flex gap-5.5 border border-[#e6e6e6] rounded-md'>
              <div className=' flex items-center gap-3'>
                <Image src={LeafImage} alt='leaf'/>
                <div className=''>
                  <p className=' font-poppins font-medium text-[14px] leading-[150%] text-dark'>
                    64% Discount
                  </p>
                  <span className='mt-1.5 font-poppins font-normal text-[13px] leading-[150%] text-light-gray'>
                    Save your 64% money with us
                  </span>
                </div>
              </div>
              <div className=' flex items-center gap-3'>
                <Image src={PriceTagImage} alt='price tag'/>
                <div>
                  <p className=' font-poppins font-medium text-[14px] leading-[150%] text-dark'>
                    100% Organic
                  </p>
                  <span className='mt-1.5 font-poppins font-normal text-[13px] leading-[150%] text-light-gray'>
                     100% Organic Vegetables
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default AdditionalInfo