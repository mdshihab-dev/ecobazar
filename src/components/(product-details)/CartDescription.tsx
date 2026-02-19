import Image from "next/image";
import ratingImage from "@/assets/images/five-star.png";
import brandImage from "@/assets/images/brand.png";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import PinterestIcon from "@/assets/icons/PinterestIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import BagIcon from "@/assets/icons/BagIcon";
import { GoHeart } from "react-icons/go";
import CounterParent from "./CounterParent";

type IconType = React.ReactNode
const icons : IconType[] = [
  <FacebookIcon key="facebook"/>,
  <TwitterIcon key="twitter"/>,
  <PinterestIcon key="pinterest"/>,
  <InstagramIcon key="instagram"/>
]

const CartDescription = () => {
  return (
    <div className="w-[647px]">
      <div className=" w-full pb-5 border-b border-[#e6e6e6]">
        <div className=" flex items-center gap-2">
          <h1 className=" text-4xl font-poppins font-semibold leading-[120%] text-dark">
            Chinese Cabbage
          </h1>
          <div className=" w-17.5 h-7.5 flex items-center justify-center relative ">
            <div className=" bg-[#20B526] h-full w-full opacity-20 py-1 px-2 rounded absolute top-0 left-0" />
            <span className="text-hard-primary font-poppins font-normal text-[14px] leading-[150%]">
              In Stock
            </span>
          </div>
        </div>

        <div className="mt-3 mb-5 flex items-center">
          <Image src={ratingImage} alt="rating image" />
          <span className="ml-1 font-poppins font-normal text-[14px] leading-[150%] text-text">
            4 Review
          </span>

          <span className="mx-3 h-1 w-1 rounded-full bg-[#B3B3B3]" />

          <div className=" flex items-center">
            <span className="font-poppins font-medium text-[14px] leading-[150%] text-dark-primary">
              SKU:
            </span>
            <span className="ml-1 font-poppins font-normal text-[14px] leading-[150%] text-text">
              2,51,594
            </span>
          </div>
        </div>

        <div className=" flex items-center">
          <span className=" line-through font-poppins font-normal text-xl leading-[150%] text-[#B3B3B3]">
            $48.00
          </span>
          <span className="font-poppins font-medium text-2xl leading-[150%] text-hard-primary ml-1 mr-3">
            $17.28
          </span>
          <div className=" w-[74px] h-[27px] flex items-center justify-center relative ">
            <div className=" bg-danger rounded-full h-full w-full opacity-10 py-1 px-2 absolute top-0 left-0" />
            <span className="text-danger font-poppins font-medium text-[14px] leading-[150%]">
              64% Off
            </span>
          </div>
        </div>
      </div>

      <div className=" my-6">
        <div className=" flex items-center justify-between">
        <div className=" flex items-center gap-2">
            <span className=" font-poppins font-normal text-[14px] leading-[150%] text-dark">Brand:</span>
            <Image src={brandImage} alt="Brand image"/>
        </div>

        <div className=" flex items-center gap-2.5">
            <span className=" font-poppins font-normal text-[14px] leading-[150%] text-dark"  >
                Share item:
            </span>
            <div className=" flex items-center gap-x-1.25">
            {
              icons.map((icon, index) => 
                <div key={index} className="cursor-pointer h-10 w-10 group hover:bg-primary transition-all duration-300 bg-transparent rounded-full flex items-center justify-center">
                  <span className=" group-hover:text-white text-sub-secondary transition-all duration-300">
                    {icon}
                  </span>
                </div>)
            }
          </div>
        </div>
        </div>
        <p className="mt-4 font-poppins font-normal text-[14px] leading-[150%] text-light-gray max-w-142">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. 
        </p>
      </div>

      <div className=" w-full flex items-center justify-between py-4.5 border-y border-[#e6e6e6]">
            <CounterParent/>
            <button className=" cursor-pointer gap-4 rounded-full text-white font-poppins bg-primary font-semibold text-base leading-[120%] w-[447px] h-[51px] flex items-center justify-center">
                Add to Cart
                <BagIcon/>
            </button>

            <div className=" cursor-pointer relative w-13 h-13 flex items-center justify-center">
                <div className=" absolute top-0 left-0 w-full h-full rounded-full opacity-10 bg-primary "/>
                <GoHeart className=" text-hard-primary text-[22px]"/>
            </div>
      </div>

      <div className=" mt-6">
        <div className=" font-poppins text-[14px] leading-[150%] flex items-center gap-1.5">
            <span className=" text-dark font-semibold">Category:</span>
            <span className=" text-light-gray font-normal">Vegetables</span>
        </div>

        <div className="mt-3 font-poppins text-[14px] leading-[150%] flex items-center gap-1.5">
            <span className=" text-dark font-semibold">Tag:</span>
            <span className=" text-light-gray font-normal">Vegetables Healthy</span>
            <span className=" text-dark font-normal underline">Chinese</span>
            <span className=" text-light-gray font-normal">Cabbage Green Cabbage</span>
        </div>
      </div>
    </div>
  );
};

export default CartDescription;
