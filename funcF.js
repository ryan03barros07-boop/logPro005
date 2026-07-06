function somar (a,b){
return a + b;

}

console.log(somar(2,6));
console.log(somar(50,20));
console.log(somar(100,150));


console.log(" ")

function verificarParOuImpar(n){
    if (n % 2 === 0){
        return "par";
    }
    return "Ímpar"
    
}
console.log("3 é:",verificarParOuImpar(3));
console.log("4 é:",verificarParOuImpar(4));
console.log("10 é:",verificarParOuImpar(10));
console.log("81 é:",verificarParOuImpar(81));
console.log("0 é:",verificarParOuImpar(0));

console.log(" ");

function saudacaoPersonalizada(nome){
 console.log(`Olá, ${nome}! Seja Bem-Vindo ao sistema.`);

}

saudacaoPersonalizada("Ryan");