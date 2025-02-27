export const ComponentVuelo = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#3C1642] w-fit h-[10vh] rounded-[0.8rem] flex items-center justify-center p-2 gap-[8vh]">
        <div className="flex justify-center items-center gap-[1vw] p-1">
          <input type="checkbox" className="w-[18px] h-[18px] hover:cursor-pointer"/>
          <h3 className="text-white text-[1.3rem]">UASAirlines</h3>
        </div>
        <div className="flex justify-center items-center gap-[0.3vw] text-[15px] p-1">
          <p className="text-white">MDZ</p>
          <span className="inline-block w-[30px] h-[2px] bg-white mx-[8px]"></span>
          <p className="text-white">AEP</p>
        </div>
        <div className="flex items-center flex-col p-1 mb-[5px]">
          <p className="text-white text-[15px] mb-[6px]">$127.600</p>
          <button className="w-[5vw] h-[4vh] bg-[#2424db] text-white rounded-[0.4rem] border-none hover:bg-[#1616ee] hover:cursor-pointer">Ver Oferta</button>
        </div>
      </div>
    </div>
  );
};
