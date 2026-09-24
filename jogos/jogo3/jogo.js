/* Animais */
const BASE_ANIMAIS = [
    { id: 'cao', nome: 'Cão', emoji: '🐶', somUrl: 'https://actions.google.com/sounds/v1/animals/dog_barking.ogg', imagem: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80' },
    { id: 'gato', nome: 'Gato', emoji: '🐱', somUrl: 'https://actions.google.com/sounds/v1/animals/cat_purr_meow.ogg', imagem: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80' },
    { id: 'vaca', nome: 'Vaca', emoji: '🐮', somUrl: 'https://actions.google.com/sounds/v1/animals/cow_moo.ogg', imagem: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80' },
    { id: 'pato', nome: 'Pato', emoji: '🦆', somUrl: 'https://actions.google.com/sounds/v1/animals/mallard_duck_quacking.ogg', imagem: 'https://images.unsplash.com/photo-1555852095-64e7428df0fa?auto=format&fit=crop&w=800&q=80' },
    { id: 'leao', nome: 'Leão', emoji: '🦁', somUrl: 'https://actions.google.com/sounds/v1/animals/lion_roar.ogg', imagem: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80' },
    { id: 'ovelha', nome: 'Ovelha', emoji: '🐑', somUrl: 'https://actions.google.com/sounds/v1/animals/sheep_bleat.ogg', imagem: 'https://modernfarmer.com/wp-content/uploads/2017/12/Funny-Sheep-Facts-jpg.webp' },
    { id: 'porco', nome: 'Porco', emoji: '🐷', somUrl: 'https://actions.google.com/sounds/v1/animals/pig_grunting.ogg', imagem: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80' },
    { id: 'galo', nome: 'Galo', emoji: '🐓', somUrl: 'https://actions.google.com/sounds/v1/animals/rooster_crowing.ogg', imagem: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80' },
    { id: 'cavalo', nome: 'Cavalo', emoji: '🐴', somUrl: 'https://actions.google.com/sounds/v1/animals/horse_whinny.ogg', imagem: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80' },
    { id: 'macaco', nome: 'Macaco', emoji: '🐒', somUrl: 'https://actions.google.com/sounds/v1/animals/monkeys_screaming.ogg', imagem: 'https://images.unsplash.com/photo-1540573133985-778788177267?auto=format&fit=crop&w=800&q=80' },
    { id: 'elefante', nome: 'Elefante', emoji: '🐘', somUrl: 'https://actions.google.com/sounds/v1/animals/elephant_trumpet.ogg', imagem: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80' },
    { id: 'urso', nome: 'Urso', emoji: '🐻', somUrl: 'https://actions.google.com/sounds/v1/animals/bear_groan.ogg', imagem: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80' },
    { id: 'sapo', nome: 'Sapo', emoji: '🐸', somUrl: 'https://actions.google.com/sounds/v1/animals/bullfrog_croak.ogg', imagem: 'https://images.unsplash.com/photo-1559253664-ca249d4608c6?auto=format&fit=crop&w=800&q=80' },
    { id: 'coruja', nome: 'Coruja', emoji: '🦉', somUrl: 'https://actions.google.com/sounds/v1/animals/owl_hoot.ogg', imagem: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80' },
    { id: 'lobo', nome: 'Lobo', emoji: '🐺', somUrl: 'https://actions.google.com/sounds/v1/animals/wolf_howling.ogg', imagem: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef9?auto=format&fit=crop&w=800&q=80' },
    { id: 'passaro', nome: 'Pássaro', emoji: '🐦', somUrl: 'https://actions.google.com/sounds/v1/animals/robin_chirp.ogg', imagem: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80' },
    { id: 'abelha', nome: 'Abelha', emoji: '🐝', somUrl: 'https://actions.google.com/sounds/v1/animals/bee_buzzing.ogg', imagem: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80' },
    { id: 'grilo', nome: 'Grilo', emoji: '🦗', somUrl: 'https://actions.google.com/sounds/v1/animals/cricket_chirp.ogg', imagem: 'https://images.unsplash.com/photo-1533230881515-65e17559c27f?auto=format&fit=crop&w=800&q=80' },
    { id: 'rato', nome: 'Rato', emoji: '🐭', somUrl: 'https://actions.google.com/sounds/v1/animals/mouse_squeak.ogg', imagem: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=800&q=80' },
    { id: 'peru', nome: 'Peru', emoji: '🦃', somUrl: 'https://actions.google.com/sounds/v1/animals/turkey_gobble.ogg', imagem: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80' }
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

// Eventos
botaoComecar.addEventListener('click', iniciarJogo);
botaoOuvirSom.addEventListener('click', ouvirSomAnimalCerto);
botaoReiniciar.addEventListener('click', iniciarJogo);
botaoInicio.addEventListener('click', mostrarEcraInicial);

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
    mensagemJogo.className = 'caixa-mensagem fonte-titulo font-bold text-center rounded-full shrink-0 ' + classeEstilo;
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
    alert(animalCerto.nome);
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
        mostrarMensagem("ESPETÁCULO! Acertaste à 1ª! ⭐🎉", 'mensagem-sucesso animate-bounce');
    } else {
        estrelasGanhas = 0.5;   // 2ª tentativa = meia estrela
        mostrarMensagem("MUITO BEM! Conseguiste! 🌟🎉", 'mensagem-sucesso animate-bounce');
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

function lerNumeroBrinquedosAnimais(chave) {
    const guardado = localStorage.getItem(chave);
    return guardado === null ? 0 : Number(guardado);
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

// Só há oportunidade numa partida perfeita: todas as rondas com estrela cheia
function verificarOportunidadeBrinquedoAnimais() {
    if (totalEstrelas !== totalRondas) return;

    const chave = totalRondas === 5 ? CHAVE_BRINQUEDOS_FACIL : CHAVE_BRINQUEDOS_DIFICIL;
    const usados = lerNumeroBrinquedosAnimais(chave);

    if (usados >= MAX_BRINQUEDOS_POR_MODO) return;   // já ganhou os 2 brinquedos deste modo

    localStorage.setItem(chave, usados + 1);
    atualizarSimbolosBrinquedosAnimais();
    atualizarTotalBrinquedosSons();

    if (typeof mostrarOportunidadeBrinquedo === "function") {
        mostrarOportunidadeBrinquedo();
    }
}

const TOTAL_BRINQUEDOS_JOGO = MAX_BRINQUEDOS_POR_MODO * 2;   // 2 do fácil + 2 do difícil = 4 no total

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

atualizarSimbolosBrinquedosAnimais();