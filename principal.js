/* FUNDO ALEATÓRIO */
const fundos = ["recursos/fundo1.png",
                "recursos/fundo2.png",
                "recursos/fundo3.png",
                "recursos/fundo4.png",
                "recursos/fundo5.png",
                "recursos/fundo6.png",
                "recursos/fundo7.png", 
                "recursos/fundo8.png"];

const numeroFundo = Math.floor(Math.random() * fundos.length);
const fundoEscolhido = fundos[numeroFundo];

document.body.style.backgroundImage = "url('" + fundoEscolhido + "')";

/* IMAGEM DE BOAS-VINDAS */
const imagemBemVindo = document.querySelector(".titulo-principal img");

if (fundoEscolhido === "recursos/fundo3.png" || 
    fundoEscolhido === "recursos/fundo6.png" || 
    fundoEscolhido === "recursos/fundo7.png" || 
    fundoEscolhido === "recursos/fundo8.png") 
    {
        imagemBemVindo.src = "recursos/bem_vindo_escuro.png";
    } else {
        imagemBemVindo.src = "recursos/bem_vindo.png";
    }

/* ELEMENTOS */
const botaoAmigo = document.getElementById("botaoAmigo");
const botaoConfiguracoes = document.getElementById("botaoConfiguracoes");
const botaoNovoRegisto = document.getElementById("botaoNovoRegisto");
const popupAmigo = document.getElementById("popupAmigo");
const popupConfiguracoes = document.getElementById("popupConfiguracoes");
const fecharAmigo = document.getElementById("fecharAmigo");
const fecharConfiguracoes = document.getElementById("fecharConfiguracoes");
const opcoesAmigo = document.querySelectorAll(".opcao-amigo");
const opcoesNome = document.querySelectorAll(".opcao-nome");
const opcoesPersonagem = document.querySelectorAll(".opcao-personagem");
const guardarAmigo = document.getElementById("guardarAmigo");
const guardarNome = document.getElementById("guardarNome");
const guardarPersonagem = document.getElementById("guardarPersonagem");
const guardarNomeEscrito = document.getElementById("guardarNomeEscrito");
const nomeUtilizador = document.getElementById("nomeUtilizador");
const cabecaAmigoPrincipal = document.getElementById("cabecaAmigoPrincipal");
const corpoAmigo = document.getElementById("corpoAmigo");

/* ELEMENTOS DAS CONFIGURAÇÕES */
const tituloConfiguracoes = document.getElementById("tituloConfiguracoes");
const menuNomes = document.getElementById("menuNomes");
const areaNomes = document.getElementById("areaNomes");
const areaPersonagens = document.getElementById("areaPersonagens");
const areaEscreverNome = document.getElementById("areaEscreverNome");
const abrirNomes = document.getElementById("abrirNomes");
const abrirPersonagens = document.getElementById("abrirPersonagens");
const abrirEscreverNome = document.getElementById("abrirEscreverNome");
const botoesVoltar = document.querySelectorAll(".botao-voltar");
const campoNome = document.getElementById("campoNome");
const mensagemErroNome = document.getElementById("mensagemErroNome");

/* NOMES REGISTADOS */
const botaoNomesRegistados = document.getElementById("botaoNomesRegistados");
const popupNomesRegistados = document.getElementById("popupNomesRegistados");
const fecharNomesRegistados = document.getElementById("fecharNomesRegistados");
const listaNomesRegistados = document.getElementById("listaNomesRegistados");
const botaoReset = document.getElementById("botaoReset");
const botaoBorracha = document.getElementById("botaoBorracha");
const botaoHistorico = document.getElementById("botaoHistorico");
const popupHistorico = document.getElementById("popupHistorico");
const fecharHistorico = document.getElementById("fecharHistorico");
const listaHistorico = document.getElementById("listaHistorico");

/* VARIÁVEIS */
let borrachaAtiva = false;
let resetAtivo = false;
let cabecaSelecionada = null;
let corpoSelecionado = null;
let nomeSelecionado = null;

/* RECUPERAR ESCOLHAS GUARDADAS */
const nomeGuardado = localStorage.getItem("nomeUtilizador");
const cabecaGuardada = localStorage.getItem("cabecaAmigoUtilizador");
const amigoGuardado = localStorage.getItem("amigoUtilizador");

