import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-menu-description',
  templateUrl: './menu-description.component.html',
  styleUrls: ['./menu-description.component.css', './menu-description.responsive.component.css']
})
export class MenuDescriptionComponent implements OnInit {
  @Input()
  images:string[]=["https://images4.alphacoders.com/132/thumb-1920-1329876.png",
  "https://observatoriodocinema.uol.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=1200&height=627&format=webp&quality=91&imagick=/wp-content/uploads/2019/03/captain-marvel-5c4561f00e3f0.jpg",
  "https://criticalhits.com.br/wp-content/uploads/2020/09/sabe-tudo-sobre-capitao-america.jpg",
  "https://t.ctcdn.com.br/EBMq05AUHBFLgVcSW40FU8ZQBPY=/354x3095:5816x6170/640x360/smart/i526811.jpeg",
  "https://proxy.olhardigital.com.br/wp-content/uploads/2023/05/Homem-de-Ferro-voando.jpg",
  "https://t.ctcdn.com.br/5bU4_4Zvdqn2gkI3z-VYo_JhEHQ=/1245x700/smart/i632776.jpeg",
  "https://cdn0-production-images-kly.akamaized.net/LNMxjS_rbnooJdMwlTVvSxX_y14=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/946748/original/029523200_1438762512-iron_man_games.jpg",
  "https://images4.alphacoders.com/132/thumb-1920-1329876.png"]
  currentImageIndex=0;
  currentImage:string="";

  @Input()
  Texto:string=""


  constructor() { }

  ngOnInit(): void {
    this.currentImage=this.images[this.currentImageIndex];
    setInterval(()=>{
      this.changeImage();
    },3000)
  }
  changeImage(){
    this.currentImageIndex=(this.currentImageIndex+1)% this.images.length;
    this.currentImage=this.images[this.currentImageIndex]
  }
}
