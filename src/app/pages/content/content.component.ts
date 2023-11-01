import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {mostrarImganes} from '../../data/data';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contentTitle:string="";
  contentDescription:string="";
  @Input()
  photoCover:string="";

  private id:string | null="0"
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {

    this.route.paramMap.subscribe( value=>
      this.id =(value.get("id"))
      )
      this.setValuesToComponent(this.id)
        }
    setValuesToComponent(id: string | null) {
      const selectedImage = mostrarImganes.find(article => article.id === id);
    
      if (selectedImage) {
        this.contentTitle = selectedImage.title;
        this.contentDescription = selectedImage.contentDescription;
        this.photoCover = selectedImage.photoCover;
      }
   
      
    }
    
}
