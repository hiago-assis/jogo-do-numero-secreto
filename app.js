let listaDeNumersoSorteados = [];
let limite = 100;
let numSec = gerarNum();
let tentativas = 1;


function limpar(){
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirMensagemInicial(){
    textoNaTela('h1', "Jogo do número secreto");
    textoNaTela('p', "Escolha um número entre 1 e 100");
}
exibirMensagemInicial();

function textoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 

    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.5; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }


}


function verificarChute() {
    let chute = document.querySelector('input').value ;
    
    if(chute == numSec){

        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;

        textoNaTela( 'p', mensagem);
        textoNaTela('h1', "Acertou!");

        let novojogo = document.getElementById('reiniciar').removeAttribute('disabled');

    }
    else if(chute > numSec){
        textoNaTela('p',"O número é menor");

    }else{
        textoNaTela('p',"O número é maior");
    }

    tentativas++;
    limpar();
}

function reiniciarJogo(){

    numSec = gerarNum();
    limpar();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function gerarNum(){

    let numeroEscolhido =  parseInt(Math.random() * limite + 1);
    let qntdElementos =  listaDeNumersoSorteados.length;

    if(qntdElementos == limite){
        listaDeNumersoSorteados = [];
    }

    if(listaDeNumersoSorteados.includes(numeroEscolhido)){
            return gerarNum();
    }
    else{
            listaDeNumersoSorteados.push(numeroEscolhido);
            return numeroEscolhido;
    }


}