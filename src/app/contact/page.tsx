import ContactSection from "@/components/(contact)/ContactSection"
import Location from "@/components/(contact)/Location"
import SubBanner from "@/components/SubBanner"

const ContactPage = () => {
  return (
    <>
      <SubBanner>
        <p className=" font-poppins font-normal text-base leading-[150%] text-primary ">
          Contact
        </p>
      </SubBanner>
      <ContactSection/>
      <Location/>
    </>
  )
}

export default ContactPage