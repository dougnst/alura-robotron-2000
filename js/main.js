/* const robotron = document.querySelector('#Robotron');

robotron.addEventListener("click", function () {
    console.log('Cliquei no robô');
})

function dizOi(nome) {
    console.log('Oi ' + nome + '!');
    console.log('Bem vindo ao Robotron 2000!');
}

dizOi('Douglas');

somar.addEventListener("click", () => {manipulaDados("somar")})
subtrair.addEventListener("click", () => {manipulaDados("subtrair")})

*/
 
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");

const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const imagem = document.querySelector("[data-cor-imagem");
const botaoImagem = document.querySelector("[data-cor-botao");

const cores = {
    vermelho: "img/robotron-vermelho.png",
    amarelo: "img/robotron-amarelo.png",
    azul: "img/robotron-azul.png",
    branco: "img/robotron-branco.png",
    preto: "img/robotron-preto.png",
    rosa: "img/robotron-rosa.png"
};

botaoImagem.addEventListener("click", (evento) => {trocarImagem();});

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    })
})

function trocarImagem () {

    const corAtual = document.querySelector("[data-cor-imagem").getAttribute("src");
    
    if (corAtual === "img/robotron-vermelho.png") {
        imagem.setAttribute("src", "img/robotron-amarelo.png");
    } if (corAtual === "img/robotron-amarelo.png") {
        imagem.setAttribute("src", "img/robotron-azul.png");
    } if (corAtual === "img/robotron-azul.png") {
        imagem.setAttribute("src", "img/robotron-rosa.png");
    } if (corAtual === "img/robotron-rosa.png") {
        imagem.setAttribute("src", "img/robotron-branco.png");
    } if (corAtual === "img/robotron-branco.png") {
        imagem.setAttribute("src", "img/robotron-preto.png");
    } if (corAtual === "img/robotron-preto.png") {
        imagem.setAttribute("src", "img/robotron-vermelho.png");
    }

}

function manipulaDados (operacao, controle) {

    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas (peca) {
    
    estatistica.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]
    })

}

