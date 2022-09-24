class Motor {
    private tipo: string;

   public constructor(tipo:string){
    this.tipo= tipo;
   }
}

class Rueda {
    private tamaño : number;

    public constructor(tamaño:number) {
        this.tamaño= tamaño;
    }
}

class Auto {
    private marca: string;
    private modelo: string;
    private motor : Motor;
    private ruedas : Rueda [];

    public constructor(marca:string, modelo: string, motor : Motor, ruedas: Rueda[] ){
        this.marca =marca;
        this.modelo=modelo;
        this.motor=motor;
        this.ruedas= ruedas;
    }
}

let motor : Motor = new Motor("1.6");
let rueda1: Rueda = new Rueda(16);
let rueda2: Rueda = new Rueda(16);
let rueda3: Rueda = new Rueda(16);
let rueda4: Rueda = new Rueda(16);

let ruedas : Rueda[]= [rueda1,rueda2,rueda3,rueda4];

let auto = new Auto("Fiat", "Palio", motor, ruedas);

console.log(auto);