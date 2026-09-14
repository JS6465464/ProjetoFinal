/* ==================================================
   ELEMENTOS
================================================== */

const botaoAvatar =
    document.getElementById("botaoAvatar");

const botaoConfiguracoes =
    document.getElementById("botaoConfiguracoes");


const popupAvatar =
    document.getElementById("popupAvatar");

const popupConfiguracoes =
    document.getElementById("popupConfiguracoes");


const fecharAvatar =
    document.getElementById("fecharAvatar");

const fecharConfiguracoes =
    document.getElementById("fecharConfiguracoes");


const opcoesAvatar =
    document.querySelectorAll(".opcao-avatar");

const opcoesNome =
    document.querySelectorAll(".opcao-nome");


const guardarAvatar =
    document.getElementById("guardarAvatar");

const guardarNome =
    document.getElementById("guardarNome");


const nomeUtilizador =
    document.getElementById("nomeUtilizador");


/* ==================================================
   VARIÁVEIS
================================================== */

let avatarSelecionado = null;

let nomeSelecionado = null;


/* ==================================================
   ABRIR POPUP DOS AVATARES
================================================== */

botaoAvatar.addEventListener(
    "click",
    function () {

        popupConfiguracoes
            .classList
            .remove("aberto");

        popupAvatar
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

        popupAvatar
            .classList
            .remove("aberto");

        popupConfiguracoes
            .classList
            .toggle("aberto");

    }
);


/* ==================================================
   FECHAR POPUPS
================================================== */

fecharAvatar.addEventListener(
    "click",
    function () {

        popupAvatar
            .classList
            .remove("aberto");

    }
);


fecharConfiguracoes.addEventListener(
    "click",
    function () {

        popupConfiguracoes
            .classList
            .remove("aberto");

    }
);


/* ==================================================
   SELECIONAR AVATAR
================================================== */

opcoesAvatar.forEach(
    function (avatar) {

        avatar.addEventListener(
            "click",
            function () {

                opcoesAvatar.forEach(
                    function (opcao) {

                        opcao
                            .classList
                            .remove("selecionado");

                    }
                );


                avatar
                    .classList
                    .add("selecionado");


                avatarSelecionado =
                    avatar.dataset.avatar;

            }
        );

    }
);


/* ==================================================
   GUARDAR AVATAR
================================================== */

guardarAvatar.addEventListener(
    "click",
    function () {

        /*
            Nesta primeira versão os círculos
            ainda não possuem imagens.

            Mais tarde iremos utilizar
            avatarSelecionado para saber
            qual imagem foi escolhida.
        */

        popupAvatar
            .classList
            .remove("aberto");

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

        }


        popupConfiguracoes
            .classList
            .remove("aberto");

    }
);