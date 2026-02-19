import {FeedbackData} from '@/projectData/data'
import Image from 'next/image'

const CustomerFeedback = () => {
  return (
    <div className=" container mt-10.5">
      {FeedbackData.map((item,index)=>
       <div key={index} className='max-w-190 pb-5 mb-5 border-b border-[#e6e6e6] last:border-transparent'>
            <div className=' flex items-center justify-between'>
              <div className=' flex items-center gap-3'>
                <Image src={item.imageUrl} alt={item.alt}/>
                <div>
                  <h5 className=' font-poppins font-medium text-[14px] leading-[150%] text-dark mb-0.5'> {item.name}  </h5>
                  <Image src={item.rating} alt={'rating'} className=' w-20 h-4'/>
                </div>
              </div>
              <div className=' font-poppins font-normal text-[14px] leading-[150%] text-secondary'> {item.date} </div>
            </div>
            <p className=' mt-3 font-poppins font-normal text-[14px] leading-[150%] text-light-gray'>
              {item.description}
            </p>
       </div>
    )}
    <button className=' cursor-pointer py-3.5 px-8 rounded-full bg-[#f0f7f0] font-poppins font-semibold text-[14px] leading-[120%] text-primary'>
      Load More
    </button>
    </div>
  )
}

export default CustomerFeedback