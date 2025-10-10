let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificarQlik(){
   console.log('O botão foi clicado');
}

function alerta(){
    alert('Eu amo JS');
}

function resposta(){
    let respostaUsuario = prompt('Digite um nome de um cidade do Brasil de sua preferência');
    alert(`Estive em ${respostaUsuario} e lembrei de você.`);
}

function some(){
    let num1 = Number(prompt('Digite o primeiro número inteiro da nossa soma.'));
    let num2 = Number(prompt('Digite o segundo número inteiro da nossa soma.'));
    let soma = num1 + num2;
    alert(`O resultado de nossa soma é: ${soma}`);
}