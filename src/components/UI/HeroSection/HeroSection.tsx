import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
  return (
    <>
      <div className="w-full h-full  ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className=" shadow-lg"
        >
          <SwiperSlide className="flex items-center justify-center h-full ">
            <div className="bg-[url('https://wallpapershome.com/images/pages/pic_h/572.jpg')] bg-cover bg-center w-full h-150"><div className="text-end p-20 ">
          <div
            className="text-white text-5xl  drop-shadow-2xl "
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Descuentos de hasta el 20%
          </div>
          <div
            className="text-white text-7xl drop-shadow-2xl "
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Sabados y Domingos
          </div>
        </div></div>
            
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-full ">
            <div className="bg-[url('https://wallpapercat.com/w/full/d/f/7/293062-3840x2160-desktop-4k-new-york-background-photo.jpg')] bg-cover bg-center w-full h-150"><div className="text-end p-20 ">
          <div
            className="text-white text-5xl  drop-shadow-2xl "
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Viaja por el mundo
          </div>
          <div
            className="text-white text-7xl drop-shadow-2xl "
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Descubri destinos nuevos
          </div>
        </div></div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-full">
            <div className="bg-[url('https://wallpapers.com/images/hd/buenos-aires-aerial-puerto-madero-iawmwi6htqrot4u7.jpg')] bg-cover bg-center w-full h-150 "><div className="text-end p-20 ">
          <div
            className="text-white text-5xl  drop-shadow-2xl "
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Tu oportunidad es hoy
          </div>
          <div
            className="text-white text-7xl drop-shadow-2xl "
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Aprovecha las Ofertas
          </div>
        </div></div>
          </SwiperSlide>
        

        
        </Swiper>
      </div>
    </>
  );
};

export default HeroSection;
