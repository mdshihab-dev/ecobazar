"use client";

import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import clint1 from "@/assets/images/robert-fox.webp";
import clint2 from "@/assets/images/russel.webp";
import clint3 from "@/assets/images/pena.webp";
const Testimonials = () => {
  return (
    <section className="  py-15 bg-[#f2f2f2]">
      <div className="container">
        <div className=" flex items-center justify-between">
          <h2 className=" font-poppins font-semibold leading-[120%] text-[32px] text-dark">
            Client Testimonials
          </h2>

          <div className=" flex items-center gap-x-3">
            <span className="testimonial-prev cursor-pointer h-[45px] w-[45px] flex items-center justify-center border border-[#e6e6e6] bg-white rounded-full text-dark transition-colors duration-500 hover:border-primary hover:bg-primary hover:text-white">
              <ArrowLeftIcon />
            </span>
            <span className="testimonial-next cursor-pointer h-[45px] w-[45px] flex items-center justify-center border border-[#e6e6e6] bg-white rounded-full text-dark transition-colors duration-500 hover:border-primary hover:bg-primary hover:text-white">
              <ArrowRightIcon />
            </span>
          </div>
        </div>

        <div className=" mt-8">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            spaceBetween={24}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <TestimonialCard
                imageSrc={clint1}
                alt="Robert Fox"
                name="Robert Fox"
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard
                imageSrc={clint2}
                alt="Dianne Russell"
                name="Dianne Russell"
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard
                imageSrc={clint3}
                alt="Eleanor Pena"
                name="Eleanor Pena"
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard
                imageSrc={clint1}
                alt="Robert Fox"
                name="Robert Fox"
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard
                imageSrc={clint2}
                alt="Dianne Russell"
                name="Dianne Russell"
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard
                imageSrc={clint3}
                alt="Eleanor Pena"
                name="Eleanor Pena"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
