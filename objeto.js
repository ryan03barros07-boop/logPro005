let aluno = {

    nome: "Ryan",
    Sobrenome: "Barros",
    idade: 20,
    Matricula: true,
    Data_Nascimento: "Amanhã"

}; 

console.log("Nome: ",aluno.nome);
console.log("Sobrenome: ",aluno.Sobrenome);
console.log("Idade: ",aluno.idade);
console.log("Matricula: ",aluno.Matricula);
console.log("Data de Nascimento: ",aluno.Data_Nascimento);

aluno.Data_Nascimento = "03/07/2004";
console.log("Data Nascimento: ",aluno.Data_Nascimento);


let alunos = [
{ nome: "Ana", idade: 18 },
{ nome: "Carlos", idade: 22 },
{ nome: "Maria", idade: 20 }
];

console.log(alunos[0].nome);
console.log(alunos[1].idade);