nomeUtilizador.textContent = "Explorador!";
cabecaAmigoPrincipal.src = "recursos/cara_botao.png";
corpoAmigo.src = "";
corpoAmigo.style.display = "none";
//botaoNovoRegisto.style.display = "none";

if (nomeGuardado !== null) {
    nomeUtilizador.textContent = nomeGuardado + "!";
}

if (cabecaGuardada !== null) {
    cabecaAmigoPrincipal.src = cabecaGuardada;
}

if (amigoGuardado !== null) {
    corpoAmigo.src = amigoGuardado;
    corpoAmigo.style.display = "block";
}

/* ATUALIZAR BOTÃO NOVO REGISTO */
// function atualizarBotaoNovoRegisto() {
//     const registos = lerRegistosUtilizador();

//     let existeUtilizadorReal = false;

//     for (let registo of registos) {
//         if (eUtilizadorReal(registo) === true) {
//             existeUtilizadorReal = true;
//             break;
//         }
//     }

//     if (existeUtilizadorReal === true) {
//         botaoNovoRegisto.style.display = "block";
//     } else {
//         botaoNovoRegisto.style.display = "none";
//     }
// }

/* REPOR AMIGO GUARDADO */
function reporAmigoGuardado() {
    const cabecaAnterior = localStorage.getItem("cabecaAmigoUtilizador");
    const amigoAnterior = localStorage.getItem("amigoUtilizador");

    if (cabecaAnterior !== null) {
        cabecaAmigoPrincipal.src = cabecaAnterior;
    } else {
        cabecaAmigoPrincipal.src = "recursos/cara_botao.png";
    }

    if (amigoAnterior !== null) {
        corpoAmigo.src = amigoAnterior;
        corpoAmigo.style.display = "block";
    } else {
        corpoAmigo.src = "";
        corpoAmigo.style.display = "none";
    }

    cabecaSelecionada = null;
    corpoSelecionado = null;

    opcoesAmigo.forEach(function (opcao) {
        opcao.classList.remove("selecionado");
    });
}

/* REPOR NOME GUARDADO */
function reporNomeGuardado() {
    const nomeAnterior = localStorage.getItem("nomeUtilizador");

    if (nomeAnterior !== null) {
        nomeUtilizador.textContent = nomeAnterior + "!";
    } else {
        nomeUtilizador.textContent = "Explorador!";
    }

    nomeSelecionado = null;

    opcoesNome.forEach(function (opcao) {
        opcao.classList.remove("selecionado");
    });

    opcoesPersonagem.forEach(function (opcao) {
        opcao.classList.remove("selecionado");
    });

    campoNome.value = "";
    mensagemErroNome.textContent = "";
}

/* NOVO REGISTO */
botaoNovoRegisto.addEventListener("click", function () {
    guardarDadosRegistoAtual();
    fecharTodosPopups();

    borrachaAtiva = false;
    botaoBorracha.classList.remove("ativa");

    criarNovoUtilizador();
    atualizarBotaoBorracha();
    atualizarBotaoNovoRegisto();
});

/* ABRIR POPUP DOS AMIGOS */
botaoAmigo.addEventListener("click", function () {
    popupNomesRegistados.style.display = "none";
    popupHistorico.style.display = "none";

    const popupBrinquedosAberto = document.getElementById("popupColecaoBrinquedos");

    if (popupBrinquedosAberto !== null) {
        popupBrinquedosAberto.style.display = "none";
    }

    if (popupConfiguracoes.classList.contains("aberto")) {
        reporNomeGuardado();
    }

    popupConfiguracoes.classList.remove("aberto");

    if (popupAmigo.classList.contains("aberto")) {
        reporAmigoGuardado();
        popupAmigo.classList.remove("aberto");
    } else {
        popupAmigo.classList.add("aberto");
    }
});

