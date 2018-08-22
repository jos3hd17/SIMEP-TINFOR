import { Receptor } from "./receptor.model";
import { Mensajero } from "./mensajero.model";

export class Pedido {
    fechaFin:string='';
    fechaInicio:string='';
    finalizado:boolean=false;
    horaFin:string='';
    horaInicio:string='';
    idPaquete:string='';
    lat:number=0;
    long:number=0;
    observaciones:string='';
    receptor:Receptor = new Receptor();
    mensajero:Mensajero = new Mensajero();
    
}