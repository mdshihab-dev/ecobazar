import FacebookIcon from "@/assets/icons/FacebookIcon"
import Button from "../Button"
import TwitterIcon from "@/assets/icons/TwitterIcon"
import PinterestIcon from "@/assets/icons/PinterestIcon"
import InstagramIcon from "@/assets/icons/InstagramIcon"

type IconType = React.ReactNode
const icons : IconType[] = [
  <FacebookIcon key="facebook"/>,
  <TwitterIcon key="twitter"/>,
  <PinterestIcon key="pinterest"/>,
  <InstagramIcon key="instagram"/>
]

const FooterTop = () => {
  return (
    <section className=" bg-light-blue px-2 md:px-3 xl:px-0 py-5 md:py-8 lg:py-10">
      <div className=" container flex flex-col lg:flex-row items-center lg:gap-x-3 justify-between">
          <div className=" lg:w-[380] xl:max-w-md text-center lg:text-start">
            <h2 className="font-poppins font-semibold text-xl lg:text-2xl leading-[150%] text-dark">
              Subcribe our Newsletter
            </h2>
            <p className=" mt-1 px-5 md:px-47 lg:px-0 font-poppins font-normal text-sm lg:text-[14px] leading-[150%] text-secondary">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.
            </p>
          </div>

          <div className=" flex flex-col lg:flex-row items-center justify-center lg:gap-x-5 xl:gap-x-10">
            <div>
            <div className=" my-3 md:my-5 flex items-center border border-[#e5e5e5] h-13 bg-white rounded-full">
              <input type="text" placeholder="Your email address" className=" w-[60vw] lg:w-[300px] py-2.5 md:py-3.5 px-3 md:px-6 font-normal font-poppins text-sm md:text-base leading-[150%] text-light-gray outline-hidden"/>
              <Button text="Subscribe" styles=" px-6 md:px-10 py-4 bg-primary text-white rounded-full font-semibold text-sm md:text-base leading-[20px]"/>
            </div>
          </div>

          <div className=" flex items-center gap-x-2">
            {
              icons.map((icon, index) => 
                <div key={index} className="cursor-pointer size-10 group hover:bg-transparent border border-transparent hover:border-sub-secondary transition-all duration-500 bg-primary rounded-full flex items-center justify-center">
                  <span className=" text-white group-hover:text-sub-secondary transition-all duration-500">
                    {icon}
                  </span>
                </div>)
            }
          </div>
          </div>
      </div>
    </section>
  )
}

export default FooterTop