/* ABRIR CONFIGURAÇÕES*/
botaoConfiguracoes.addEventListener("click", function () {
    popupNomesRegistados.style.display = "none";
    popupHistorico.style.display = "none";

    const popupBrinquedosAberto = document.getElementById("popupColecaoBrinquedos");

    if (popupBrinquedosAberto !== null) {
        popupBrinquedosAberto.style.display = "none";
    }

    if (popupAmigo.classList.contains("aberto")) {
        reporAmigoGuardado();
    }

    popupAmigo.classList.remove("aberto");

    if (popupConfiguracoes.classList.contains("aberto")) {
        reporNomeGuardado();
        popupConfiguracoes.classList.remove("aberto");
    } else {
        popupConfiguracoes.classList.add("aberto");
        mostrarMenuNomes();
    }
});

/* FECHAR POPUP DOS AMIGOS */
fecharAmigo.addEventListener("click", function () {
    reporAmigoGuardado();
    popupAmigo.classList.remove("aberto");
});

/* FECHAR CONFIGURAÇÕES*/
fecharConfiguracoes.addEventListener("click", function () {
    reporNomeGuardado();
    popupConfiguracoes.classList.remove("aberto");
});

/* SELECIONAR AMIGO*/
opcoesAmigo.forEach(function (amigo) {
    amigo.addEventListener("click", function () {
        opcoesAmigo.forEach(function (opcao) {
            opcao.classList.remove("selecionado");
        });

        amigo.classList.add("selecionado");

        cabecaSelecionada = amigo.dataset.cabeca;
        corpoSelecionado = amigo.dataset.corpo;

        cabecaAmigoPrincipal.src = cabecaSelecionada;
        corpoAmigo.src = corpoSelecionado;
        corpoAmigo.style.display = "block";
    });
});

/* GUARDAR AMIGO*/
guardarAmigo.addEventListener("click", function () {
    if (cabecaSelecionada !== null && corpoSelecionado !== null) {

        cabecaAmigoPrincipal.src = cabecaSelecionada;
        corpoAmigo.src = corpoSelecionado;
        corpoAmigo.style.display = "block";

        localStorage.setItem("cabecaAmigoUtilizador", cabecaSelecionada);
        localStorage.setItem("amigoUtilizador", corpoSelecionado);

        registarEscolhaAtual();
        //atualizarBotaoNovoRegisto();

        cabecaSelecionada = null;
        corpoSelecionado = null;

        opcoesAmigo.forEach(function (opcao) {
            opcao.classList.remove("selecionado");
        });
    }

    popupAmigo.classList.remove("aberto");
});

/* MOSTRAR MENU PRINCIPAL DOS NOMES */
function mostrarMenuNomes() {
    tituloConfiguracoes.textContent = "Escolhe o teu nome";
    menuNomes.style.display = "flex";
    areaNomes.style.display = "none";
    areaPersonagens.style.display = "none";
    areaEscreverNome.style.display = "none";
    mensagemErroNome.textContent = "";
}

/* ABRIR NOMES */
abrirNomes.addEventListener("click", function () {
    tituloConfiguracoes.textContent = "Escolhe um nome";
    menuNomes.style.display = "none";
    areaNomes.style.display = "block";
});

/* ABRIR PERSONAGENS */
abrirPersonagens.addEventListener("click", function () {
    tituloConfiguracoes.textContent = "Escolhe uma personagem";
    menuNomes.style.display = "none";
    areaPersonagens.style.display = "block";
});

/* ABRIR ESCREVER NOME*/
abrirEscreverNome.addEventListener("click", function () {
    tituloConfiguracoes.textContent = "Escreve o teu nome";
    menuNomes.style.display = "none";
    areaEscreverNome.style.display = "block";
    mensagemErroNome.textContent = "";
});

/* BOTÕES VOLTAR*/
botoesVoltar.forEach(function (botao) {
    botao.addEventListener("click", function () {
        reporNomeGuardado();
        mostrarMenuNomes();
    });
});

/* SELECIONAR NOME*/
opcoesNome.forEach(function (nome) {
    nome.addEventListener("click", function () {
        opcoesNome.forEach(function (opcao) {
            opcao.classList.remove("selecionado");
        });

        nome.classList.add("selecionado");

        nomeSelecionado = nome.dataset.nome;
        nomeUtilizador.textContent = nomeSelecionado + "!";
    });
});

