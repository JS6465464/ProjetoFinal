/* Animais */
const BASE_ANIMAIS = [
    { id: 'cao', nome: 'Cão', emoji: '🐶', somUrl: 'recursos/sons/cao.ogg', imagem: 'recursos/imagens/cao.avif' },
    { id: 'gato', nome: 'Gato', emoji: '🐱', somUrl: 'recursos/sons/gato.wav', imagem: 'recursos/imagens/gato.jpg' },
    { id: 'vaca', nome: 'Vaca', emoji: '🐮', somUrl: 'recursos/sons/vaca.ogg', imagem: 'recursos/imagens/vaca.avif' },
    { id: 'porco', nome: 'Porco', emoji: '🐷', somUrl: 'recursos/sons/porco.mpeg', imagem: 'recursos/imagens/porco.jpg' },
    { id: 'galo', nome: 'Galo', emoji: '🐓', somUrl: 'recursos/sons/galo.wav', imagem: 'recursos/imagens/galo.jpg' },
    { id: 'pato', nome: 'Pato', emoji: '🦆', somUrl: 'recursos/sons/pato.mpeg', imagem: 'recursos/imagens/pato.webp' },
    { id: 'ovelha', nome: 'Ovelha', emoji: '🐑', somUrl: 'recursos/sons/ovelha.mpeg', imagem: 'recursos/imagens/ovelha.jpg' },
    { id: 'cavalo', nome: 'Cavalo', emoji: '🐴', somUrl: 'recursos/sons/cavalo.mpeg', imagem: 'recursos/imagens/cavalo.jpg' },
    { id: 'burro', nome: 'Burro', emoji: '🐴', somUrl: 'recursos/sons/burro.mp3', imagem: 'recursos/imagens/burro.png' },
    { id: 'cabra', nome: 'Cabra', emoji: '🐐', somUrl: 'recursos/sons/cabra.mp3', imagem: 'recursos/imagens/cabra.jpg' },
    { id: 'leao', nome: 'Leão', emoji: '🦁', somUrl: 'recursos/sons/leao.ogg', imagem: 'recursos/imagens/leao.jpg' },
    { id: 'elefante', nome: 'Elefante', emoji: '🐘', somUrl: 'recursos/sons/elefante.mpeg', imagem: 'recursos/imagens/elefante.jpg' },
    { id: 'macaco', nome: 'Macaco', emoji: '🐒', somUrl: 'recursos/sons/macaco.mpeg', imagem: 'recursos/imagens/macaco.jpg' },
    { id: 'lobo', nome: 'Lobo', emoji: '🐺', somUrl: 'recursos/sons/lobo.mp3', imagem: 'recursos/imagens/lobo.jpg' },
    { id: 'sapo', nome: 'Sapo', emoji: '🐸', somUrl: 'recursos/sons/sapo.mpeg', imagem: 'recursos/imagens/sapo.jpg' },
    { id: 'pintainho', nome: 'Pintainho', emoji: '🐤', somUrl: 'recursos/sons/pintainho.mp3', imagem: 'recursos/imagens/pintainho.avif' },
    { id: 'corvo', nome: 'Corvo', emoji: '🐦‍', somUrl: 'recursos/sons/corvo.mp3', imagem: 'recursos/imagens/corvo.jpg' },
    { id: 'grilo', nome: 'Grilo', emoji: '🦗', somUrl: 'recursos/sons/grilo.wav', imagem: 'recursos/imagens/grilo.jpg' },
    { id: 'coruja', nome: 'Coruja', emoji: '🦉', somUrl: 'recursos/sons/coruja.ogg', imagem: 'recursos/imagens/coruja.jpg' },
    { id: 'peru', nome: 'Peru', emoji: '🦃', somUrl: 'recursos/sons/peru.mpeg', imagem: 'recursos/imagens/peru.jpg' }
];

// Definição de Variáveis de Jogo
const TEMPO_MAX_SOM_REVELACAO_MS = 4000;   // tempo máximo do som quando o animal certo é revelado

