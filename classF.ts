class Aluno {
    nome: string;
    idade: string;
    nota: number;

    constructor(nome: string, idade: string, nota: number){
        this.nome = nome;
        this.idade = idade;
        this.nota =  nota;
    }
    verificarAprovacao() {
        if (this.nota >= 6){
            console.log(` ${this.nome} está aprovado. | sua nota foi ${this.nota}`)
        } else {
            console.log (` ${this.nome} está reprovado | sua nota foi ${this.nota}`)
        }
    } 
    exibirPerfil(): void {
        console.log(`Nome: ${this.nome} | Idade: ${this.idade} | nota : ${this.nota}`);
    }

}
const ListaAlunos = [
 new Aluno ("Jaime", "06", 7),
 new Aluno ("Catatau", "32", 5),
 new Aluno ("Miguel", "20", 10)
];

ListaAlunos.forEach(Aluno => {
    Aluno.exibirPerfil();
    Aluno.verificarAprovacao();
});
