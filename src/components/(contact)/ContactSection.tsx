import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"

const ContactSection = () => {
  return (
    <section className="container py-20 flex  space-x-6 justify-between">
        <div className=" w-[25%]">
            <ContactInfo/>
        </div>
        <div  className=" w-[75%]">
            <ContactForm/>
        </div>
    </section>
  )
}

export default ContactSection