import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html',
  styleUrls: ['./menu-login.component.css', './menu-login.responsive.component.css']
})
export class MenuLoginComponent implements OnInit {
  mostrarSenha: boolean = false;
  senha: string = '';
  email: string = '';
  regex = /^[a-zA-Z0-9._%+-]+@(gmail.com|hotmail.com|yahoo.com)/;
  mostrarError:boolean=false
  
  constructor() { }

  ngOnInit(): void {
  }
  toggleMostrarSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }
  emailCharacter() {
   if( this.email.match(this.regex) && this.email.includes('@')){
    this.mostrarError=false
   }
   else{
    this.mostrarError=true
   }
}
}