import { Component, OnInit } from '@angular/core';
import { Computer } from '../models/computer';
import { ComputerService } from '../services/computer.service'; // Importo servicio

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css'],
  providers: [ComputerService] // Injecto el servicio como provider
})
export class ComputerComponent implements OnInit {
  public title: string = 'Computer Component';
  public computers: Array<Computer>;
  public branches: String[]; //Declaracion de array de strings
  public hd: number;
  public favoriteBranch: string;

  constructor(
    private _computerService: ComputerService // Servicio injectado. Underscore al inicio es buena practica
  ) {
    this.hd = 750;
    this.branches = new Array();
  }

  ngOnInit() {
    this.computers = this._computerService.getComputers(); // Inicializo servicio
    this.getBranches();
    alert(this._computerService.getText());
   }

   getBranches () {
     this.computers.forEach((computer, index) => {
       if (this.branches.indexOf(computer.branch) < 0) {
         this.branches.push(computer.branch);
       }
     });
     console.log(this.branches);
   }

   getFavoriteBranch () {
     alert(this.favoriteBranch);
   }

   addBranch () {
     this.branches.push(this.favoriteBranch);
   }

   deleteBranch() {
    this.branches.pop();
   }

   onBlur() {
     console.log('You are out of the input');
   }

   showWord() {
     alert(this.favoriteBranch);
   }
}
