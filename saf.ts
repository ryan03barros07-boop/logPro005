class Aluno {
    nome: string;
    nota: number;


constructor(nome: string, nota: number){
    this.nome = nome;
    this.idade = nota;
}

estaAprovado(): boolean{
return this.nots >= 6;
}
}

let alunos: Aluno[] = [];

function adicionarAluno(nome: string, nota: number): void {
alunos.push(new Aluno(nome, nota));
}
function listarAlunos(): void {
alunos.forEach(a =>
console.log(`${a.nome} | Nota: ${a.nota} | ${a.estaAprovado() ? "