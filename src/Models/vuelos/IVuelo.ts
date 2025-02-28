import { IPasaje } from "../pasajes/IPasaje";
import { IAeropuerto } from "../aeropuertos/IAeropuerto";

export interface IVuelo {
    id: number;
    avion: IAvion;
    distanciaRecorrerKm: number;
    conEscala: boolean;
    escalas: IEscala[];
    fechaHoraLlegada: Date;
    fechaHoraSalida: Date;
    origen: IAeropuerto;
    destino: IAeropuerto;
    horasVuelo: number;
    descuento: number;
    precio: number;
    tipoOperacion: TipoOperacion;
    pasajes: IPasaje[];
  }