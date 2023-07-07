import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Slide = ({ items }) => {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 960) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(4);
      }
    };

    window.addEventListener("resize", updateSlidesPerView);

    // Limpar o listener de evento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <Swiper
      navigation
      spaceBetween={60}
      slidesPerView={slidesPerView}
      loop={true}
      pagination
      autoplay
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="mb-4">
          <div className="bg-white shadow-[0px_0px_10px_1px_rgba(0,0,0,0.3)] w-50 h-100 rounded-xl">
            <h3>{item}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;
