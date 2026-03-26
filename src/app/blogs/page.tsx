import BlogsList from "@/components/(blogs)/BlogsList"
import Filtering from "@/components/(blogs)/Filtering"
import SubBanner from "@/components/SubBanner"

const BlogsPage = () => {
  return (
    <>
      <SubBanner>
        <p className=" font-poppins font-normal text-base leading-[150%] text-primary ">
          Blog
        </p>
      </SubBanner>
      <section className=" container mt-8 mb-20 flex gap-x-3">
        <Filtering/>
        <BlogsList/>
      </section>
    </>
  )
}

export default BlogsPage