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

function nomesIguais(nome1, nome2) {
    if (nome1 === null && nome2 === null) {
        return true;
    }

    if (nome1 === null || nome2 === null) {
        return false;
    }

    return nome1.toLowerCase() === nome2.toLowerCase();
}

function encontrarRegistoAtual(registos) {
    const nome = localStorage.getItem("nomeUtilizador");
    const cabeca = localStorage.getItem("cabecaAmigoUtilizador");

    for (let i = 0; i < registos.length; i++) {

        /*
            Quando existe nome, o registo é identificado
            pelo nome. Assim, mudar de amigo não cria
            um histórico novo para a mesma criança.
        */
        if (
            nome !== null &&
            nomesIguais(registos[i].nome, nome)
        ) {
            return i;
        }

        /*
            Se não existir nome, o amigo pode identificar
            sozinho o registo.
        */
        if (
            nome === null &&
            registos[i].nome === null &&
            registos[i].cabeca === cabeca
        ) {
            return i;
        }
    }

    return -1;
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
