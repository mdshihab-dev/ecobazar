import { RecentlyAddedBlogData } from "@/projectData/data"
import RecentPost from "./RecentPost"

const RecentlyAddedPosts = () => {
  return (
    <div>
        <h4 className=' font-poppins font-medium text-xl leading-[150%] text-dark'>
            Recently Added
        </h4>

        <div className="mt-4 space-y-4">
            {RecentlyAddedBlogData.map((item,index)=>(
                    <RecentPost key={index} imgSrc={item.imgSrc} alt={item.alt} title={item.title}/>
            ))

            }
        </div>
    </div>
  )
}

export default RecentlyAddedPosts