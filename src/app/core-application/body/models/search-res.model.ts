import { MensajeroModel } from "./mensajero.model";
import { LeidosModel } from "./leidos.model";


export class SearchResponse {
    public mensajero:MensajeroModel = new MensajeroModel;
    public leidos:LeidosModel[] = [];
}