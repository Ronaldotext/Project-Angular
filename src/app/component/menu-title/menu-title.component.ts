import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css','./menu.responsive.component.css']
})
export class MenuTitleComponent implements OnInit {
  @Input()
  TextoH1:string=''
  constructor() { }

  ngOnInit(): void {
  }

}
