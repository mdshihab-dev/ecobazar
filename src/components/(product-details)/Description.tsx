import videoImage from '@/assets/images/video.webp'
import Image from 'next/image'
import { GoCheckCircleFill } from 'react-icons/go'
import LeafImage from '@/assets/images/leaf.png'
import PriceTagImage from '@/assets/images/price-tag.png'


const Description = () => {
  const data:string[] = [
    '100 g of fresh leaves provides.',
    'Aliquam ac est at augue volutpat elementum.',
    'Quisque nec enim eget sapien molestie.',
    'Proin convallis odio volutpat finibus posuere.'
  ]

  return (
    <div className=' container mt-8 flex justify-between'>
      <div className=' max-w-[648px]'>
          <p className=' font-poppins font-normal text-[14px] leading-[150%] text-light-gray'>
            Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.
          </p>
          <p className='mt-6.25 font-poppins font-normal text-[14px] leading-[150%] text-light-gray'>
            Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. 
          </p>

          <ul className='my-5 flex flex-col gap-3.5'>
            {data.map((item,index)=>
            <li key={index} className='flex items-center gap-2 font-poppins font-normal text-[14px] leading-[140%] text-light-gray '>
              <GoCheckCircleFill className=' text-xl text-primary' />
              {item}
            </li>
            )
          }
          </ul>

          <p className='font-poppins font-normal text-[14px] leading-[150%] text-light-gray'>
            Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa.
          </p>
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

export default Description