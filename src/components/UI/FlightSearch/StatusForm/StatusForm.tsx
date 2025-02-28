import { useState } from "react";
import Rute from "./Rute";
import FlightNumber from "./FlightNumber";

const StatusForm = () => {
  const [activeTab, setActiveTab] = useState("flightnumber");

  return (
    <>
      <div className="flex relative">
        <div className="text-violet-950 font-medium flex items-center py-5 px-7">
          <input
            type="radio"
            name="button"
            onClick={() => setActiveTab("flightnumber")}
            defaultChecked
          />
          <span className="pl-1" >Número de vuelo</span>
        </div>
        <div className="flex text-violet-950 font-medium  items-center  ">
          <input
            type="radio"
            name="button"
            onClick={() => setActiveTab("rute")}
            className="text-violet-950"
          />
          <span className="pl-1">Ruta</span>
        </div>
      </div>
      <div>
        {activeTab === "flightnumber" && <p><FlightNumber /></p>}
        {activeTab === "rute" && <p><Rute /></p>}
      </div>
    </>
  );
};

export default StatusForm;

