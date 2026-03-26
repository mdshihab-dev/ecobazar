import { OurGalleryData } from '@/projectData/data'
import Image from 'next/image'

const Gallery = () => {
  return (
    <div>
        <h4 className=' font-poppins font-medium text-xl leading-[150%] text-dark'>
            Our Gallery  
        </h4>

        <div className="mt-4 flex flex-wrap gap-2">
            {OurGalleryData.map((item,index)=>(
                    <Image key={index} src={item.imgSrc} alt={item.alt}/>
            ))
            }
        </div>
    </div>
  )
}

export default Gallery