import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore'; 
import { Observable } from 'rxjs';
import { Pedido } from '../../models/pedido.model';


@Injectable({
  providedIn: 'root'
})
export class PreviewService {
  
  public pedidos: Observable<Pedido[]>;
  public pedidosCol:AngularFirestoreCollection<Pedido>;

  constructor(public afs:AngularFirestore) { }

  getCollection():Observable<Pedido[]>{
    this.pedidosCol = this.afs.collection('simep');
    this.pedidos = this.pedidosCol.valueChanges();
    console.log(this.pedidos);
    return this.pedidos;
  }
}
