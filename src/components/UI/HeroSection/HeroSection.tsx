import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FlightSearch from "../FlightSearch/FlightSearch";

const HeroSection = () => {
  return (
    <>
      <div className="w-full h-full  ">
        <Swiper
          modules={[Navigation,Pagination, Autoplay]}
          loop={true}
          spaceBetween={0} // Quita cualquier espacio entre slides
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={false}
          navigation={false} // No mostramos las flechas
          allowTouchMove={true} // Deshabilita el movimiento del mouse
          simulateTouch={true} // Deshabilita la simulación de deslizamiento táctil
          className="shadow-lg cursor-pointer"
        >
          <SwiperSlide className="flex items-center justify-center h-full ">
            <div className="bg-[url('https://wallpapershome.com/images/pages/pic_h/572.jpg')] bg-cover bg-center w-full h-150">
              <div className="text-end p-20 ">
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
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-full ">
            <div className="bg-[url('https://wallpapercat.com/w/full/d/f/7/293062-3840x2160-desktop-4k-new-york-background-photo.jpg')] bg-cover bg-center w-full h-150">
              <div className="text-end p-20 ">
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
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-full">
            <div className="bg-[url('https://wallpapers.com/images/hd/buenos-aires-aerial-puerto-madero-iawmwi6htqrot4u7.jpg')] bg-cover bg-center w-full h-150 ">
              <div className="text-end p-20 ">
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
                  Aprovecha las ofertas
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute top-100 left-1/2 transform -translate-x-1/2 bg-opacity-90 w-300 h-max rounded-xl z-1 border-15 border-white/40">
          <FlightSearch />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
