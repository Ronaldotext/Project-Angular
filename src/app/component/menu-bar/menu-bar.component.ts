import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css', 
  './menu-bar.responsive.component.css']
})
export class MenuBarComponent implements OnInit {
  menuOpen:boolean =false;
  menuList:boolean=false

  constructor() { }

  ngOnInit(): void {
  }
  mostarContent(){
    
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if(this.menuList == this.menuOpen){
      this.menuList=true
    }else{
      this.menuList=false
    }
  }
  scrollToSection(sectionId:string){
    const element=document.getElementById(sectionId)
    if(element){
      element.scrollIntoView({behavior:'smooth'})
    }
  }
  
}
