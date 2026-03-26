"use client";

import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import TeamMember from "./TeamMember";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import JennyWilson from "@/assets/images/jenny-wilson.webp";
import JaneCooper from "@/assets/images/jane-cooper.webp";
import CodyFisher from "@/assets/images/cody-fisher.webp";
import RobertFox from "@/assets/images/robert-fox2.webp";
const TeamMemberPagination = () => {
  return (
    <div  className=" relative mt-12.5">
        <div className="absolute top-1/2 left-0 z-50 bg-amber-500 w-full -translate-y-1/2 flex items-center justify-between">
          <span className="testimonial-before absolute -left-15 cursor-pointer h-[45px] w-[45px] flex items-center justify-center border border-[#e6e6e6] bg-white rounded-full text-dark transition-colors duration-500 hover:border-primary hover:bg-primary hover:text-white">
            <ArrowLeftIcon />
          </span>
          <span className="testimonial-after absolute -right-15 cursor-pointer h-[45px] w-[45px] flex items-center justify-center border border-[#e6e6e6] bg-white rounded-full text-dark transition-colors duration-500 hover:border-primary hover:bg-primary hover:text-white">
            <ArrowRightIcon />
          </span>
        </div>

      <div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          loop={true}
          navigation={{
            prevEl: ".testimonial-before",
            nextEl: ".testimonial-after",
          }}
          breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
        >
          <SwiperSlide>
            <TeamMember imgSrc={JennyWilson} alt={"Jenny Wilson"} name={"Jenny Wilson"} position={"Ceo & Founder"}/>
          </SwiperSlide>

          <SwiperSlide>
            <TeamMember imgSrc={JaneCooper} alt={"Jane Cooper"} name={"Jane Cooper"} position={"Worker"}/>
          </SwiperSlide>

          <SwiperSlide>
            <TeamMember imgSrc={CodyFisher} alt={"Cody Fisher"} name={"Cody Fisher"} position={"Security Guard"}/>
          </SwiperSlide>

          <SwiperSlide>
            <TeamMember imgSrc={RobertFox} alt={"Robert Fox"} name={"Robert Fox"} position={"Senior Farmer Manager"}/>
          </SwiperSlide>
          <SwiperSlide>
            <TeamMember imgSrc={JennyWilson} alt={"Jenny Wilson"} name={"Jenny Wilson"} position={"Ceo & Founder"}/>
          </SwiperSlide>

          <SwiperSlide>
            <TeamMember imgSrc={JaneCooper} alt={"Jane Cooper"} name={"Jane Cooper"} position={"Worker"}/>
          </SwiperSlide>

          <SwiperSlide>
            <TeamMember imgSrc={CodyFisher} alt={"Cody Fisher"} name={"Cody Fisher"} position={"Security Guard"}/>
          </SwiperSlide>

          <SwiperSlide>
            <TeamMember imgSrc={RobertFox} alt={"Robert Fox"} name={"Robert Fox"} position={"Senior Farmer Manager"}/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TeamMemberPagination;
