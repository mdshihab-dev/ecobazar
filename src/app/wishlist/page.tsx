import WishlistItem from "@/components/(wishlist)/WishlistItem";
import image1 from "@/assets/images/wishlist-img1.png";
import image2 from "@/assets/images/wishlist-img2.png";
import image3 from "@/assets/images/wishlist-img3.png";
import SubBanner from "@/components/SubBanner";
import Link from "next/link";
import SocialMedia from "@/components/(wishlist)/SocialMedia";

const WishListPage = () => {
  return (
    <>
      <SubBanner>
        <Link href={"#"} className=" font-poppins font-normal text-base leading-[150%] text-primary">
          Wishlist
        </Link>
      </SubBanner>
      <section className=" container pt-10 pb-20">
        <h1 className=" text-center font-poppins font-semibold text-[32px] leading-[120%] text-dark">
          My Wishlist
        </h1>

        <div className="mt-8 border border-[#e6e6e6] rounded-lg overflow-hidden ">
          <div className="flex border-b border-[#e6e6e6]  py-4 [&>div]:font-poppins [&>div]:font-medium [&>div]:text-sm [&>div]:leading-[100%] [&>div]:tracking-[3%] [&>div]:text-light-gray [&>div]:uppercase ">
            <div className=" w-[40%] pl-6"> Product </div>
            <div className=" w-[30%]"> price </div>
            <div className=" w-[30%]"> Stock Status </div>
          </div>

          <div className="px-6">
            <WishlistItem imgSrc={image1} alt="Green Capsicum" name="Green Capsicum" price={14.99} oldPrice={20.99} status="In Stock"/>
            <hr className=" border-[#e6e6e6] my-3" />
            <WishlistItem imgSrc={image2} alt="Chinese Cabbage" name="Chinese Cabbage" price={45.0} status="In Stock"/>
            <hr className="border-[#e6e6e6] my-3" />
            <WishlistItem imgSrc={image3} alt="Green Capsicum" name="Fresh Sujapuri Mango" price={9.0} status="In Stock"/>
          </div>
          <hr className="border-[#e6e6e6] mt-3" />
          <SocialMedia />
        </div>
      </section>
    </>
  );
};

export default WishListPage;
