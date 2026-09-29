/* Dados dos registos */

function lerRegistosUtilizador() {
    const guardados = localStorage.getItem("nomesRegistados");

    if (guardados === null) {
        return [];
    }

    return JSON.parse(guardados);
}

function guardarRegistosUtilizador(registos) {
    localStorage.setItem("nomesRegistados", JSON.stringify(registos));
}



function encontrarRegistoAtual(registos) {
    const idAtual = Number(localStorage.getItem("idUtilizadorAtual"));

    if (isNaN(idAtual)) {
        return -1;
    }

    for (let i = 0; i < registos.length; i++) {
        if (registos[i].id === idAtual) {
            return i;
        }
    }

    return -1;
}

function gerarNovoIdUtilizador(registos) {
    let maiorId = 0;

    for (let registo of registos) {
        if (typeof registo.id === "number" && registo.id > maiorId) {
            maiorId = registo.id;
        }
    }

    return maiorId + 1;
}

function lerListaLocalStorage(chave) {
    const valor = localStorage.getItem(chave);

    if (valor === null) {
        return [];
    }

    return JSON.parse(valor);
}

function lerNumeroLocalStorage(chave) {
    const valor = localStorage.getItem(chave);

    if (valor === null) {
        return 0;
    }

    return Number(valor);
}

function guardarDadosRegistoAtual() {
    const registos = lerRegistosUtilizador();
    const posicao = encontrarRegistoAtual(registos);

    if (posicao === -1) {
        return;
    }

    registos[posicao].brinquedos =
        lerListaLocalStorage("brinquedosAdquiridos");

    registos[posicao].diferencas =
        lerNumeroLocalStorage("brinquedosDiferencas");

    registos[posicao].memoria =
        lerNumeroLocalStorage("brinquedosMemoria");

    registos[posicao].sons =
        lerNumeroLocalStorage("brinquedosSons");

    registos[posicao].animaisFacil =
        lerNumeroLocalStorage("brinquedosAnimaisFacil");

    registos[posicao].animaisDificil =
        lerNumeroLocalStorage("brinquedosAnimaisDificil");

    if (registos[posicao].historico === undefined) {
        registos[posicao].historico = [];
    }

    guardarRegistosUtilizador(registos);
}

function limparDadosAtivos() {
    localStorage.removeItem("idUtilizadorAtual");
    localStorage.removeItem("brinquedosAdquiridos");
    localStorage.removeItem("brinquedosDiferencas");
    localStorage.removeItem("brinquedosMemoria");
    localStorage.removeItem("brinquedosSons");
    localStorage.removeItem("brinquedosAnimaisFacil");
    localStorage.removeItem("brinquedosAnimaisDificil");
}

function carregarDadosDoRegisto(registo) {
    limparDadosAtivos();

    localStorage.setItem(
        "idUtilizadorAtual",
        registo.id
    );

    localStorage.setItem(
        "brinquedosAdquiridos",
        JSON.stringify(registo.brinquedos || [])
    );

    localStorage.setItem("brinquedosDiferencas", registo.diferencas || 0);
    localStorage.setItem("brinquedosMemoria", registo.memoria || 0);
    localStorage.setItem("brinquedosSons", registo.sons || 0);
    localStorage.setItem("brinquedosAnimaisFacil", registo.animaisFacil || 0);
    localStorage.setItem("brinquedosAnimaisDificil", registo.animaisDificil || 0);
}


function guardarResultadoJogo(jogo, acertos, jogadas) {
    if (jogadas === 0) {
        return;
    }

    const registos = lerRegistosUtilizador();
    const posicao = encontrarRegistoAtual(registos);

    if (posicao === -1) {
        return;
    }

    if (registos[posicao].historico === undefined) {
        registos[posicao].historico = [];
    }

    const resultado = {
        jogo: jogo,
        acertos: acertos,
        jogadas: jogadas,
        data: new Date().toLocaleString("pt-PT")
    };

    registos[posicao].historico.unshift(resultado);
    guardarRegistosUtilizador(registos);
}

function eUtilizadorReal(registo) {
    return registo.nome !== "Explorador" ||
           registo.cabeca !== "recursos/cara_botao.png" ||
           registo.amigo !== null;
}

function podeAcederAosBrinquedos() {
    const registos = lerRegistosUtilizador();

    if (registos.length > 1) {
        return true;
    }

    if (registos.length === 1) {
        const posicao = encontrarRegistoAtual(registos);

        if (
            posicao !== -1 &&
            eUtilizadorReal(registos[posicao]) === true
        ) {
            return true;
        }
    }

    return false;
}