let totalRondas = 5;              // definido pelo modo escolhido no ecrã inicial (5 = fácil, 10 = difícil)
let rondaAtual = 1;
let totalEstrelas = 0;
let tentativasRonda = 0;
let animalCerto = null;
let opcoesRonda = [];
let idsAnimaisUsados = [];        // animais que já foram a resposta certa nesta partida
let resultadosRondas = [];        // resultado de cada ronda (para o resumo final)
let interacaoBloqueada = false;
let leitorAudio = null;
let idSequencia = 0;              // invalida o som automático do início da ronda se a criança já agiu

// Referências DOM
const ecraInicial = document.getElementById('ecra-inicial');
const ecraJogo = document.getElementById('ecra-jogo');
const ecraFinal = document.getElementById('ecra-final');
const estatisticasCabecalho = document.getElementById('estatisticas-cabecalho');
const contadorEstrelas = document.getElementById('contador-estrelas');
const contadorRonda = document.getElementById('contador-ronda');
const totalRondasTexto = document.getElementById('total-rondas');
const mensagemJogo = document.getElementById('mensagem-jogo');
const pontuacaoFinal = document.getElementById('pontuacao-final');
const pontuacaoMaxima = document.getElementById('pontuacao-maxima');
const contentorEstrelasFinal = document.getElementById('contentor-estrelas-final');
const resumoTitulo = document.getElementById('resumo-titulo');
const resumoLista = document.getElementById('resumo-lista');
const resumoDica = document.getElementById('resumo-dica');

const botaoComecar = document.getElementById('botao-comecar');
const botaoOuvirSom = document.getElementById('botao-ouvir-som');
const botaoReiniciar = document.getElementById('botao-reiniciar');
const botaoInicio = document.getElementById('botao-inicio');
const botoesModo = document.querySelectorAll('.botao-modo');
const botaoVoltar = document.getElementById('botao-voltar');
//const nomeJogo = document.getElementById('nomeJogo');


// Eventos
botaoComecar.addEventListener('click', iniciarJogo);
botaoOuvirSom.addEventListener('click', ouvirSomAnimalCerto);
botaoReiniciar.addEventListener('click', iniciarJogo);
botaoInicio.addEventListener('click', mostrarEcraInicial);

//nome amigo com ola antes
if (nomeJogo !== null && nomeJogo.innerText !== "") {
    nomeJogo.innerText = "Olá, " + nomeJogo.innerText;
}


// Cada botão de modo, quando é clicado, chama selecionarModo com esse botão
for (const botao of botoesModo) {
    botao.addEventListener('click', () => selecionarModo(botao));
}

// ---------- Utilitários ----------

// pausa durante 'ms' milissegundos (usada com await)
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// baralha a lista
function baralhar(lista) {
    const copia = [...lista];   
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];   
    }
    return copia;
}

// artigo dependente do nome do animal
function artigoPara(animal) {
    return animal.nome.endsWith('a') ? 'a' : 'o';
}

// ---------- Áudio dos animais ----------

function pararAudio() {
    if (leitorAudio) {
        leitorAudio.pause();
        leitorAudio = null;
    }
}

// Toca o som do animal; a Promise resolve quando termina, falha ou passa o tempo máximo
function tocarSomAnimal(animal, maxMs = 4000) {
    return new Promise(resolve => {
        pararAudio();
        const leitor = new Audio(animal.somUrl);
        leitorAudio = leitor;

        let terminado = false;
        let idTemporizador = null;
        const terminar = () => {
            if (terminado) return;
            terminado = true;
            clearTimeout(idTemporizador);
            resolve();
        };

        leitor.addEventListener('ended', terminar);
        leitor.addEventListener('pause', terminar);
        leitor.addEventListener('error', terminar);
        idTemporizador = setTimeout(() => {
            if (leitorAudio === leitor) pararAudio();
            terminar();
        }, maxMs);

        // Se o navegador bloquear o som, o jogo não pára
        leitor.play().catch(erro => {
            console.log('Não foi possível tocar o som:', erro);
            terminar();
        });
    });
}

