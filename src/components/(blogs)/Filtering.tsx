import { IoSearchOutline } from 'react-icons/io5'
import { TbAdjustmentsHorizontal } from 'react-icons/tb'
import RecentlyAddedPosts from './RecentlyAddedPosts'
import Gallery from './Gallery'
import PopularTags from './PopularTags'
import TopCatagories from './TopCatagories'

const Filtering = () => {
  return (
    <div className=' w-[33%] '>
        <div className=' sticky top-7.5'>
        <button className='flex items-center justify-center cursor-pointer gap-x-3 px-8 py-3.5 rounded-[50px] font-poppins font-semibold text-sm leading-[120%] text-white bg-primary'>
            Filter
            <TbAdjustmentsHorizontal className=' text-2xl' />
        </button>

        <div className='mt-8 relative'>
            <input
            type="text"
            placeholder="Search..."
            className="w-full font-poppins py-4 pr-4 pl-[45px] border border-gray-200 rounded-[8px] focus:outline-none focus:border-primary placeholder:text-gray-400"
          />
          <IoSearchOutline className=' absolute top-1/2 -translate-y-1/2 left-3.5 text-2xl' />
        </div>

        <hr className=' border-[#e6e6e6] mt-7 mb-5 '/>

        {/* Top Catagories  */}
        <TopCatagories/>

        <hr className=' border-[#e6e6e6] mt-7 mb-5 '/>

        {/* Popular Tag */}
        <PopularTags/>

        <hr className=' border-[#e6e6e6] mt-7 mb-5 '/>

        {/* Our Gallery */}
        <Gallery/>

        <hr className=' border-[#e6e6e6] mt-7 mb-5 '/>
        
        {/* Recently Added */}
        <RecentlyAddedPosts/>
    </div>
    </div>
  )
}

export default Filtering