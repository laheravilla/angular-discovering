import { Component, OnInit } from '@angular/core';
import { Computer } from '../models/computer';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  public title: string = 'Computer Component';
  public computers: Array<Computer>;
  public branches: String[]; //Declaracion de array de strings
  public hd: number;
  public favoriteBranch: string;

  constructor() {
    this.hd = 750;
    this.branches = new Array();
    this.computers = [
      new Computer('Asus', false, 790, 17, 'i5', '8gb', true),
      new Computer('Dell', true, 990, 15, 'i7', '16gb', false),
      new Computer('HP', false, 590, 17, 'i3', '4gb', false),
      new Computer('HP', true, 790, 17, 'i5', '8gb', false),
      new Computer('Dell', false, 450, 17, 'i3', '2gb', true),
    ];
  }

  ngOnInit() {
    console.log(this.computers);
    this.getBranches();
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
}
