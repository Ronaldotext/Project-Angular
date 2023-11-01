import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-conta',
  templateUrl: './new-conta.component.html',
  styleUrls: ['./new-conta.component.css','./new-conta.responsive.component.css'],
})
export class NewContaComponent implements OnInit {
  email: string = '';
  mostrarSenha: boolean = false;
  senha: string = '';

  regex = /^[a-zA-Z0-9._%+-]+@(gmail.com|hotmail.com|yahoo.com)/; 
  mostrarError: boolean = true;

  senhaValid: string = '';
  mostrarError2: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
  toggleMostrarSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }
  emailCharacter() {
    if (this.email.match(this.regex) && this.email.includes('@')) {
      this.mostrarError = false;
    } else {
      this.mostrarError = true;
    }
  }

  senhaCharacterHard() {
    if (this.senhaValid.length < 7) {
      this.mostrarError2 = false;
    } else {
      this.mostrarError2 = true;
    }
  }
}
