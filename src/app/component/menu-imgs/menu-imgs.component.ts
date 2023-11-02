import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mostrarImganes } from '../../data/data';
@Component({
  selector: 'app-menu-imgs',
  templateUrl: './menu-imgs.component.html',
  styleUrls: [
    './menu-imgs.component.css',
    './menu-imgs.responsive.component.css',
  ],
})
export class MenuImgsComponent implements OnInit {
  @Input()
  mostrarImganes = mostrarImganes;

  imagesPerGroup = 3;
  buttonVisible = false;
  currentIndex = 0;
  buttonVisible2 = false;
  photoCover: string = '';
  Id: string = '0';

  private id: string | null = '0';
  constructor(private route: ActivatedRoute) {
    this.updateButtonVisibility();
  }

  toggleMostrarMas() {
    this.currentIndex += this.imagesPerGroup;
    this.updateButtonVisibility();
  }
  toggleMostrarMenos() {
    this.currentIndex -= this.imagesPerGroup;
    this.updateButtonVisibility();
  }
  private updateButtonVisibility() {
    this.buttonVisible =
      this.currentIndex + this.imagesPerGroup < this.mostrarImganes.length;
    this.buttonVisible2 = this.currentIndex > 0;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }
  setValuesToComponent(id: string | null) {
    const selectedImage = mostrarImganes.find((article) => article.id === id);

    if (selectedImage) {
      this.photoCover = selectedImage.photoCover;
    }
  }
}
