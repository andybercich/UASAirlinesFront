import React, { useEffect, useState } from 'react'
import { vueloService } from '../../../Services/vueloService';
import { IVueloDTO } from '../../../Models/vuelos/IVueloDTO';

export const FlyData = () => {

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
    <div>
    {/*<ShowVuelo />
      <ComponentVuelo vuelos={vuelos} />*/}
    </div>
  )
}
