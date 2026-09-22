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
const botaoBorracha = document.getElementById("botaoBorracha");
const botaoHistorico = document.getElementById("botaoHistorico");
const popupHistorico = document.getElementById("popupHistorico");
const fecharHistorico = document.getElementById("fecharHistorico");
const listaHistorico = document.getElementById("listaHistorico");

/* VARIÁVEIS */
let borrachaAtiva = false;
let cabecaSelecionada = null;
let corpoSelecionado = null;
let nomeSelecionado = null;

/* REINICIAR BRINQUEDOS */
function reiniciarBrinquedos() {
    guardarDadosRegistoAtual();
    localStorage.removeItem("brinquedosAdquiridos");
    localStorage.removeItem("brinquedosDiferencas");
    localStorage.removeItem("brinquedosMemoria");
    localStorage.removeItem("brinquedosSons");
}

/* RECUPERAR ESCOLHAS GUARDADAS */
const nomeGuardado = localStorage.getItem("nomeUtilizador");
const cabecaGuardada = localStorage.getItem("cabecaAmigoUtilizador");
const amigoGuardado = localStorage.getItem("amigoUtilizador");

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
        const amigoAnterior = localStorage.getItem("amigoUtilizador");

        if (amigoAnterior !== corpoSelecionado) {
            reiniciarBrinquedos();
        }

        cabecaAmigoPrincipal.src = cabecaSelecionada;
        corpoAmigo.src = corpoSelecionado;
        corpoAmigo.style.display = "block";

        localStorage.setItem("cabecaAmigoUtilizador", cabecaSelecionada);
        localStorage.setItem("amigoUtilizador", corpoSelecionado);

        registarEscolhaAtual();

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
        const nomeAnterior = localStorage.getItem("nomeUtilizador");

        if (nomeAnterior !== nomeSelecionado) {
            reiniciarBrinquedos();
        }

        nomeUtilizador.textContent = nomeSelecionado + "!";
        localStorage.setItem("nomeUtilizador", nomeSelecionado);

        registarEscolhaAtual();

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
        const nomeAnterior = localStorage.getItem("nomeUtilizador");

        if (nomeAnterior !== nomeSelecionado) {
            reiniciarBrinquedos();
        }

        nomeUtilizador.textContent = nomeSelecionado + "!";
        localStorage.setItem("nomeUtilizador", nomeSelecionado);

        registarEscolhaAtual();

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

        const nomeAnterior = localStorage.getItem("nomeUtilizador");

        if (nomeAnterior !== nomeEscrito) {
            reiniciarBrinquedos();
        }

        nomeUtilizador.textContent = nomeEscrito + "!";
        localStorage.setItem("nomeUtilizador", nomeEscrito);

        registarEscolhaAtual();

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
    const nome = localStorage.getItem("nomeUtilizador");
    const cabeca = localStorage.getItem("cabecaAmigoUtilizador");
    const amigo = localStorage.getItem("amigoUtilizador");

    if (nome === null && cabeca === null) {
        return;
    }

    const registos = lerRegistosUtilizador();
    const posicao = encontrarRegistoAtual(registos);

    if (posicao !== -1) {
        const registoExistente = registos.splice(posicao, 1)[0];

        registoExistente.nome = nome;
        registoExistente.cabeca = cabeca;
        registoExistente.amigo = amigo;

        registos.unshift(registoExistente);

        guardarRegistosUtilizador(registos);
        carregarDadosDoRegisto(registoExistente);
        return;
    }

    const novoRegisto = {
        nome: nome,
        cabeca: cabeca,
        amigo: amigo,
        brinquedos: [],
        diferencas: 0,
        memoria: 0,
        sons: 0,
        historico: []
    };

    registos.unshift(novoRegisto);

    if (registos.length > 100) {
        registos.pop();
    }

    guardarRegistosUtilizador(registos);
    carregarDadosDoRegisto(novoRegisto);
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

        nomeUtilizador.textContent = "Explorador!";
        cabecaAmigoPrincipal.src = "recursos/cara_botao.png";
        corpoAmigo.src = "";
        corpoAmigo.style.display = "none";
    }

    mostrarNomesRegistados();
}

/* MOSTRAR REGISTOS*/

function mostrarNomesRegistados() {
    const registos = lerRegistosUtilizador();

    listaNomesRegistados.innerHTML = "";

    if (registos.length === 0) {
        const mensagem = document.createElement("p");
        mensagem.className = "sem-registos";
        mensagem.textContent = "Ainda não existem nomes registados.";
        listaNomesRegistados.appendChild(mensagem);
    } else {
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
                } else {
                    selecionarNomeRegistado(registo);
                }
            });

            listaNomesRegistados.appendChild(botao);
        }
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

    if (registo.cabeca !== null && registo.amigo !== null) {
        localStorage.setItem("cabecaAmigoUtilizador", registo.cabeca);
        localStorage.setItem("amigoUtilizador", registo.amigo);

        cabecaAmigoPrincipal.src = registo.cabeca;
        corpoAmigo.src = registo.amigo;
        corpoAmigo.style.display = "block";
    } else {
        localStorage.removeItem("cabecaAmigoUtilizador");
        localStorage.removeItem("amigoUtilizador");

        cabecaAmigoPrincipal.src = "recursos/cara_botao.png";
        corpoAmigo.src = "";
        corpoAmigo.style.display = "none";
    }

    carregarDadosDoRegisto(registo);

    cabecaSelecionada = null;
    corpoSelecionado = null;
    nomeSelecionado = null;

    popupNomesRegistados.style.display = "none";
}

/* BORRACHA */
botaoBorracha.addEventListener("click", function () {
    borrachaAtiva = !borrachaAtiva;

    if (borrachaAtiva === true) {
        botaoBorracha.classList.add("ativa");
    } else {
        botaoBorracha.classList.remove("ativa");
    }
});

/* ABRIR NOMES REGISTADOS*/
botaoNomesRegistados.addEventListener("click", function () {
    fecharTodosPopups();

    borrachaAtiva = false;
    botaoBorracha.classList.remove("ativa");

    mostrarNomesRegistados();
});

fecharNomesRegistados.addEventListener("click", function () {
    popupNomesRegistados.style.display = "none";
});

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