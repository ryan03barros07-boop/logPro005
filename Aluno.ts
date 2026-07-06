import { Pessoa } from './Pessoa';

class Aluno extends Pessoa{
    nota:number;

    constructor(nome:string,idade:number,nota:number){
        super(nome,idade);
        this.nota = nota;
    }

    estaAprovado():boolean{
        return this.nota >= 6;
    }
}


let aluno1 = new Aluno("Maria Santos",20,8);
aluno1.apresentar();
if(aluno1.estaAprovado()){
    console.log("Aprovado.");
}else{
    console.log("Reprovado.");
}

let pessoa1 = new Pessoa("João Lima",30);
pessoa1.apresentar();