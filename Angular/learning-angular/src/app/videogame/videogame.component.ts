import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
   selector: 'videogame',
   templateUrl: './videogame.component.html' //Declaracion de plantilla externa
/* Declaracion de plantilla interna(inline)
   template: `
        <h2>Videogame component</h2>
        <ul>
            <li>Need for Speed</li>
            <li>Mario</li>
            <li>GTA</li>
        </ul>
   ` */
})
export class VideogameComponent implements OnInit, DoCheck, OnDestroy { //CamelCase
    public title: string;
    public list: string;

    constructor() {
        this.title = 'Videogames Component';
        this.list = 'Most Popular Videogames List';
        //console.log('Videogame component loaded');
    }

    //HOOKS principales de Angular

    ngOnInit() { // Se ejecuta cuando carga un componente
        //console.log('OnInit executed');
    }

    ngDoCheck() { //Se ejecuta tras un cambio en un componente dado
        //console.log('DoCheck executed');
    }

    ngOnDestroy() { //Se ejecuta antes de eliminar la instancia de un componente
        //console.log('Ondestroy executed');
    }
}