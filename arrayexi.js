let numeros = [3, 24, 32, 87, 300];

for(let i = 0; i < numeros.length; i++){
console.log(numeros[i]);

}

console.log("for..of:")

for(let num of numeros) {
    console.log(num);
}

console.log("for..each");
numeros.forEach(
(n,i) =>  {
        console.log(i+ ": " + n);

});

let soma = 0;

for (let n of numeros){
    soma+= n;

}

console.log()