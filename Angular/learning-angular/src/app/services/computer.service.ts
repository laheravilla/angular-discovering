import { Injectable } from '@angular/core';
import { Computer } from '../models/computer';

@Injectable() // Permite INJECTAR nuestro servicio a nuestras clases
export class ComputerService {
    
    public computers: Array<Computer>;

    constructor() {
        this.computers = [
            new Computer('Asus', false, 790, 17, 'i5', '8gb', true),
            new Computer('Dell', true, 990, 15, 'i7', '16gb', false),
            new Computer('HP', false, 590, 17, 'i3', '4gb', false),
            new Computer('HP', true, 790, 17, 'i5', '8gb', false),
            new Computer('Dell', false, 450, 17, 'i3', '2gb', true),
          ];
    }

    getComputers(): Array<Computer> {
        return this.computers;
    }

    getText(): string {
        return "Hello from a Service!";
    }
}