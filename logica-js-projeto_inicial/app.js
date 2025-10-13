function exibirTexto(){
   console.log('Olá mundo!');
}
exibirTexto();
//--------------------------------------
function pegarNome(nome){
    console.log(`Olá, ${nome}`);
}
pegarNome('Alice');
//--------------------------------------
function dobrarNumero(numero){
    return numero * 2;
}
let resultado = dobrarNumero(8);
console.log(resultado);
//--------------------------------------
function calcularMedia(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}
let media = calcularMedia(8, 8, 8);
console.log(media);
//--------------------------------------
function verificarMaiorNumero(a, b){
    //if (a > b){
        //return a;
    //}else{
        //return b;
    //}
    return a > b ? a : b;
}
let maiorNumero = verificarMaiorNumero(11, 10);
console.log(maiorNumero);
//----------------------------------------
function multiplicarNumero(numero){
    return numero * numero;
}
let resultMult = multiplicarNumero(15);
console.log(resultMult);