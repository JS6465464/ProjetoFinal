/* ==================================================
   ELEMENTOS
================================================== */

const botaoAmigo =
    document.getElementById("botaoAmigo");

const botaoConfiguracoes =
    document.getElementById("botaoConfiguracoes");


const popupAmigo =
    document.getElementById("popupAmigo");

const popupConfiguracoes =
    document.getElementById("popupConfiguracoes");


const fecharAmigo =
    document.getElementById("fecharAmigo");

const fecharConfiguracoes =
    document.getElementById("fecharConfiguracoes");


const opcoesAmigo =
    document.querySelectorAll(".opcao-amigo");

const opcoesNome =
    document.querySelectorAll(".opcao-nome");

const opcoesPersonagem =
    document.querySelectorAll(".opcao-personagem");


const guardarAmigo =
    document.getElementById("guardarAmigo");

const guardarNome =
    document.getElementById("guardarNome");

const guardarPersonagem =
    document.getElementById("guardarPersonagem");

const guardarNomeEscrito =
    document.getElementById("guardarNomeEscrito");


const nomeUtilizador =
    document.getElementById("nomeUtilizador");

const cabecaAmigoPrincipal =
    document.getElementById("cabecaAmigoPrincipal");

const corpoAmigo =
    document.getElementById("corpoAmigo");


/* ==================================================
   ELEMENTOS DAS CONFIGURAÇÕES
================================================== */

const tituloConfiguracoes =
    document.getElementById("tituloConfiguracoes");

const menuNomes =
    document.getElementById("menuNomes");

const areaNomes =
    document.getElementById("areaNomes");

const areaPersonagens =
    document.getElementById("areaPersonagens");

const areaEscreverNome =
    document.getElementById("areaEscreverNome");


const abrirNomes =
    document.getElementById("abrirNomes");

const abrirPersonagens =
    document.getElementById("abrirPersonagens");

const abrirEscreverNome =
    document.getElementById("abrirEscreverNome");


const botoesVoltar =
    document.querySelectorAll(".botao-voltar");


const campoNome =
    document.getElementById("campoNome");

const mensagemErroNome =
    document.getElementById("mensagemErroNome");


/* ==================================================
   VARIÁVEIS
================================================== */

let cabecaSelecionada = null;

let corpoSelecionado = null;

let nomeSelecionado = null;


/* ==================================================
   ABRIR POPUP DOS AMIGOS
================================================== */

botaoAmigo.addEventListener(
    "click",
    function () {

        popupConfiguracoes
            .classList
            .remove("aberto");

        popupAmigo
            .classList
            .toggle("aberto");

    }
);


/* ==================================================
   ABRIR CONFIGURAÇÕES
================================================== */

botaoConfiguracoes.addEventListener(
    "click",
    function () {

        popupAmigo
            .classList
            .remove("aberto");

        popupConfiguracoes
            .classList
            .toggle("aberto");


        mostrarMenuNomes();

    }
);


/* ==================================================
   FECHAR POPUP DOS AMIGOS
================================================== */

fecharAmigo.addEventListener(
    "click",
    function () {

        popupAmigo
            .classList
            .remove("aberto");

    }
);


/* ==================================================
   FECHAR CONFIGURAÇÕES
================================================== */

fecharConfiguracoes.addEventListener(
    "click",
    function () {

        popupConfiguracoes
            .classList
            .remove("aberto");

    }
);


/* ==================================================
   SELECIONAR AMIGO
================================================== */

opcoesAmigo.forEach(
    function (amigo) {

        amigo.addEventListener(
            "click",
            function () {

                opcoesAmigo.forEach(
                    function (opcao) {

                        opcao
                            .classList
                            .remove("selecionado");

                    }
                );


                amigo
                    .classList
                    .add("selecionado");


                cabecaSelecionada =
                    amigo.dataset.cabeca;

                corpoSelecionado =
                    amigo.dataset.corpo;


                corpoAmigo.src =
                    corpoSelecionado;

                corpoAmigo.style.display =
                    "block";

            }
        );

    }
);


/* ==================================================
   GUARDAR AMIGO
================================================== */