/* GUARDAR NOME*/
guardarNome.addEventListener("click", function () {
    if (nomeSelecionado !== null) {

        nomeUtilizador.textContent = nomeSelecionado + "!";
        localStorage.setItem("nomeUtilizador", nomeSelecionado);

        registarEscolhaAtual();
        //atualizarBotaoNovoRegisto();

        nomeSelecionado = null;
        popupConfiguracoes.classList.remove("aberto");
    }
});

/* SELECIONAR PERSONAGEM */
opcoesPersonagem.forEach(function (personagem) {
    personagem.addEventListener("click", function () {
        opcoesPersonagem.forEach(function (opcao) {
            opcao.classList.remove("selecionado");
        });

        personagem.classList.add("selecionado");

        nomeSelecionado = personagem.dataset.nome;
        nomeUtilizador.textContent = nomeSelecionado + "!";
    });
});

/* GUARDAR PERSONAGEM*/
guardarPersonagem.addEventListener("click", function () {
    if (nomeSelecionado !== null) {


        nomeUtilizador.textContent = nomeSelecionado + "!";
        localStorage.setItem("nomeUtilizador", nomeSelecionado);

        registarEscolhaAtual();
        //atualizarBotaoNovoRegisto();

        nomeSelecionado = null;
        popupConfiguracoes.classList.remove("aberto");
    }
});

/* PRÉ-VISUALIZAR NOME ESCRITO */

campoNome.addEventListener("input", function () {
    const nomeEscrito = campoNome.value.trim();

    if (nomeEscrito.length > 0) {
        nomeUtilizador.textContent = nomeEscrito + "!";
    } else {
        const nomeAnterior = localStorage.getItem("nomeUtilizador");

        if (nomeAnterior !== null) {
            nomeUtilizador.textContent = nomeAnterior + "!";
        } else {
            nomeUtilizador.textContent = "Explorador!";
        }
    }
});

/* GUARDAR NOME ESCRITO*/
guardarNomeEscrito.addEventListener("click", function () {
    let nomeEscrito = campoNome.value.trim();

    if (nomeEscrito.length < 2 || nomeEscrito.length > 15) {
        mensagemErroNome.textContent = "Preenche um nome válido.";
    } else {
        mensagemErroNome.textContent = "";

        nomeUtilizador.textContent = nomeEscrito + "!";
        localStorage.setItem("nomeUtilizador", nomeEscrito);

        registarEscolhaAtual();
        //atualizarBotaoNovoRegisto();

        campoNome.value = "";
        popupConfiguracoes.classList.remove("aberto");
    }
});

/* FECHAR TODOS OS POPUPS */
function fecharTodosPopups() {
    popupAmigo.classList.remove("aberto");
    popupConfiguracoes.classList.remove("aberto");
    popupNomesRegistados.style.display = "none";
    popupHistorico.style.display = "none";

    const popupBrinquedos = document.getElementById("popupColecaoBrinquedos");

    if (popupBrinquedos !== null) {
        popupBrinquedos.style.display = "none";
    }
}

/* REGISTAR ESCOLHA ATUAL */
function registarEscolhaAtual() {
    const registos = lerRegistosUtilizador();
    const posicao = encontrarRegistoAtual(registos);

    if (posicao === -1) {
        return;
    }

    registos[posicao].nome =
        localStorage.getItem("nomeUtilizador");

    registos[posicao].cabeca =
        localStorage.getItem("cabecaAmigoUtilizador");

    registos[posicao].amigo =
        localStorage.getItem("amigoUtilizador");

    guardarRegistosUtilizador(registos);
}

/* CRIAR NOVO UTILIZADOR */
function criarNovoUtilizador() {
    const registos = lerRegistosUtilizador();

    const novoRegisto = {
        id: gerarNovoIdUtilizador(registos),
        nome: "Explorador",
        cabeca: "recursos/cara_botao.png",
        amigo: null,
        brinquedos: [],
        diferencas: 0,
        memoriaFacil: 0,
        memoriaDificil: 0,
        sons: 0,
        animaisFacil: 0,
        animaisDificil: 0,
        historico: []
    };

    registos.unshift(novoRegisto);

    guardarRegistosUtilizador(registos);

    localStorage.setItem("nomeUtilizador", "Explorador");
    localStorage.setItem(
        "cabecaAmigoUtilizador",
        "recursos/cara_botao.png"
    );
    localStorage.removeItem("amigoUtilizador");

    carregarDadosDoRegisto(novoRegisto);

    mostrarUtilizadorExplorador();
}

