import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import BennerSlider from "./BennerSlider/BennerSlider";

const Benner = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
          <SwiperSlide>
          <BennerSlider
            img={"https://i.ibb.co/7bBd1K9/online-fashion-shopping-collage-1.jpg"}
          ></BennerSlider>
        </SwiperSlide>
        <SwiperSlide>
          <BennerSlider
            img={"https://i.ibb.co/kcjmysq/excited-girl-scream-joy-making-fist-pump-holding-shopping-bag-rejoicing-standing-dress-ove.jpg"}
          ></BennerSlider>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
};

export default Benner;
