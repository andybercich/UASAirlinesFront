import { useState } from "react";
import OneWay from "./OneWay";
import RoundTrip from "./RoundTrip";
import MultiDestination from "./MultiDestination";

const FlightForm = () => {
  const [activeTab, setActiveTab] = useState("roundtrip");
  return (
    <>
      <div className="flex pl-10 my-5 gap-5">
        <div className="text-violet-950 font-medium flex items-center ">
          <input type="radio" name="tripType" onClick={() => setActiveTab("oneway")}/>
          <span className="pl-1">Ida</span>
        </div>
        <div className="text-violet-950 font-medium flex items-center  ">
          <input type="radio" name="tripType" defaultChecked onClick={() => setActiveTab("roundtrip")}/>
          <span className="pl-1">Ida y Vuelta</span>
        </div>
        <div className="text-violet-950 font-medium flex items-center">
          <input type="radio" name="tripType" onClick={() => setActiveTab("multidestination")}/>
          <span className="pl-1">Multidestino</span>
        </div>
      </div>
      <div>
        {activeTab === "oneway" && <p><OneWay /></p>}
        {activeTab === "roundtrip" && <p><RoundTrip /></p>}
        {activeTab === "multidestination" && <p><MultiDestination /></p>}
      </div>
    </>
  );
};

export default FlightForm;
