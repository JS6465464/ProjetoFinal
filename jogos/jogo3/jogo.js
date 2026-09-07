// ======================================================
// ELEMENTOS DO HTML
// ======================================================

const imagemJogo =
    document.getElementById("imagem-jogo")

const tampa =
    document.getElementById("tampa")

const respostas =
    document.getElementById("respostas")

const resposta1 =
    document.getElementById("resposta1")

const resposta2 =
    document.getElementById("resposta2")

const resposta3 =
    document.getElementById("resposta3")

const resposta4 =
    document.getElementById("resposta4")

const seguinte =
    document.getElementById("seguinte")

const home =
    document.getElementById("home")

const valorPontuacao =
    document.getElementById("valor-pontuacao")


const botoes = [
    resposta1,
    resposta2,
    resposta3,
    resposta4
]


// ======================================================
// SONS
// ======================================================

const somInicio1 =
    new Audio("recursos/x_inicio_do_jogo1.mp3")

const somInicio2 =
    new Audio("recursos/x_inicio_do_jogo2.mp3")

const somInicio3 =
    new Audio("recursos/x_inicio_do_jogo3.mp3")

const somAcertou =
    new Audio("recursos/X_Aplausos.wav")

const somErrou =
    new Audio("recursos/X_errar.mp3")


const sonsInicio = [
    somInicio1,
    somInicio2,
    somInicio3
]


// ======================================================
// IMAGENS
// ======================================================

const imagens = [

    "diferencas01_06.png",
    "diferencas02_05.png",
    "diferencas03_05.png",
    "diferencas04_12.png",
    "diferencas05_04.png",
    "diferencas06_06.png",
    "diferencas07_04.png",
    "diferencas08_04.png",
    "diferencas09_04.png",
    "diferencas10_04.png",
    "diferencas11_05.png",
    "diferencas12_04.png",
    "diferencas13_05.png",
    "diferencas14_04.png",
    "diferencas15_05.png",
    "diferencas16_06.png",
    "diferencas17_06.png",
    "diferencas18_06.png",
    "diferencas19_04.png",
    "diferencas20_05.png",
    "diferencas21_05.png",
    "diferencas22_05.png",
    "diferencas23_04.png",
    "diferencas24_05.png",
    "diferencas25_05.png",
    "diferencas26_08.png",
    "diferencas27_05.png",
    "diferencas28_04.png",
    "diferencas29_03.png",
    "diferencas30_05.png",
    "diferencas31_04.png",
    "diferencas32_08.png",
    "diferencas33_03.png",
    "diferencas34_04.png",
    "diferencas35_05.png",
    "diferencas36_06.png",
    "diferencas37_06.png"

]


// ======================================================
// VARIÁVEIS
// ======================================================

let imagensDisponiveis =
    imagens.slice()

let respostaCorreta = 0

let jogadas = 0

let acertos = 0


// ======================================================
// PARAR TODOS OS SONS
// ======================================================

function pararSons() {

    somInicio1.pause()
    somInicio1.currentTime = 0

    somInicio2.pause()
    somInicio2.currentTime = 0

    somInicio3.pause()
    somInicio3.currentTime = 0

    somAcertou.pause()
    somAcertou.currentTime = 0

    somErrou.pause()
    somErrou.currentTime = 0
}


// ======================================================
// ATUALIZAR PONTUAÇÃO
// ======================================================

function atualizarPontuacao() {

    valorPontuacao.innerText =
        acertos + " / " + jogadas
}


// ======================================================
// TOCAR INSTRUÇÃO ALEATÓRIA
// ======================================================

function tocarInstrucao() {

    pararSons()


    const posicaoSom =
        Math.floor(
            Math.random() * sonsInicio.length
        )


    sonsInicio[posicaoSom].play()
}


// ======================================================
// ESCOLHER IMAGEM
// ======================================================

