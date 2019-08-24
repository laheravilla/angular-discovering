export class Computer {
    /*public branch: string;
    public isDesktop: boolean;
    public price: number;
    public inches: number;
    public microprocessor: string;
    public ram: string; 
    public inStock: boolean;*/

    constructor( //Solucion en TS para evitar redundancia
        public branch: string,
        public isDesktop: boolean,
        public price: number,
        public inches: number,
        public microprocessor: string,
        public ram: string,
        public inStock: boolean,
        ) {}
}