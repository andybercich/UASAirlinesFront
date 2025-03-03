import { useState } from "react";

const CheckInForm = () => {
  const [reservationCode, setReservationCode] = useState("");
  const [passenger, setPassenger] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      reservationCode,
      passenger,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white p-6 ">
      <div className="flex gap-15 relative">
          <div className="flex flex-col">
            <div className="pb-3  h-6 w-35 absolute text-gray-600 bottom-16">
              Código de reserva
            </div>

            <input
              type="text"
              placeholder="Codigo de reserva"
              value={reservationCode}
              onChange={(e) => setReservationCode(e.target.value)}
              className=" shadow-[0_0_10px_rgba(0,0,0,0.5)] w-50 rounded p-3 focus:outline-none mt-6"
            />
          </div>
          <div className="flex flex-col">
            <div className="pb-3  h-6 w-35 absolute text-gray-600 bottom-16">
              Pasajeros
            </div>

            <input
              type="text"
              placeholder="Pasajero"
              value={passenger}
              onChange={(e) => setPassenger(e.target.value)}
              className="p-2 shadow-[0_0_10px_rgba(0,0,0,0.5)] w-50 rounded p-3 focus:outline-none mt-6"
            />
          </div>

          <div className="flex flex-col">
            <button
              type="submit"
              className="w-50 bg-blue-600 h-max text-white p-3 rounded font-bold hover:bg-blue-700 cursor-pointer absolute bottom-[1px]"
            >
              COMENZAR CHECKIN
            </button>
          </div>
        </div>
        <div className="mt-5 ">
          <input type="checkbox"  />
          <label className="text-gray-500 text-xs pl-2 ">
            He leído y acepto las condiciones sobre Mercancías peligrosas,
            Check-in Online y Equipaje de mano. Tiempos de antelación: CABOTAJE
            48hs antes de la salida del vuelo. INTERNACIONAL 24hs antes de la
            salida del vuelo. Conocé tu franquicia de equipaje a través de
            nuestro Whatsapp (54 9 11 4940-4798) Opción 1 | VER MI RESERVA
          </label>
        </div>
      </form>
    </>
  );
};

export default CheckInForm;
