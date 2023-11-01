import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.responsive.component.css']
})
export class HomeComponent implements OnInit {
  buttonVisible2=false
  currentIndex = 0;
  constructor() { 
  }

  ngOnInit(): void {
  }
  topHeader(){
   window.scrollTo({top:0,behavior:'smooth'})
  }
  @HostListener('window:scroll',[])
  onScroll(){
    this.buttonVisible2=window.pageYOffset>100  
  }
}
