import Banner from "@/components/(home)/Banner";
import Catagories from "@/components/(home)/Catagories";
import PopulerDeals from "@/components/(home)/PopulerDeals";
import Services from "@/components/(home)/Services";
import {
  PopulerProducts,
  HotDeals,
  FeaturedProducts,
} from "@/projectData/data";
import Image from "next/image";
import discountBanner from "@/assets/images/Discount-Bannar.webp";
import PromotionBanners from "@/components/(home)/PromotionBanners";
import Brands from "@/components/(home)/Brands";
import News from "@/components/(home)/News";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <Catagories />
      <div className=" pb-15">
        <PopulerDeals heading="Popular Products" products={PopulerProducts} />
      </div>

      <PromotionBanners />
      <div className=" bg-light-blue py-15">
        <PopulerDeals heading="Hot Deals" products={HotDeals} />
      </div>

      <div className="container py-15">
        <Image src={discountBanner} alt="discount banner" />
      </div>
      <PopulerDeals heading="Featured Products" products={FeaturedProducts} />
      <News />
      <Testimonials />
      <Brands />
    </>
  );
}
