let usuarioUnico = {
    nome: "Ryan", idade: 20, ativo: true, email: "Ryan03Barros07@gmail.com",
    endereco: { logradouro: "Rua das Flores", numero: 123, cidade: "São Paulo", estado: "SP", cep: 12345678 }
};

let usuarios = [
    {nome: "Ryan", idade: 20, ativo: true, email: "Ryan03Barros07@gmail.com", endereco: { logradouro: "Av. Central", numero: 10, cidade: "São Paulo", estado: "SP", cep: 5644668 }},
    {nome: "Jaime", idade: 5, ativo: false, email: "Jaimes03Barros07@gmail.com", endereco: { logradouro: "Rua B", numero: 45, cidade: "Rio de Janeiro", estado: "RJ", cep: 1515868 }},
    {nome: "Miguel", idade: 60, ativo: true, email: "Miguelrros07@gmail.com", endereco: { logradouro: "Praça da Sé", numero: 500, cidade: "São Paulo", estado: "SP", cep: 15426879 }}
];

console.log("--- LISTA DE USUÁRIOS ORIGINAL ---");
for (let u of usuarios) {
    console.log(`Nome: ${u.nome} | Idade: ${u.idade} | Ativo: ${u.ativo} | Email: ${u.email}`);
    console.log(`Endereço: ${u.endereco.logradouro}, Nº ${u.endereco.numero} - ${u.endereco.cidade}/${u.endereco.estado} CEP: ${u.endereco.cep}`);
    console.log("-".repeat(50)); 
}

usuarios[1].ativo = true; 

console.log("\n--- LISTA APÓS ALTERAÇÃO (Jaime ativo) ---");
for (let u of usuarios) {
    console.log(`Nome: ${u.nome} | Ativo: ${u.ativo}`);
}