class Carro {
    marca: string;
    modelo: String;
    ano: number;

constructor(marca:string, modelo:String,ano:number){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;

}

exibirDetalhes():void{ 
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Ano: ${this.ano}`);
}

}

let c1 = new Carro("VW", "Up!", 2016);
let c2 = new Carro("BMW", "X1", 2026);

console.log("Dados do carro 1: ");
c1.exibirDetalhes();

console.log("Dados do carro 2");
c2.exibirDetalhes();

c1.ano = 2020;
console.log("Dados do Carro 1")
c1.exibirDetalhes()

