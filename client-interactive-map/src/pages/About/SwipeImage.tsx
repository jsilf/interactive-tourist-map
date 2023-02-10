import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, EffectFade, Autoplay } from "swiper";

import img from "../../assets/images/harmano-huvud.webp";
import img2 from "../../assets/images/harmano-huvud-strand.webp";
import img3 from "../../assets/images/ljung.webp";
import LazyLoad from "react-lazy-load";

export const SwipeImage = () => {
  const images = [img, img2, img3];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      effect={"fade"}
      navigation={true}
      loop={true}
      modules={[Autoplay, Navigation, EffectFade]}
      className="mySwiper">
      {images.map((img, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="overlay">
              <LazyLoad height={600}>
                <img src={img} alt="Gullholmen" />
              </LazyLoad>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
