const TravelCard = () => {
  return (
    <>
      <div className="w-75 h-100 bg-white  rounded-2xl overflow-hidden m-[5rem] shadow-[0_0_10px_rgba(0,0,0,0.5)] mb-10">
        <img
          src="https://media.istockphoto.com/id/1225057356/es/foto/argentina-buenos-aires-city-center-vista-9-de-julio-avenida-obelisco.jpg?s=612x612&w=0&k=20&c=kLPjjpOlx6ggStMpsDWw3QQQdi60geYVKWZg10NsQJ4="
          alt=""
          className="h-70 object-cover "
        />
        <div className="h-30 overflow-hidden rounded-t-2xl relative">
            <div className="font-semibold absolute left-5 top-4 ">
                Ida y Vuelta
            </div>
            <div className="font-semibold absolute left-5 top-9 ">
                Mendoza a Buenos Aires
            </div>
            <div className="font-semibold absolute right-3 bottom-4 text-left">
                Precio: $$$$
            </div>
        </div>
      </div>
    </>
  );
};

export default TravelCard;
