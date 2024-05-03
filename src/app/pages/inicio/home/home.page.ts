import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  images: string[] = [
    'linear-gradient(90deg, #016355, rgb(30 30 30 / 0%)),url(../../../../assets/img/img-home.jpeg)',
    'linear-gradient(90deg, #016355, rgb(30 30 30 / 0%)),url(../../../../assets/img/img-home-2.jpeg)',
    'linear-gradient(90deg, #016355, rgb(30 30 30 / 0%)),url(../../../../assets/img/img-home-3.jpeg)'
  ];
  currentImage: string | undefined;
  currentAparece: boolean | undefined;

  currentIndex = 0;

  constructor() { }

  ngOnInit() {
    //this.changeImage(); // Inicia el carrusel al cargar el componente
  }

  changeImage() {
    this.currentAparece = true;
    this.currentImage = this.images[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.images.length; // Avanza al siguiente índice, reiniciando al llegar al final
    setTimeout(() => {
      this.currentAparece = false;
      this.changeImage(); // Llama a la función nuevamente después de 3 segundos

    }, 5000);
  }

}
