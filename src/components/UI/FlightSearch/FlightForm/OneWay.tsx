import { useState } from "react";

const OneWay = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [classPassenger, setClassPassenger] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      origin,
      destination,
      classPassenger,
      date,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white p-6 h-max ">
          <div className="flex gap-15 relative">
            <div className="flex flex-col absolute left-[15px]">
              <div className="pb-3  h-6 w-35 absolute text-gray-600 bottom-16">
                Origen
              </div>
  
              <input
                type="text"
                placeholder="Origen"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className=" shadow-[0_0_10px_rgba(0,0,0,0.5)] w-35 rounded p-3 focus:outline-none mt-6"
              />
            </div>
  
            <div className="flex flex-col absolute left-[12rem]  ">
              <div className="pb-3  h-6 w-35 absolute text-gray-600 bottom-16">
                Destino
              </div>
  
              <input
                type="text"
                placeholder="Destino"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className=" shadow-[0_0_10px_rgba(0,0,0,0.5)] w-35 rounded p-3 focus:outline-none mt-6 "
              />
            </div>
            <div className="flex flex-col absolute left-[33%]">
              <div className="pb-3  h-6 w-20 absolute text-gray-600 bottom-16">
                Partida
              </div>
  
              <input
                type="Date"
                placeholder=""
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className=" shadow-[0_0_10px_rgba(0,0,0,0.5)] w-33 rounded h-[3rem] p-3 focus:outline-none mt-6 text-gray-500 text-sm"
              />
            </div>
            
            <div className="flex flex-col absolute left-[50%]">
              <div className="pb-3  h-6 w-35 absolute text-gray-600 bottom-16">
                Clase / Pasajeros/as
              </div>
  
              <input
                type="text"
                placeholder=""
                value={classPassenger}
                onChange={(e) => setClassPassenger(e.target.value)}
                className=" shadow-[0_0_10px_rgba(0,0,0,0.5)] w-50 rounded p-3 focus:outline-none mt-6"
              />
            </div>
            <div>
                
            </div>
            
          </div>
          <div className="pt-25 flex justify-center ">
              <button
                type="submit"
                className="w-120 bg-blue-600 h-max text-white p-3 rounded font-bold hover:bg-blue-700 cursor-pointer "
              >
                BUSCAR VUELOS
              </button>
            </div>
        </form>
    </>
  );
};

export default OneWay;
