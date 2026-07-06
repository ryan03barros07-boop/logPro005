let produtos = [
    { produto: "Notebook", preco: 3000 },
    { produto: "Mouse", preco: 200 },
    { produto: "Teclado", preco: 250 }
];


console.log("Produtos:", produtos[0].produto, "|", "Preço:", produtos[0].preco);
console.log("Produtos:", produtos[2].produto, "|", "Preço:", produtos[2].preco);

console.log(" ");

for (let produto of produtos) {
    console.log("Produto:", produto.produto, "| Preço:", produto.preco);
}

console.log(" ");

produtos[1].preco = 150;
console.log("Mouse: ", produtos[1].preco, "(Está na promoção)");