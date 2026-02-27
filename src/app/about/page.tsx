import AboutSection from "@/components/(about)/AboutSection"
import DeliverySection from "@/components/(about)/DeliverySection"
import FeatureSection from "@/components/(about)/FeatureSection"
import SubBanner from "@/components/SubBanner"
import Testimonials from "@/components/Testimonials"

const AboutPage = () => {
  return (
    <> 
      <SubBanner>
        <p className=" font-poppins font-normal text-base leading-[150%] text-primary ">
          About
        </p>
      </SubBanner>
      <AboutSection/>
      <FeatureSection/>
      <DeliverySection/>
      <Testimonials/>
    </>
  )
}

export default AboutPage