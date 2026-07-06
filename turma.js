let turma = ["Ana", "Bruno", "Carlos"];

console.log(turma);

turma.push("Henry");
console.log(turma);

let removido = turma.pop();
console.log(removido);
console.log(turma);

turma.unshift("Rafael");
console.log(turma);

removido = turma.shift();
console.log(removido);
console.log(turma);

turma.splice(1,1); 
console.log(turma);