function ouvirSomAnimalCerto() {
    if (!animalCerto || interacaoBloqueada) return;
    idSequencia++;          // cancela o som automático do início da ronda, se ainda não tiver tocado
    tocarSomAnimal(animalCerto);
}

// ---------- Modo de jogo ----------

// Seleção do modo de jogo 
function selecionarModo(botaoEscolhido) {
    totalRondas = parseInt(botaoEscolhido.dataset.rondas, 10);

    for (const botao of botoesModo) {
        if (botao === botaoEscolhido) {
            botao.classList.add('modo-selecionado');
            botao.setAttribute('aria-pressed', 'true');
        } else {
            botao.classList.remove('modo-selecionado');
            botao.setAttribute('aria-pressed', 'false');
        }
    }
}

// ---------- Fluxo do jogo ----------


// 'mensagem-inicio', 'mensagem-sucesso', 'mensagem-nova-tentativa' ou 'mensagem-revelacao'
function mostrarMensagem(texto, classeEstilo) {
    mensagemJogo.textContent = texto;
    mensagemJogo.className = 'caixa-mensagem fonte-titulo text-center rounded-full shrink-0 ' + classeEstilo;
}

function mostrarEcraInicial() {
    idSequencia++;
    pararAudio();
    ecraInicial.classList.remove('hidden');
    ecraJogo.classList.add('hidden');
    ecraFinal.classList.add('hidden');
    estatisticasCabecalho.classList.add('hidden');
}

function iniciarJogo() {
    totalEstrelas = 0;
    rondaAtual = 1;
    idsAnimaisUsados = [];
    resultadosRondas = [];
    contadorEstrelas.textContent = '0';
    totalRondasTexto.textContent = totalRondas;
    
    ecraInicial.classList.add('hidden');
    ecraFinal.classList.add('hidden');
    ecraJogo.classList.remove('hidden');
    estatisticasCabecalho.classList.remove('hidden');

    prepararRonda();
}

// Toca o som do animal no início da ronda (a menos que a criança já tenha agido)
async function apresentarRonda(idDaSequencia) {
    await esperar(300);
    if (idDaSequencia !== idSequencia) return;
    await tocarSomAnimal(animalCerto);
}

function prepararRonda() {
    interacaoBloqueada = false;
    tentativasRonda = 0;
    contadorRonda.textContent = rondaAtual;
    
    mostrarMensagem('Ouve o som do animal! 🎧', 'mensagem-inicio');

    // O animal certo nunca se repete na mesma partida.
    const alvosDisponiveis = BASE_ANIMAIS.filter(animal => !idsAnimaisUsados.includes(animal.id));
    animalCerto = alvosDisponiveis[Math.floor(Math.random() * alvosDisponiveis.length)];
    idsAnimaisUsados.push(animalCerto.id);

    // As outras 3 opções são animais diferentes do certo; depois baralha-se tudo
    const distratores = baralhar(BASE_ANIMAIS.filter(animal => animal.id !== animalCerto.id)).slice(0, 3);
    opcoesRonda = baralhar([animalCerto, ...distratores]);

    // Preencher os 4 cartões 
    for (let i = 0; i < 4; i++) {
        const cartao = document.getElementById(`cartao-${i}`);
        const animal = opcoesRonda[i];
        const imagem = cartao.querySelector('img');
        const nomeNoCartao = cartao.querySelector('.nome-animal');

        // Os mesmos 4 cartões são reutilizados em todas as rondas:
        // tira as marcas (verde/abanar) da ronda anterior
        cartao.classList.remove('cartao-certo', 'cartao-errado');

        // Se a imagem não carregar, mostra uma imagem de substituição 
        imagem.onerror = function () {
            imagem.onerror = null;
            imagem.src = 'https://placehold.co/600x400/4ECDC4/white?text=' + animal.id;
        };
        imagem.removeAttribute('src');   // esvazia a imagem da ronda anterior, para não aparecer enquanto a nova carrega
        imagem.src = animal.imagem;
        imagem.alt = animal.nome;

        nomeNoCartao.textContent = animal.nome + ' ' + animal.emoji;

        // Ao clicar neste cartão, chama processarResposta com o animal deste cartão
        cartao.onclick = () => processarResposta(animal, cartao);
    }

    // Som do animal no início da ronda
    apresentarRonda(++idSequencia);
}

