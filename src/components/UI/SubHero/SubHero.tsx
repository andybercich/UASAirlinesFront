import TravelCard from "../TravelCard/TravelCard";

const SubHero = () => {
  return (
    <>
      <div className="h-100 w-full bg-white ">
        <h1 className="text-purple-950 text-center pt-[5rem] text-6xl font-bold">
          VOLA POR EL MUNDO
        </h1>
        <div className="grid grid-cols-3  place-items-center   " >
            <TravelCard />
            <TravelCard />
            <TravelCard />
          
        </div>
      </div>
    </>
  );
};

export default SubHero;