function escolherImagem() {

    const posicaoImagem =
        Math.floor(
            Math.random() *
            imagensDisponiveis.length
        )


    const nomeImagem =
        imagensDisponiveis[posicaoImagem]


    imagensDisponiveis.splice(
        posicaoImagem,
        1
    )


    imagemJogo.src =
        "recursos/" + nomeImagem


    descobrirResposta(nomeImagem)

    criarRespostas()

    atualizarPontuacao()
}


// ======================================================
// DESCOBRIR RESPOSTA
// ======================================================

function descobrirResposta(nomeImagem) {

    const nomeSemExtensao =
        nomeImagem.substring(
            0,
            nomeImagem.length - 4
        )


    const doisUltimos =
        nomeSemExtensao.substring(
            nomeSemExtensao.length - 2
        )


    respostaCorreta =
        Number(doisUltimos)


    console.log(
        "Imagem:",
        nomeImagem
    )

    console.log(
        "Resposta correta:",
        respostaCorreta
    )
}


// ======================================================
// CRIAR RESPOSTAS
// ======================================================

function criarRespostas() {

    const numeros = []

    numeros.push(respostaCorreta)


    while (numeros.length < 4) {

        const variacao =
            Math.floor(
                Math.random() * 7
            ) - 3


        const numero =
            respostaCorreta + variacao


        if (
            numero > 0 &&
            numero != respostaCorreta &&
            !numeros.includes(numero)
        ) {

            numeros.push(numero)
        }
    }


    colocarNumerosNosBotoes(numeros)
}


// ======================================================
// DISTRIBUIR RESPOSTAS
// ======================================================

function colocarNumerosNosBotoes(numeros) {

    const numerosDisponiveis =
        numeros.slice()


    for (let botao of botoes) {

        const posicao =
            Math.floor(
                Math.random() *
                numerosDisponiveis.length
            )


        botao.innerText =
            numerosDisponiveis[posicao]


        numerosDisponiveis.splice(
            posicao,
            1
        )
    }
}


// ======================================================
// VERIFICAR RESPOSTA
// ======================================================

function verificarResposta(botao) {

    pararSons()


    const respostaEscolhida =
        Number(botao.innerText)


    jogadas = jogadas + 1


    if (
        respostaEscolhida ==
        respostaCorreta
    ) {

        acertos = acertos + 1

        somAcertou.play()

    } else {

        somErrou.play()
    }


    atualizarPontuacao()

    mostrarSolucao()
}


// ======================================================
// MOSTRAR SOLUÇÃO
// ======================================================

function mostrarSolucao() {

    tampa.style.display = "none"

    respostas.style.display = "none"

    seguinte.style.display = "block"


    if (
        imagensDisponiveis.length == 0
    ) {

        seguinte.innerText =
            "Terminar"

    } else {

        seguinte.innerText =
            "Seguinte"
    }
}


// ======================================================
// PRÓXIMA IMAGEM
// ======================================================

function proximaImagem() {

    pararSons()


    // Se não existem mais imagens,
    // regressa ao MiniGenio.

    if (
        imagensDisponiveis.length == 0
    ) {

        voltarMenu()

        return
    }


    tampa.style.display = "block"

    respostas.style.display = "flex"

    seguinte.style.display = "none"


    escolherImagem()

    tocarInstrucao()
}


// ======================================================
// VOLTAR AO MINIGENIO
// ======================================================

function voltarMenu() {

    pararSons()


    window.location.href =
        "../../index.html"
}


// ======================================================
// EVENTOS
// ======================================================

resposta1.addEventListener(
    "click",
    () => {

        verificarResposta(resposta1)
    }
)


resposta2.addEventListener(
    "click",
    () => {

        verificarResposta(resposta2)
    }
)


resposta3.addEventListener(
    "click",
    () => {

        verificarResposta(resposta3)
    }
)


resposta4.addEventListener(
    "click",
    () => {

        verificarResposta(resposta4)
    }
)


seguinte.addEventListener(
    "click",
    () => {

        proximaImagem()
    }
)


home.addEventListener(
    "click",
    () => {

        voltarMenu()
    }
)


// ======================================================
// INICIAR
// ======================================================

escolherImagem()

tocarInstrucao()