// Decide o que fazer com a resposta: acerto, primeiro erro ou segundo erro
function processarResposta(animalEscolhido, cartaoClicado) {
    if (interacaoBloqueada) return;

    tentativasRonda++;
    idSequencia++;      // cancela o som automático do início da ronda, se ainda não tiver tocado

    if (animalEscolhido.id === animalCerto.id) {
        tratarAcerto(cartaoClicado);
    } else if (tentativasRonda === 1) {
        tratarPrimeiroErro(cartaoClicado);
    } else {
        tratarSegundoErro(cartaoClicado);
    }
}

function tratarAcerto(cartaoClicado) {
    interacaoBloqueada = true;

    let estrelasGanhas = 0;
    if (tentativasRonda === 1) {
        estrelasGanhas = 1;   // 1ª tentativa = estrela cheia
        mostrarMensagem("ESPETÁCULO! Acertaste à 1ª! ⭐🎉", 'mensagem-sucesso animacao-sucesso');
    } else {
        estrelasGanhas = 0.5;   // 2ª tentativa = meia estrela
        mostrarMensagem("MUITO BEM! Conseguiste! 🌟🎉", 'mensagem-sucesso animacao-sucesso');
    }

    totalEstrelas += estrelasGanhas;
    contadorEstrelas.textContent = totalEstrelas;
    resultadosRondas.push({ animal: animalCerto, estrelas: estrelasGanhas });

    cartaoClicado.classList.add('cartao-certo');

    if (typeof confetti === 'function') {
        confetti({ particleCount: 60, spread: 60, origin: { y: 0.65 } });
    }

    terminarRonda(1800);
}

// 1ª tentativa falhada: 
function tratarPrimeiroErro(cartaoClicado) {
    cartaoClicado.classList.add('cartao-errado');   // deixa de ser clicável
    mostrarMensagem("Ops! Tenta outra vez! 💡", 'mensagem-nova-tentativa');
}

// 2ª tentativa falhada: 
function tratarSegundoErro(cartaoClicado) {
    interacaoBloqueada = true;
    cartaoClicado.classList.add('cartao-errado');

    mostrarMensagem(`Era ${artigoPara(animalCerto)} ${animalCerto.nome} ${animalCerto.emoji}! 🐾`, 'mensagem-revelacao');
    resultadosRondas.push({ animal: animalCerto, estrelas: 0 });

    // o cartão da resposta certa (animalCerto é um dos 4 animais de opcoesRonda)
    const posicaoCerta = opcoesRonda.indexOf(animalCerto);
    document.getElementById(`cartao-${posicaoCerta}`).classList.add('cartao-certo');

    terminarRonda(2200);
}

// Quando o cartão certo abana: toca o som do animal e só depois avança para a ronda seguinte
async function terminarRonda(atrasoMinimoMs) {
    const esperaMinima = esperar(atrasoMinimoMs);
    await tocarSomAnimal(animalCerto, TEMPO_MAX_SOM_REVELACAO_MS);
    await esperaMinima;
    avancarParaRondaSeguinte();
}

function avancarParaRondaSeguinte() {
    if (rondaAtual < totalRondas) {
        rondaAtual++;
        prepararRonda();
    } else {
        mostrarPontuacaoFinal();
    }
}

// ---------- Ecrã final ----------

