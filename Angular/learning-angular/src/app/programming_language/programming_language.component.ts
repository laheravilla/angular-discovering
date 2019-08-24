import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'programming_language',
    templateUrl: './programming_language.component.html'
})
export class ProgrammingLanguageComponent implements OnInit, DoCheck, OnDestroy{
    public title: string = 'Programming Languages';
    
    constructor() {}

    //HOOKS
    ngOnInit() {
        //console.log('OnInit executed');
    }

    ngDoCheck() {
        //console.log('DoCkeck executed'); //Se ejecutada tras cada cambio en el codigo
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
    }

    //METHODS
    setTitle() {
        this.title = 'My programming languages';
    }

}