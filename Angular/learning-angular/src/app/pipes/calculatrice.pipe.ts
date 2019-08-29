import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'calculatrice'
})
export class CalculatricePipe implements PipeTransform {

    /**
     * param1 | calculatrice: param2
     */
    transform(valueOne: number, valueTwo: number) {
        let operations = `
            Sum: ${valueOne + valueTwo} |
            Subtraction: ${valueOne - valueTwo} |
            Multiplication: ${valueOne * valueTwo} |
            Division: ${valueOne / valueTwo}
        `;
        return operations;
    }
}