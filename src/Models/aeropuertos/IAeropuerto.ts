export interface IAeropuerto {
    id: number;
    nombre: string;
    distanciaPistaKm: number;
    ciudad: ICiudad;
    escalas: IEscala[];
    aviones: IAvion[];
    salidas: IVuelo[];
    llegadas: IVuelo[];
    avrebiatura: string;
}