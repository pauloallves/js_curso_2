let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    //console.log(chute == numeroSecreto);
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentantiva';
        let mensagemTentativas = `Parabéns, você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        //exibirTextoNaTela('p', 'Parabéns, você descobriu o número secreto.');
    }else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O chute é maior que o número secreto.');
        }else{
            exibirTextoNaTela('p', 'O chute é menor que o número secreto.');
        }
        tentativas++
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}












