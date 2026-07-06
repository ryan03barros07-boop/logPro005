let numero = [67, 2, 10, 100, 4, 80];

console.log(numero);

let crescente = [...numero].sort((a,b) => a-b);

console.log(crescente);

let descrescente =  [...numero].sort((a,b) => b-a);

console.log(descrescente);