import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from './sign-in.service';
import { User } from '../models/user';
import * as crypto from 'crypto-js'; 


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers:[SignInService]
})
export class SignInComponent implements OnInit {
  
  public user:User = new User();
  public registrado:boolean =true;
  // Mensajes y estilos para las alertas
  public tituloAlerta:string="¡Alerta!";
  public tituloError:string="¡Error!"
  public mensajeAlerta:string="El usuario ya se encuentra registrado";
  public mensajeError:string="No ha sido posible realizar el registro, intente nuevamente";
  public titulo:string;
  public mensaje:string;
  constructor(private router:Router, private signIn:SignInService) {
    
  }

  ngOnInit() {
  }
  auth(){

    let password = crypto.SHA512(this.user.password).toString();
    this.user.password = password;
    console.log(this.user.password);
    if(this.user.usuario =="" ||
     this.user.password == "" ||
     this.user.nombre =="" ||
     this.user.cargo ==""||
     this.user.apellidos || 
     this.user.nombreEmpresa =="" ||
     this.user.numeroDocumento ==0 ||
     this.user.email ==""){
    this.signIn.saveUser(this.user).subscribe( res => {
      if(res.message !== 'Usuario ya registrado'){
        
        localStorage.setItem("usuario", JSON.stringify(this.user));
        this.router.navigate(['core']);
      } else{
        this.titulo = this.tituloAlerta;
        this.mensaje = this.mensajeAlerta;
        this.registrado = false;
        this.user.password = "";
      }
    },
    err => {
      this.titulo = this.tituloError;
      this.mensaje = this.mensajeError;
      this.registrado = false;
      this.user.password = "";
    });
  } else {
    this.titulo = this.tituloAlerta;
    this.mensaje = "Complete por favor todos los campos";
    this.registrado = false;
    this.user.password = "";
  }

    
  }

}
