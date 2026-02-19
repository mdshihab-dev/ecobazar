"use client"
import {ShopProducts} from '@/projectData/data'
import ProductPrototype from '../ProductPrototype'
import Pagination from './Pagination'
import { StaticImageData } from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../MainContext'

interface ProductType {
    imgSrc: StaticImageData,
    alt: string,
    name: string,
    price: number,
    oldPrice?: number,
    discount: boolean,
}


const ProductsList = () => {
    const products: ProductType[] = [
      ...ShopProducts,
      ...ShopProducts,
      ...ShopProducts,
      ...ShopProducts,
      ...ShopProducts,
      ...ShopProducts,
      ...ShopProducts,
      ...ShopProducts,
      ...ShopProducts,
      ...ShopProducts,
    ]
    const {showProduct} = useContext(ProductContext)
    console.log(showProduct)
    const [page,setPage] = useState<number>(1)
    const pagesCount = Math.ceil(products.length / showProduct)
    const [totalPage,setTotalPage] = useState<number>(pagesCount)

    useEffect(()=>{
        setTotalPage(pagesCount)
    },[pagesCount])

  const start = (page - 1) * showProduct
  const end = start + showProduct
  const paginatedProducts = products.slice(start,end)
  

  return (
    <section className=' container '>
        <div className=' mb-10 flex items-center justify-center gap-6 flex-wrap'>
        {paginatedProducts.map((item,index)=>{
            return <ProductPrototype key={index} imgSrc={item.imgSrc}  alt={item.alt} name={item.name} price={item.price} oldPrice={item.oldPrice} discount={item.discount}/>
         })
        }
        </div>
        <Pagination currentPage={page} totalPages={totalPage} pageChanger={setPage}/>
    </section>
  )
}

export default ProductsList