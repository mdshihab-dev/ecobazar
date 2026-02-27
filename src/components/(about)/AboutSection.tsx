import Image from "next/image"
import aboutIamge1 from '@/assets/images/about-us-img1.webp'

const AboutSection = () => {
  return (
    <section className={' container py-20 flex gap-x-10 items-center justify-between '}>
        <div>
            <h1 className=" max-w-[607px] font-poppins font-semibold text-[56px] leading-[120%] text-dark">
                100% Trusted Organic Food Store
            </h1>
            <p className=" max-w-[590px] mt-8 font-poppins font-normal text-text text-lg leading-[150%]">
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
            </p>
        </div>
        <Image src={aboutIamge1} alt="about image"/>
    </section>
  )
}

export default AboutSection