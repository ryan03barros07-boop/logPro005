let opcao = 1;
do{
console.log("==== MENU =====")
console.log("1 - Calcular soma")
console.log("2 - Exibir Contagem")
console.log("0 - Sair")
console.log("================"); 

opcao = 0;

switch(opcao){
    case 1:
        console.log("Calcular soma")
        break;
    case 2:
        console.log("Exibir contagem")
        break;
    case 0: 
    console.log("Sair")
    default:
        console.lof("Sistema encerrado");

}while(opcao !== 0);
console.log("Sistema encerrado");