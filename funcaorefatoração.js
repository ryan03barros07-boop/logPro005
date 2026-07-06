function calcularDesconto(preco, percentual){
let desconto = preco * percentual;
let final = preco - desconto;
return final;

}

let precoFinal = calcularDesconto(1000,0.15);
console.log(precoFinal);