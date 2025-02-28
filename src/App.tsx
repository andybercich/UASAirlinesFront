import HeroSection from "./components/UI/HeroSection/HeroSection";
import './index.css'
import NavBar from "./components/UI/NavBar/NavBar";
import { ShowVuelo } from "./components/UI/ShowVuelo/ShowVuelo";
import { ComponentVuelo } from "./components/UI/ComponentVuelo/ComponentVuelo";
import { useEffect, useState } from "react";
import { IVueloDTO } from "./Models/vuelos/IVueloDTO";
import {vueloService} from "./Services/vueloService";


function App() {

  const service = new vueloService();;

  const [vuelos, setVuelos] = useState<IVueloDTO[]>([]);
  
  useEffect(() => {
    service.getAllVuelosByOrigenAndDestino(1, 3)
      .then((data:IVueloDTO[] | any) => {
        setVuelos(data);
      })
      .catch((error:any) => console.error("Error al obtener vuelos:", error));
  }, []);
 

  return (
    <div >
      <NavBar />
      <HeroSection/>
      <ShowVuelo />
      <ComponentVuelo vuelos={vuelos} />
    </div>
  );
}

export default App;