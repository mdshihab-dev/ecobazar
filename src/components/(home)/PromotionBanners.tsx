import Image from "next/image";
import image1 from "@/assets/images/best-deal.webp";
import image2 from "@/assets/images/meat.webp";
import image3 from "@/assets/images/fruit.webp";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import SaleTimer from "../SaleTimer";

const PromotionBanners = () => {
  return (
    <section className=" container flex flex-col md:flex-row px-3 lg:px-0 space-y-3 lg:space-y-0 md:space-x-2 justify-between pb-8 sm:pb-10 md:pb-15">
      <div className=" relative w-auto md:w-106">
        <Image src={image1} alt="best deal" />
        <div className=" absolute w-full top-0 left-0 flex justify-center">
          <div className=" mt-8.75 flex flex-col items-center">
            <span className=" uppercase font-poppins font-medium text-[14px] text-white tracking-[3%]">
              Best Deals
            </span>
            <h3 className=" mt-4 mb-2 font-poppins font-semibold text-3xl md:text-2xl xl:text-[40px] text-white leading-[120%]">
              Sale of the Month
            </h3>

            <SaleTimer />

            <button className="mt-4 lg:mt-6 cursor-pointer bg-white flex items-center gap-x-2 md:gap-x-3 py-3 lg:py-3.5 px-6 lg:px-8 rounded-full text-primary">
              <span className="font-poppins font-semibold text-[14px] leading-[120%]">
                Shop Now
              </span>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>

      <div className=" relative w-auto md:w-106">
        <Image src={image2} alt="best deal" />
        <div className=" absolute w-full top-0 left-0 flex justify-center">
          <div className=" mt-8.75 flex flex-col items-center">
            <span className=" uppercase font-poppins font-medium text-[14px] text-white tracking-[3%]">
              85% Fat Free
            </span>
            <h3 className=" mt-4 mb-2 font-poppins font-semibold text-3xl md:text-2xl xl:text-[40px] text-white leading-[120%]">
              Low-Fat Meat
            </h3>
            <p className=" text-lg font-poppins font-normal text-white leading-[150%]">
              Started at
              <span className=" ml-2 font-semibold text-warning">$79.99</span>
            </p>
            <button className="mt-4 lg:mt-6 cursor-pointer bg-white flex items-center gap-x-2 md:gap-x-3 py-3 lg:py-3.5 px-6 lg:px-8 rounded-full text-primary">
              <span className="font-poppins font-semibold text-[14px] leading-[120%]">
                Shop Now
              </span>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
      <div className=" relative w-auto md:w-106">
        <Image src={image3} alt="best deal" />
        <div className=" absolute w-full top-0 left-0 flex justify-center">
          <div className=" mt-8.75 flex flex-col items-center">
            <span className=" uppercase font-poppins font-medium text-[14px] text-dark tracking-[3%]">
              Summer Sale
            </span>
            <h3 className=" mt-4 mb-2 font-poppins font-semibold text-3xl md:text-2xl xl:text-[40px] text-dark leading-[120%]">
              100% Fresh Fruit
            </h3>
            <div>
              <span className="font-poppins font-normal text-lg text-dark leading-[150%]">
                Up to
              </span>
              <span className=" ml-3 bg-dark py-1.5 px-3 rounded-[5px] font-poppins font-semibold text-lg text-[#FCC900] leading-[150%]">
                64% OFF
              </span>
            </div>
            <button className="mt-4 lg:mt-6 cursor-pointer bg-white flex items-center gap-x-2 md:gap-x-3 py-3 lg:py-3.5 px-6 lg:px-8 rounded-full text-primary">
              <span className="font-poppins font-semibold text-[14px] leading-[120%]">
                Shop Now
              </span>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanners;