// Resumo: animais que não foram acertados à primeira 
function construirResumo() {
    resumoLista.innerHTML = '';

    // Fica só com os resultados com menos de 1 estrela (a seta "resultado => ..." é uma função curta)
    const paraTreinar = resultadosRondas.filter(resultado => resultado.estrelas < 1);

    if (paraTreinar.length === 0) {
        resumoTitulo.textContent = 'Acertaste todos à primeira! 🌟';
        resumoDica.classList.add('hidden');
    } else {
        resumoTitulo.textContent = 'Vamos treinar estes animais! 🎧';
        resumoDica.classList.remove('hidden');
    }

    // Para cada resultado, tira o 'animal' e as 'estrelas' e cria um botão com o animal
    paraTreinar.forEach(({ animal, estrelas }) => {
        const foiSegundaTentativa = estrelas === 0.5;
        const botaoAnimal = document.createElement('button');
        botaoAnimal.type = 'button';
        botaoAnimal.title = `Ouvir o som: ${animal.nome}`;
        botaoAnimal.className = 'flex flex-col items-center px-3 py-1.5 rounded-2xl border-4 cursor-pointer transition-transform hover:scale-105 active:scale-95 ' +
            (foiSegundaTentativa ? 'bg-amber-50 border-amber-300' : 'bg-rose-50 border-rose-300');
        botaoAnimal.innerHTML = `
            <span class="text-3xl leading-none">${animal.emoji}</span>
            <span class="fonte-titulo text-sm text-purple-900">${animal.nome}</span>
            <span class="text-base leading-none">${foiSegundaTentativa ? '🌟' : '🔁'}</span>
        `;
        botaoAnimal.addEventListener('click', () => tocarSomAnimal(animal, TEMPO_MAX_SOM_REVELACAO_MS));
        resumoLista.appendChild(botaoAnimal);
    });
}

function mostrarPontuacaoFinal() {
    guardarResultadoAtual();

    pararAudio();
    ecraJogo.classList.add('hidden');
    ecraFinal.classList.remove('hidden');

    pontuacaoFinal.textContent = totalEstrelas;
    pontuacaoMaxima.textContent = totalRondas;

    contentorEstrelasFinal.innerHTML = '';

    const estrelasInteiras = Math.floor(totalEstrelas);   
    const temMeiaEstrela = totalEstrelas % 1 !== 0;       

    // Uma estrela por ronda: primeiro as cheias, depois (se existir) a meia, e as restantes apagadas
    for (let i = 0; i < totalRondas; i++) {
        const elementoEstrela = document.createElement('span');
        
        if (i < estrelasInteiras) {
            elementoEstrela.className = 'text-yellow-400 drop-shadow-md animate-bounce';
            elementoEstrela.innerHTML = '⭐';
        } else if (i === estrelasInteiras && temMeiaEstrela) {
            elementoEstrela.className = 'text-yellow-400 drop-shadow-md animate-bounce';
            elementoEstrela.innerHTML = '🌟';
        } else {
            elementoEstrela.className = 'opacity-30 grayscale';
            elementoEstrela.innerHTML = '⭐';
        }
        
        elementoEstrela.style.animationDelay = `${i * 0.12}s`;
        contentorEstrelasFinal.appendChild(elementoEstrela);
    }

    construirResumo();

    if (typeof confetti === 'function') {
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });
    }

    // O popup do brinquedo só aparece depois dos confetis acabarem
    setTimeout(verificarOportunidadeBrinquedoAnimais, 2000);
}

function guardarResultadoAtual() {
    if (typeof guardarResultadoJogo === "function") {
    const jogadas = resultadosRondas.length;
    const acertos = resultadosRondas.filter(r => r.estrelas > 0).length;

    guardarResultadoJogo("Jogo dos Animais", acertos, jogadas);
    }
}

// ---------- Brinquedos (bónus por partida perfeita) ----------

const CHAVE_BRINQUEDOS_FACIL = "brinquedosAnimaisFacil";
const CHAVE_BRINQUEDOS_DIFICIL = "brinquedosAnimaisDificil";
const MAX_BRINQUEDOS_POR_MODO = 2;
const TOTAL_BRINQUEDOS_JOGO = MAX_BRINQUEDOS_POR_MODO * 2;   // 2 do fácil + 2 do difícil = 4 no total

