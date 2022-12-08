import React, { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Carousel = ({ children }: { children: string[] }) => {
  const id = useId();

  const imgEls = children.map((image, idx) => (
    <SwiperSlide key={`${id}-${idx}`}>
      <img
        src={image}
        className="w-full h-full md:h-auto object-contain rounded-lg"
      />
    </SwiperSlide>
  ));

  return (
    <Swiper
      direction={"vertical"}
      autoHeight={true}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
        bulletClass:
          "swiper-pagination-bullet !w-1.5 !h-1.5 !bg-accent md:!w-2 md:!h-2",
      }}
      modules={[Mousewheel, Pagination]}
      className="rounded-lg h-72 md:h-96"
    >
      {imgEls}
    </Swiper>
  );
};

export default Carousel;
