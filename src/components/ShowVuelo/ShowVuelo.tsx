export const ShowVuelo = () => {
  return (
    <div className="bg-[#3C1642] w-fit h-auto p-5 rounded-[0.7rem] flex flex-col items-center gap-[2vh]">
      <h2 className="text-white">Vuelo</h2>
      <span className="inline-block w-[10rem] h-[2px] bg-white"></span>
      <div className="bg-[#3C1642] flex flex-col gap-[0.21vh] text-[#3C1642] w-full">
        <div className="bg-white p-1 rounded-t-[10px]">
          <h3 className="ml-[8px]">Origen</h3>
          <p className="ml-[8px]">Mendoza, Argentina</p>
        </div>
        <div className="bg-white rounded-b-[10px] p-1">
          <h3 className="ml-[8px]">Destino</h3>
          <p className="ml-[8px]">Buenos Aires, Argentina</p>
        </div>
      </div>
      <div className="bg-[#3C1642] flex justify-center items-center gap-[0.1vw] text-[#3C1642]">
        <div className="bg-white p-[7px] w-auto h-[7vh] rounded-l-[10px]">
          <p>Domingo</p>
          <p>18 Diciembre</p>
        </div>
        <div className="bg-white p-[7px] w-auto h-[7vh] rounded-r-[10px]">
          <p>Sabado</p>
          <p>30 Septiembre</p>
        </div>
      </div>
      <div className="bg-white rounded-[10px] w-full flex items-center p-2 text-[#3C1642]">
        <p>2 pasajeros, Bussines</p>
      </div>
    </div>
  );
};