guardarAmigo.addEventListener(
    "click",
    function () {

        if (cabecaSelecionada !== null) {

            cabecaAmigoPrincipal.src =
                cabecaSelecionada;

        }


        popupAmigo
            .classList
            .remove("aberto");

    }
);


/* ==================================================
   MOSTRAR MENU PRINCIPAL DOS NOMES
================================================== */

function mostrarMenuNomes() {

    tituloConfiguracoes.textContent =
        "Escolhe o teu nome";


    menuNomes.style.display =
        "flex";

    areaNomes.style.display =
        "none";

    areaPersonagens.style.display =
        "none";

    areaEscreverNome.style.display =
        "none";


    mensagemErroNome.textContent =
        "";

}


/* ==================================================
   ABRIR NOMES
================================================== */

abrirNomes.addEventListener(
    "click",
    function () {

        tituloConfiguracoes.textContent =
            "Escolhe um nome";


        menuNomes.style.display =
            "none";

        areaNomes.style.display =
            "block";

    }
);


/* ==================================================
   ABRIR PERSONAGENS
================================================== */

abrirPersonagens.addEventListener(
    "click",
    function () {

        tituloConfiguracoes.textContent =
            "Escolhe uma personagem";


        menuNomes.style.display =
            "none";

        areaPersonagens.style.display =
            "block";

    }
);


/* ==================================================
   ABRIR ESCREVER NOME
================================================== */

abrirEscreverNome.addEventListener(
    "click",
    function () {

        tituloConfiguracoes.textContent =
            "Escreve o teu nome";


        menuNomes.style.display =
            "none";

        areaEscreverNome.style.display =
            "block";


        mensagemErroNome.textContent =
            "";

    }
);


/* ==================================================
   BOTÕES VOLTAR
================================================== */

botoesVoltar.forEach(
    function (botao) {

        botao.addEventListener(
            "click",
            function () {

                mostrarMenuNomes();

            }
        );

    }
);


/* ==================================================
   SELECIONAR NOME
================================================== */

opcoesNome.forEach(
    function (nome) {

        nome.addEventListener(
            "click",
            function () {

                opcoesNome.forEach(
                    function (opcao) {

                        opcao
                            .classList
                            .remove("selecionado");

                    }
                );


                nome
                    .classList
                    .add("selecionado");


                nomeSelecionado =
                    nome.dataset.nome;

            }
        );

    }
);


/* ==================================================
   GUARDAR NOME
================================================== */

guardarNome.addEventListener(
    "click",
    function () {

        if (nomeSelecionado !== null) {

            nomeUtilizador.textContent =
                nomeSelecionado + "!";


            popupConfiguracoes
                .classList
                .remove("aberto");

        }

    }
);


/* ==================================================
   SELECIONAR PERSONAGEM
================================================== */

opcoesPersonagem.forEach(
    function (personagem) {

        personagem.addEventListener(
            "click",
            function () {

                opcoesPersonagem.forEach(
                    function (opcao) {

                        opcao
                            .classList
                            .remove("selecionado");

                    }
                );


                personagem
                    .classList
                    .add("selecionado");


                nomeSelecionado =
                    personagem.dataset.nome;

            }
        );

    }
);


/* ==================================================
   GUARDAR PERSONAGEM
================================================== */

guardarPersonagem.addEventListener(
    "click",
    function () {

        if (nomeSelecionado !== null) {

            nomeUtilizador.textContent =
                nomeSelecionado + "!";


            popupConfiguracoes
                .classList
                .remove("aberto");

        }

    }
);


/* ==================================================
   GUARDAR NOME ESCRITO
================================================== */

guardarNomeEscrito.addEventListener(
    "click",
    function () {

        let nomeEscrito =
            campoNome.value.trim();


        /*
            O nome deve ter pelo menos
            2 caracteres e no máximo 15.
        */

        if (
            nomeEscrito.length < 2 ||
            nomeEscrito.length > 15
        ) {

            mensagemErroNome.textContent =
                "Preenche um nome válido.";

        } else {

            mensagemErroNome.textContent =
                "";


            nomeUtilizador.textContent =
                nomeEscrito + "!";


            popupConfiguracoes
                .classList
                .remove("aberto");

        }

    }
);