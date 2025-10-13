
function calcularImc(peso, altura){
    let imc = peso / (altura * altura);
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
}
calcularImc(78, 1.65);
//------------------------------------------
function calcularFatorial(numero){
    if (numero == 0 || numero == 1){
        return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= numero; i++){
        fatorial *= i;
    }
    return fatorial;
}
console.log('O fatorial do valor digitado é: ' + calcularFatorial(5));
//-------------------------------------------
function conversaoDeMoeda(valorEmDolar){
    let valorConvertido = valorEmDolar * 4.80;
    console.log(`O valor em dólares convertidos em real é: R$ ${valorConvertido}`);
}
conversaoDeMoeda(10);
//-------------------------------------------
function calcularAreaMaisPerimetroDeAreaRetangular(base, altura){
    let area = base * altura;
    console.log(`A Área do retângulo é: ${area}`);
    let perimetro = 2 * (base + altura);
    console.log(`O perímetro do retângulo é: ${perimetro}`);
}
calcularAreaMaisPerimetroDeAreaRetangular(30, 10);
//------------------------------------------
function calcularAreaMaisPerimetroDeAreaCircular(raio){
    let pi = 3.14;
    let area = pi * (raio * raio);
    console.log(`A área da sala circular é: ${area}`);
    let perimetro = 2 * pi * raio;
    console.log(`O perímetro de uma sala circular é: ${perimetro.toFixed(1)}`);
}
calcularAreaMaisPerimetroDeAreaCircular(5);
//-----------------------------------------
function calcularTabuada(numero){
    for(let i = 1; i <= 10; i++){
        let resultado = numero * i;
        console.log(`${numero} X ${i} = ${resultado}`);
    }
}
calcularTabuada(7);