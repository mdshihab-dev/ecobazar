import {RelatedProductsData} from '@/projectData/data'
import ProductPrototype from '../ProductPrototype'

const RelatedProducts = () => {
  return (
    <section className=" container my-20">
        <h2 className=' text-center font-poppins font-semibold text-[32px] text-dark'>
            Related Products
        </h2>
        
        <div className='mt-8 flex gap-6'>
            {RelatedProductsData.map((item,index)=>{ 
            return <ProductPrototype key={index} imgSrc={item.imgSrc} alt={item.alt} name={item.name} price={item.price} oldPrice={item.oldPrice} discount={item.discount}/>
            })}
        </div>
    </section>
  )
}

export default RelatedProducts