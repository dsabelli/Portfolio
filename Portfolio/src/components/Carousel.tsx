import React, { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/less";
import "swiper/less/pagination";
import "swiper/less/mousewheel";

const Carousel = ({ children }: { children: string[] }) => {
  const id = useId();

  const imgEls = children.map((image, idx) => (
    <SwiperSlide key={`${id}-${idx}`} className="">
      <img src={image} className="w-full h-full object-contain " />
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet !w-1.5 !h-1.5 !bg-accent md:!w-2 md:!h-2",
        }}
        modules={[Mousewheel, Pagination]}
        className="h-full"
      >
        {imgEls}
      </Swiper>
    </>
  );
};

export default Carousel;