/* APAGAR REGISTO */
function apagarRegisto(posicao) {
    const registos = lerRegistosUtilizador();
    const registo = registos[posicao];

    if (registo === undefined) {
        return;
    }

    const atual = encontrarRegistoAtual(registos);

    registos.splice(posicao, 1);
    guardarRegistosUtilizador(registos);

    if (atual === posicao) {
        localStorage.removeItem("nomeUtilizador");
        localStorage.removeItem("cabecaAmigoUtilizador");
        localStorage.removeItem("amigoUtilizador");

        limparDadosAtivos();

        mostrarUtilizadorExplorador();

        if (registos.length > 0) {
            selecionarNomeRegistado(registos[0]);
        } else {
            criarNovoUtilizador();
        }
    }

    mostrarNomesRegistados();
    atualizarBotaoBorracha();
    atualizarBotaoNovoRegisto();
}

/*CRIA O UTILIZADOR AO ABRIR A PAGINA*/
function garantirUtilizadorAtual() {
    const registos = lerRegistosUtilizador();

    const idAtual = Number(localStorage.getItem("idUtilizadorAtual"));

    if (!isNaN(idAtual)) {
        const posicao = encontrarRegistoAtual(registos);

        if (posicao !== -1) {
            return;
        }
    }

    if (registos.length === 0) {
        criarNovoUtilizador();
    }
}

function mostrarUtilizadorExplorador() {
    nomeUtilizador.textContent = "Explorador!";
    cabecaAmigoPrincipal.src = "recursos/cara_botao.png";
    corpoAmigo.src = "";
    corpoAmigo.style.display = "none";
}

/* MOSTRAR REGISTOS*/
function mostrarNomesRegistados() {
    const registos = lerRegistosUtilizador();

    listaNomesRegistados.innerHTML = "";

    // let mostrarRegistos = false;

    // if (registos.length > 1) {
    //     mostrarRegistos = true;
    // } else if (
    //     registos.length === 1 &&
    //     eUtilizadorReal(registos[0]) === true
    // ) {
    //     mostrarRegistos = true;
    // }

    let mostrarRegistos = registos.length > 0;

    if (mostrarRegistos === true) {
        for (let i = 0; i < registos.length; i++) {
            const registo = registos[i];

            const botao = document.createElement("button");

            botao.type = "button";
            botao.className = "registo-utilizador";

            if (registo.cabeca !== null) {
                const imagem = document.createElement("img");
                imagem.src = registo.cabeca;
                imagem.alt = "Amigo registado";
                botao.appendChild(imagem);
            }

            if (registo.nome !== null) {
                const texto = document.createElement("span");
                texto.textContent = registo.nome;
                botao.appendChild(texto);
            }

            botao.addEventListener("click", function () {
                if (borrachaAtiva === true) {
                    apagarRegisto(i);
                } else if (resetAtivo === true) {
                    const idAtual = Number(localStorage.getItem("idUtilizadorAtual"));

                    resetarRegistoUtilizador(i);

                    if (registo.id === idAtual) {
                        mostrarUtilizadorExplorador();
                    }

                    mostrarNomesRegistados();
                } else {
                    selecionarNomeRegistado(registo);
                }
            });

            listaNomesRegistados.appendChild(botao);
        }
    } else {
        const mensagem = document.createElement("p");

        mensagem.className = "sem-registos";
        mensagem.textContent = "Ainda não existem utilizadores registados.";

        listaNomesRegistados.appendChild(mensagem);
    }

    popupNomesRegistados.style.display = "flex";
}

