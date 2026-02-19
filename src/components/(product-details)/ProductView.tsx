"use client"

import Image, { StaticImageData } from 'next/image'
import productImage1 from '@/assets/images/product-image1.webp'
import productImage2 from '@/assets/images/product-image2.webp'
import productImage3 from '@/assets/images/product-image3.webp'
import productImage4 from '@/assets/images/product-image4.webp'
import SliderImg1 from '@/assets/images/product-slider-img1.png'
import SliderImg2 from '@/assets/images/product-slider-img2.png'
import SliderImg3 from '@/assets/images/product-slider-img3.png'
import SliderImg4 from '@/assets/images/product-slider-img4.png'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useState } from 'react'

type imageType = StaticImageData

const ProductView = () => {
  const images:imageType[] = [SliderImg1,SliderImg2,SliderImg3,SliderImg4]
  const viewImages:imageType[] = [productImage1,productImage2,productImage3,productImage4]
  const [active,setActive] = useState<number>(0)

  const SlideMovement = (index:number)=>{
      if(index < 0) {
        setActive(images.length - 1)
     }
      else if(index >= images.length) {
        setActive(0)
      }
      else{
        setActive(index)
      }
  }

 
  return (
    <div className=' flex justify-center items-center gap-3'>
        <div className='flex flex-col items-center gap-[50px]'>
            <div onClick={()=> SlideMovement(active - 1)} className='cursor-pointer h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-light-blue'>
                <IoIosArrowUp className=' text-2xl text-secondary'/>
            </div>
            <div className=' flex flex-col items-center gap-3'>
                {images.map((img,index) => (
                    <div onClick={()=> SlideMovement(index)} key={index} className={`${active === index ? ' border-primary' : 'border-transparent'} cursor-pointer rounded border  flex items-center justify-center w-20 h-22.5`}>
                        <Image src={img} alt="product slider image" />
                    </div>
                ))
                }
            </div>
            <div onClick={()=> SlideMovement(active + 1)} className='cursor-pointer h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-light-blue'>
                <IoIosArrowDown className=' text-2xl text-secondary'/>
            </div>
        </div>
         <Image src={viewImages[active]} alt="product image" className=' w-139 h-139'/>
    </div>
  )
}

export default ProductView