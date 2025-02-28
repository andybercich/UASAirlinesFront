import React, { useState } from "react";

const Rute = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      origin,
      destination,
      date,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white p-6 h-40">
        <div className="flex gap-15 relative">
          <div className="flex flex-col">
            <div className="pb-3  h-6 w-35 absolute text-gray-600 bottom-16">
              Origen
            </div>

            <input
              type="text"
              placeholder="Codigo de reserva"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className=" shadow-[0_0_10px_rgba(0,0,0,0.5)] w-50 rounded p-3 focus:outline-none mt-6"
            />
          </div>
          <div className="flex flex-col">
            <div className="pb-3  h-6 w-35 absolute text-gray-600 bottom-16">
              Destino
            </div>

            <input
              type="text"
              placeholder="Codigo de reserva"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className=" shadow-[0_0_10px_rgba(0,0,0,0.5)] w-50 rounded p-3 focus:outline-none mt-6"
            />
          </div>
          <div className="flex flex-col">
            <div className="pb-3  h-6 w-35 absolute text-gray-600 bottom-16">
              Fecha
            </div>

            <input
              type="Date"
              placeholder=""
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 shadow-[0_0_10px_rgba(0,0,0,0.5)] w-50 rounded p-3 focus:outline-none mt-6 text-gray-500"
            />
          </div>

          <div className="flex flex-col">
            <button
              type="submit"
              className="w-50 bg-blue-600 h-max text-white p-3 rounded font-bold hover:bg-blue-700 cursor-pointer absolute bottom-[1px]"
            >
              CONSULTAR
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Rute;
