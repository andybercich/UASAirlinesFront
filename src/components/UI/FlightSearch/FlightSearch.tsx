import { useState } from "react";
import FlightForm from "./FlightForm/FlightForm";
import CheckInForm from "./CheckInForm";
import StatusForm from "./StatusForm/StatusForm";
import ReservationForm from "./ReservationForm";

const FlightSearch = () => {
  const [activeTab, setActiveTab] = useState("flights");
  return (
    <>
      <div className="   bg-white   ">
        <div className="flex">
          <button
            className={`flex-1 py-2 text-lg ${
              activeTab === "flights"
                ? "border-b-2 border-purple-500 text-purple-700 font-bold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("flights")}
          >
            Vuelos
          </button>
          <button
            className={`flex-1 py-2 text-lg ${
              activeTab === "checkin"
                ? "border-b-2 border-purple-500 text-purple-700 font-bold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("checkin")}
          >
            Check-in
          </button>
          <button
            className={`flex-1 py-2 text-lg ${
              activeTab === "status"
                ? "border-b-2 border-purple-500 text-purple-700 font-bold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("status")}
          >
            Estado de vuelo
          </button>
          <button
            className={`flex-1 py-2 text-lg ${
              activeTab === "reservation"
                ? "border-b-2 border-purple-500 text-purple-700 font-bold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("reservation")}
          >
            Mi reserva
          </button>
        </div>
        <div className="">
            {activeTab === "flights" && <p> <FlightForm/> </p>}
            {activeTab === "checkin" && <p><CheckInForm/></p>}
            {activeTab === "status" && <p><StatusForm/></p>}
            {activeTab === "reservation" && <p><ReservationForm/></p>}
        </div>
      </div>
    </>
  );
};

export default FlightSearch;