/* SELECIONAR REGISTO */
function selecionarNomeRegistado(registo) {
    guardarDadosRegistoAtual();

    if (registo.nome !== null) {
        localStorage.setItem("nomeUtilizador", registo.nome);
        nomeUtilizador.textContent = registo.nome + "!";
    } else {
        localStorage.removeItem("nomeUtilizador");
        nomeUtilizador.textContent = "Explorador!";
    }

    if (registo.cabeca !== null) {
    localStorage.setItem(
        "cabecaAmigoUtilizador",
        registo.cabeca
    );
    cabecaAmigoPrincipal.src = registo.cabeca;
    } else {
        localStorage.setItem(
            "cabecaAmigoUtilizador",
            "recursos/cara_botao.png"
        );

        cabecaAmigoPrincipal.src = "recursos/cara_botao.png";
    }

    if (registo.amigo !== null) {
        localStorage.setItem(
            "amigoUtilizador",
            registo.amigo
        );

        corpoAmigo.src = registo.amigo;
        corpoAmigo.style.display = "block";
    } else {
        localStorage.removeItem("amigoUtilizador");

        corpoAmigo.src = "";
        corpoAmigo.style.display = "none";
    }

    carregarDadosDoRegisto(registo);

    cabecaSelecionada = null;
    corpoSelecionado = null;
    nomeSelecionado = null;

    popupNomesRegistados.style.display = "none";
}

function atualizarBotaoBorracha() {
    const registos = lerRegistosUtilizador();

    if (registos.length > 1) {
        botaoBorracha.style.display = "block";
    } else {
        botaoBorracha.style.display = "none";
        borrachaAtiva = false;
        botaoBorracha.classList.remove("ativa");
    }
}

//Reset
botaoReset.addEventListener("click", function () {
    resetAtivo = !resetAtivo;

    if (resetAtivo === true) {
        botaoReset.classList.add("ativa");

        borrachaAtiva = false;
        botaoBorracha.classList.remove("ativa");
    } else {
        botaoReset.classList.remove("ativa");
    }
});

/* BORRACHA */
botaoBorracha.addEventListener("click", function () {
    borrachaAtiva = !borrachaAtiva;

    if (borrachaAtiva === true) {
        botaoBorracha.classList.add("ativa");

        resetAtivo = false;
        botaoReset.classList.remove("ativa");
    } else {
        botaoBorracha.classList.remove("ativa");
    }
});

/* ABRIR NOMES REGISTADOS*/
botaoNomesRegistados.addEventListener("click", function () {
    fecharTodosPopups();

    borrachaAtiva = false;
    botaoBorracha.classList.remove("ativa");

    resetAtivo = false;
    botaoReset.classList.remove("ativa");

    mostrarNomesRegistados();
    
});

fecharNomesRegistados.addEventListener("click", function () {
    popupNomesRegistados.style.display = "none";
});

//BOTAO NOVO REGISTO SO PERMITE DESACTIVA QUANDO 4 USERS
function atualizarBotaoNovoRegisto() {
    const registos = lerRegistosUtilizador();

    if (registos.length >= 4) {
        botaoNovoRegisto.style.display = "none";
    } else {
        botaoNovoRegisto.style.display = "block";
    }
}

/*HISTÓRICO */
function mostrarHistorico() {
    guardarDadosRegistoAtual();

    const registos = lerRegistosUtilizador();
    const posicao = encontrarRegistoAtual(registos);

    listaHistorico.innerHTML = "";

    if (posicao === -1 || registos[posicao].historico === undefined || registos[posicao].historico.length === 0) {
        const mensagem = document.createElement("p");
        mensagem.className = "sem-historico";
        mensagem.textContent = "Ainda não existem resultados no histórico.";
        listaHistorico.appendChild(mensagem);
    } else {
        for (let resultado of registos[posicao].historico) {
            const linha = document.createElement("div");
            linha.className = "resultado-historico";

            const jogo = document.createElement("strong");
            jogo.textContent = resultado.jogo;

            const pontuacao = document.createElement("span");
            pontuacao.textContent = resultado.acertos + " / " + resultado.jogadas;

            const data = document.createElement("small");
            data.textContent = resultado.data;

            linha.appendChild(jogo);
            linha.appendChild(pontuacao);
            linha.appendChild(data);

            listaHistorico.appendChild(linha);
        }
    }

    popupHistorico.style.display = "flex";
}

botaoHistorico.addEventListener("click", function () {
    fecharTodosPopups();
    mostrarHistorico();
});

fecharHistorico.addEventListener("click", function () {
    popupHistorico.style.display = "none";
});

garantirUtilizadorAtual();
atualizarBotaoBorracha()
atualizarBotaoNovoRegisto();