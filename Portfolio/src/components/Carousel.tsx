import React, { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Carousel = ({ children }: { children: string[] }) => {
  const id = useId();

  const imgEls = children.map((image, idx) => (
    <SwiperSlide key={`${id}-${idx}`}>
      <img src={image} className="w-full" />
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
        }}
        modules={[Mousewheel, Pagination]}
        className="rounded-lg shadow-2xl"
      >
        {imgEls}
      </Swiper>
    </>
  );
};

export default Carousel;
