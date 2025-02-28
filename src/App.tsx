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
    const fetchVuelos = async () => {
      try {
        const response = await service.getAllVuelosByOrigenAndDestino(1, 3);
        setVuelos(response.data);
      } catch (error) {
        console.error("Error al obtener vuelos:", error);
      }
    };

    fetchVuelos();
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