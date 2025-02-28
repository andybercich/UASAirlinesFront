export interface IPasaje {
    id: number;
    asiento: string;
    cliente: ICliente;
    clase: Clase;
    vuelo: IVuelo;
    vendido: boolean;
  }
  