let brinquedosAntesDaOportunidade = 0;


// Só há oportunidade numa partida perfeita: todas as rondas com estrela cheia
function verificarOportunidadeBrinquedoAnimais() {
    if (totalEstrelas !== totalRondas) return;

    const chave = totalRondas === 5 ? CHAVE_BRINQUEDOS_FACIL : CHAVE_BRINQUEDOS_DIFICIL;
    const usados = lerNumeroBrinquedosAnimais(chave);

    if (usados >= MAX_BRINQUEDOS_POR_MODO) return;   // já ganhou os 2 brinquedos deste modo

    if (podeAcederAosBrinquedos() === false) return;
    // localStorage.setItem(chave, usados + 1);
    // atualizarSimbolosBrinquedosAnimais();
    // atualizarTotalBrinquedosSons();

    brinquedosAntesDaOportunidade = obterQuantidadeBrinquedos();

    if (typeof mostrarOportunidadeBrinquedo === "function") {
        mostrarOportunidadeBrinquedo();
    }
}

function lerNumeroBrinquedosAnimais(chave) {
    const guardado = localStorage.getItem(chave);
    return guardado === null ? 0 : Number(guardado);
}

// Obtem a quantidade de brinquedos
function obterQuantidadeBrinquedos() {
    try {
        const brinquedos = JSON.parse(
            localStorage.getItem("brinquedosAdquiridos") || "[]"
        );

        return Array.isArray(brinquedos)
            ? brinquedos.length
            : 0;

    } catch (erro) {
        return 0;
    }
}

function oportunidadeBrinquedoTerminadaDiferencas() {

    const brinquedosDepoisDaOportunidade = obterQuantidadeBrinquedos();

    if (brinquedosDepoisDaOportunidade > brinquedosAntesDaOportunidade) {

        const chaveBrinquedos =
            totalRondas === 5
                ? CHAVE_BRINQUEDOS_FACIL
                : CHAVE_BRINQUEDOS_DIFICIL;

        const brinquedosGanhos = Number(
            localStorage.getItem(chaveBrinquedos) || 0
        );

        if (brinquedosGanhos < MAX_BRINQUEDOS_POR_MODO) {

            localStorage.setItem(
                chaveBrinquedos,
                brinquedosGanhos + 1
            );

            atualizarSimbolosBrinquedosAnimais();
            atualizarTotalBrinquedosSons();
        }
    }
};



// Mostra um 🧸 por cada brinquedo ainda por ganhar; os já ganhos ficam esbatidos
function atualizarSimbolosBrinquedosAnimais() {
    const zona = document.getElementById('oportunidadesBrinquedosAnimais');
    if (zona === null) return;

    const usados =
        lerNumeroBrinquedosAnimais(CHAVE_BRINQUEDOS_FACIL) +
        lerNumeroBrinquedosAnimais(CHAVE_BRINQUEDOS_DIFICIL);
    const restantes = TOTAL_BRINQUEDOS_JOGO - usados;

    zona.innerHTML = '';
    for (let i = 0; i < TOTAL_BRINQUEDOS_JOGO; i++) {
        const ursinho = document.createElement('span');
        ursinho.textContent = '🧸';
        ursinho.className = i < restantes ? 'text-xl' : 'text-xl opacity-20 grayscale';
        zona.appendChild(ursinho);
    }
}

// Junta os dois contadores no total que o dados.js já sabe ler ("brinquedosSons")
function atualizarTotalBrinquedosSons() {
    const facil = lerNumeroBrinquedosAnimais(CHAVE_BRINQUEDOS_FACIL);
    const dificil = lerNumeroBrinquedosAnimais(CHAVE_BRINQUEDOS_DIFICIL);
    localStorage.setItem("brinquedosSons", facil + dificil);

    if (typeof guardarDadosRegistoAtual === "function") {
        guardarDadosRegistoAtual();
    }
}

botaoVoltar.addEventListener('click', function () {
    window.location.href = '../../index.html';
});


atualizarSimbolosBrinquedosAnimais();