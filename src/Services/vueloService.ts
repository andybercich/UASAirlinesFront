import axios, { AxiosResponse } from "axios";

export class vueloService {

    
    

    //CON DTO IMPLEMENTADO
    public async getAllVuelosByOrigenAndDestino(idOrigen:number,idDestino:number):Promise<AxiosResponse<any>>{
        const url = `http://localhost:8080/vuelo/buscarPorCiudad?ciudadOrigenId=${idOrigen}&ciudadDestinoId=${idDestino}`;

        return axios.get(url);

    }
  
}