import Image from "next/image"
import NotFoundImage from '@/assets/images/not-found.webp'
import Link from "next/link"

const NotFoundPage = () => {
  return (
    <section className=" container my-20 flex items-center justify-center">
       <div>
          <Image src={NotFoundImage} alt="404 not found"/>

          <div className=" text-center">
            <h1 className=" font-poppins font-semibold text-[40px] leading-[120%] text-dark">
              Oops! page not found
            </h1>
            <p className="mt-5 mb-6 max-w-153 font-poppins font-normal text-base leading-[150%] text-light-gray">
              Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis
            </p>

            <Link href={'/'}>
              <button className=" cursor-pointer py-3.5 px-8 rounded-full bg-primary font-poppins font-semibold text-sm leading-[120%] text-white">
               Back to Home
              </button>
            </Link>
          </div>
       </div>
    </section>
  )
}

export default NotFoundPage