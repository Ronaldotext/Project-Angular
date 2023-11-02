import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: [
    './menu-bar.component.css',
    './menu-bar.responsive.component.css',
  ],
})
export class MenuBarComponent implements OnInit {
  menuOpen: boolean = false;
  listaVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.listaVisible = !this.listaVisible;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
