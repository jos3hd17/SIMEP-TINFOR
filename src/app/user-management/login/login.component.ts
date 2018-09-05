import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LogInService } from './log-in.service';
import * as crypto from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LogInService]
})
export class LoginComponent implements OnInit {
  public user: User = new User();
  public registrado: boolean = true;
  // Mensajes y estilos para las alertas
  public tituloAlerta: string = "¡Alerta!";
  public tituloError: string = "¡Error!"
  public mensajeAlerta: string = "Ingrese usuario y contraseña";
  public mensajeError: string = "Credenciales incorrectas, ingrese nuevamente";
  public titulo: string;
  public mensaje: string;
  public checked: boolean = false;
  constructor(private router: Router, private login: LogInService) { }

  ngOnInit() {
  }

  loginMethod() {
    let password = crypto.SHA512(this.user.password).toString();
    if ((this.user.usuario !== '' && this.user.usuario !== undefined) && this.user.usuario !== '') {

      this.login.loginUser(this.user, password).subscribe(res => {
        console.log(res);
        this.user = res.usuario;
        console.log("this.user");
        console.log(this.user);
        
        if (this.checked) {
          this.user.password = password;
          localStorage.setItem("usuario", JSON.stringify(this.user));
        } else {
          this.user.password = password;
          sessionStorage.setItem("usuario", JSON.stringify(this.user));
        }
        this.router.navigate(['core/preview']);
      },
        err => {
          this.titulo = this.tituloError;
          this.mensaje = this.mensajeError;
          this.registrado = false
          this.user = new User();
        }
      );

    } else {
      this.titulo = this.tituloAlerta;
      this.mensaje = this.mensajeAlerta;
      this.registrado = false
      this.user = new User();
    }


  }

}
