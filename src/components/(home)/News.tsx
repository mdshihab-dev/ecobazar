import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import MessageIcon from '@/assets/icons/MessageIcon'
import TagIcon from '@/assets/icons/TagIcon'
import UserIcon from '@/assets/icons/UserIcon'
import newsImage1 from '@/assets/images/news1.webp'
import newsImage2 from '@/assets/images/news2.webp'
import newsImage3 from '@/assets/images/news3.webp'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface NewsDataType {
    image: StaticImageData,
    alt: string,
    description: string,
    date: number,
    month: string
}

const newsData: NewsDataType[] = [
    {
        image: newsImage1,
        alt: 'news image one',
        description: 'Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.',
        date: 18,
        month: 'Nov'
    },
    {
        image: newsImage2,
        alt: 'news image two',
        description: 'Eget lobortis lorem lacinia. Vivamus pharetra semper,',
        date: 29,
        month: 'Jan'
    },
    {
        image: newsImage3,
        alt: 'news image three',
        description: 'Maecenas blandit risus elementum mauris malesuada.',
        date: 21,
        month: 'Feb'
    },
]

const News = () => {
  return (
    <section className=" container py-15">
        <h1 className=' text-center font-poppins text-[32px] font-semibold leading-[120%] text-dark'>Latest News</h1>
        <div className='mt-8 flex items-center justify-between '>
            {newsData.map((news, index) => (
            <div key={index} className=" w-106 border border-[#e6e6e6] bg-white transition-shadow duration-500 hover:shadow-md rounded-lg overflow-hidden">
                <div className="w-full relative">
                    <Image src={news.image} alt={news.alt} />
                    <div className="absolute left-6 bottom-6 bg-white rounded  w-14.5 h-14.5 flex flex-col items-center justify-center">
                        <span className=' font-poppins font-medium text-xl leading-[150%] text-dark'>      
                            {news.date}
                        </span>
                        <span className=' font-poppins font-medium text-sm leading-[100%] text-light-gray  tracking-[3%]'> 
                            {news.month} 
                        </span>
                    </div>
                </div>

                <div className="w-full p-6">
                    <div className=' flex items-center gap-x-4'>
                        <div className=' flex items-center gap-x-1'>
                            <TagIcon/>
                            <span className=' font-poppins font-normal text-[14px] leading-[150%] text-sub-secondary'>
                                Food
                            </span>
                        </div>
                        <div className=' flex items-center gap-x-1'>
                            <UserIcon/>
                            <span className=' font-poppins font-normal text-[14px] leading-[150%] text-sub-secondary'>
                                By Admin
                            </span>
                        </div>
                        <div className=' flex items-center gap-x-1'>
                            <MessageIcon/>
                            <span className=' font-poppins font-normal text-[14px] leading-[150%] text-sub-secondary'>
                                65 Comments
                            </span>
                        </div>
                    </div>
                    <p className="mt-2 max-w-94 font-poppins font-medium text-lg leading-[150%] text-dark">
                        {news.description}
                    </p>

                <Link href={'#'} className='mt-5 flex items-center gap-x-3 font-poppins font-semibold text-base text-primary leading-[120%]'>
                    Read More
                    <ArrowRightIcon/>
                </Link>
                </div>  
            </div>
        ))

        }
        </div>
    </section>
  )
}

export default News


