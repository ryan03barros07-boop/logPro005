let nota = 5;
let frequencia = 70;
let resultado;

if (nota >= 6 && frequencia >= 75 ) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

if ( nota >= 9 || frequencia >= 100 ) {
    console.log("Aprovação alternativa");
}

resultado = (nota * 6 + frequencia * 4) / 10;
let aprovado = nota >= 6 && frequencia >= 75;

if (!aprovado) {
    console.log("Aluno não passou.");
} else {
    console.log("Aluno  não passou.");
}
console.log("Média ponderada:", resultado);