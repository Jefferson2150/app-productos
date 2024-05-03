import { Component, OnInit } from '@angular/core';

interface Boton {
  id: number;
  nombre: string;
  elementos: string[];
  mostrarLista: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {


  botones: Boton[] = [
    { id: 1, nombre: 'Botón 1', elementos: ['Elemento 1-1', 'Elemento 1-2'], mostrarLista: false },
    { id: 2, nombre: 'Botón 2', elementos: ['Elemento 2-1', 'Elemento 2-2'], mostrarLista: false },
    { id: 3, nombre: 'Botón 3', elementos: ['Elemento 3-1', 'Elemento 3-2'], mostrarLista: false }
  ];
  constructor() { }

  ngOnInit() {
  }

  mostrarLista(id: number) {
    const boton = this.botones.find(b => b.id === id);
    if (boton) {
      boton.mostrarLista = true;
    }
  }

  ocultarLista(id: number) {
    const boton = this.botones.find(b => b.id === id);
    if (boton) {
      boton.mostrarLista = false;
    }
  }
  
}
