
import TeamMemberPagination from './TeamMemberPagination'

const TeamSection = () => {
  return (
    <section className='py-20 bg-linear-to-b from-[#f2f2f2] to-white'>
        <div className="container">
            <div className=' text-center'>
                <h2 className=" font-poppins font-semibold text-5xl leading-[120%] text-dark">
                Our Awesome Team
                </h2>
                <p className=" mx-auto max-w-160  mt-3 font-poppins font-normal text-text text-base leading-[150%]">
                    Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.
                </p>
            </div>

            <TeamMemberPagination/>
            
        </div>
    </section>
  )
}

export default TeamSection