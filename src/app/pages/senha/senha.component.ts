import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-senha',
  templateUrl: './senha.component.html',
  styleUrls: ['./senha.component.css','./senha.responsive.component.css']
})
export class SenhaComponent implements OnInit {
 
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
 
  }
}


