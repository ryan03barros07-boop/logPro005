function calcularArea(base,altura){
return base * altura;

}



function converterCelsius(temp){
    return (temp * 9/5) +32;
}


let area = calcularArea(5,9);
console.log(`Area: ${area}`)

console.log(`Temp: ${converterCelsius(30)}`);


console.log( )

function saudacaoPersonalizada(nome){
 console.log(`Olá, ${nome}! Seja Bem-Vindo.`);

}

saudacaoPersonalizada("Ryan");