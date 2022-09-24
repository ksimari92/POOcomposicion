class Televisor {
    //Variables internas GENERALMENTE TIENEN MODIFICADOR ACCESO PRIVADO
    private estaPrendido: boolean;
    private volumenActual: number;
    private canalActual: number;


    //constructor de clase SIEMPRE TIENEN MODIFICADOR DE ACCESO PUBLIC
    public constructor(estaPrendido: boolean, volumen: number, canal: number, marca?:string) {
        this.estaPrendido = estaPrendido;
        this.volumenActual = volumen;
        this.canalActual = canal;
       
    }


    //Funciones o metodos de clase CASI SIEMPRE TIENEN MODIFICADOR DE ACCESO PUBLIC PERO A VECES SE NECESITAN FUNCIONES AUXILIARES Y ESAS SON PRIVATE
    public prenderApagar() : void{
        if (this.estaPrendido) {
            this.estaPrendido = false;
        } else {
            this.estaPrendido = true;
        }
    }
    public subirVolumen(): void  {
        this.volumenActual = this.volumenActual + 1;
    }
    public bajarVolumen(): void {
        this.volumenActual = this.volumenActual - 1;
    }
    public subirCanal(): void {
        this.canalActual = this.canalActual + 1;
    }
    public bajarCanal(): void {
        this.canalActual = this.canalActual - 1;
    }
   // GETTER 
   public getPrendidoApagado(): boolean{ 
     return this.estaPrendido;
   }

   public getCanalActual(): number{
    return this.canalActual;
   }

   public getVolumenActual(): number{
    return this.volumenActual;
   }
}


let primerTelevisor = new Televisor(true, 20, 15, "Noblex");
let segundoTV = new Televisor(false, 25, 11)
// console.log(primerTelevisor.getPrendidoApagado());
// console.log(primerTelevisor.getCanalActual());
// console.log(primerTelevisor.getVolumenActual());

let enviarMensaje =(mensaje?:string) =>{
    if (mensaje === undefined){
        console.log("Mensaje por defecto")
    }else {
        console.log(mensaje)
    }
}

enviarMensaje();
enviarMensaje("Este es un mensaje en el parametro")





