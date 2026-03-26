import React from 'react'
import BlogPrototype from './BlogPrototype'
import { BlogImagesData} from '@/projectData/data'
const BlogsList = () => {
  return (
    <div className=' w-[66.5%] '>
      <div className=' flex flex-wrap items-center justify-end gap-5'>
        {
        BlogImagesData.map((item,index)=>( 
          <BlogPrototype key={index} imgSrc={item.imgSrc} alt={item.alt} />
        ))
      }
      </div>
    </div>
  )
}

export default BlogsList