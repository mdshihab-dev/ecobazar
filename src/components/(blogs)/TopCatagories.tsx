import { TopCatagoriesData } from "@/projectData/data"

const TopCatagories = () => {
  return (
    <div>
        <h4 className=' font-poppins font-medium text-xl leading-[150%] text-dark'>
            Top Categories
        </h4>

        <ul className=' mt-4 space-y-4'>
            {TopCatagoriesData.map((item,index)=>(
                <li key={index} className=' flex items-center justify-between font-poppins font-normal text-sm  leading-[150%]'>
                    <p className=' text-dark'>{item.catagoryItem} </p>
                    <span className=' text-light-gray'> ({item.avaiable}) </span>
                </li>
            ))
            
            }
        </ul>
    </div>
  )
}

export default TopCatagories