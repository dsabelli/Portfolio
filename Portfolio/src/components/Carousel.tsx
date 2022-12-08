import React, { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Carousel = ({ children }: { children: string[] }) => {
  const id = useId();

  const imgEls = children.map((image, idx) => (
    <SwiperSlide key={`${id}-${idx}`} className="w-full h-full">
      <img
        src={image}
        className="h-72 md:h-96 object-contain overflow-hidden"
      />
    </SwiperSlide>
  ));

  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      autoHeight={false}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
        bulletClass:
          "swiper-pagination-bullet !w-1.5 !h-1.5 !bg-accent md:!w-2 md:!h-2",
      }}
      modules={[Mousewheel, Pagination]}
      className="h-72 md:h-96"
    >
      {imgEls}
    </Swiper>
  );
};

export default Carousel;
