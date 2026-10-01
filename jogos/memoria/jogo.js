document.addEventListener('DOMContentLoaded', () => {

    const memoryBoard = document.getElementById('memory-board');
    const restartButton = document.getElementById('restartButton');
    const attemptsDisplay = document.getElementById('attempts');

    const modoFacil = document.getElementById('modo-facil');
    const modoDificil = document.getElementById('modo-dificil');

    const ecraInicial = document.getElementById('ecra-inicial');
    const ecraJogo = document.getElementById('ecra-jogo');
    const ecraFinal = document.getElementById('ecra-final');

    const botaoComecar = document.getElementById('botao-comecar');
    const botaoReiniciarFinal = document.getElementById('botao-reiniciar-final');
    const botaoInicio = document.getElementById('botao-inicio');
    const botaoVoltar = document.getElementById('botao-voltar');
    const botaoHomepage = document.getElementById('botao-homepage');

    const tentativasJogo = document.getElementById('tentativas-jogo');
    const tentativasFinal = document.getElementById('tentativas-final');

    const normalSymbols = ['🚀', '🌍', '⭐', '🌙', '🪐', '🛸'];
    const hardSymbols = [...normalSymbols, '👽', '👨‍🚀', '☄️', '🛰️'];

    const CHAVE_BRINQUEDOS_FACIL = 'brinquedosMemoriaFacil';
    const CHAVE_BRINQUEDOS_DIFICIL = 'brinquedosMemoriaDificil';
    const MAX_BRINQUEDOS_POR_NIVEL = 2;
    const TOTAL_BRINQUEDOS_MEMORIA = 4;

    let cards = [];
    let flippedCards = [];
    let matchedCards = [];
    let attempts = 0;
    let lockBoard = false;
    let isHardMode = false;
    let brinquedosAntesDaOportunidade = 0;
    let resultadoGuardado = false;

    function shuffleCards() {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }

    function createBoard() {
        const symbols = isHardMode ? hardSymbols : normalSymbols;
        cards = [...symbols, ...symbols];

        memoryBoard.style.gridTemplateColumns =
            `repeat(${isHardMode ? 5 : 4}, 1fr)`;

        shuffleCards();
        memoryBoard.innerHTML = '';

        cards.forEach((symbol) => {
            const card = document.createElement('div');

            card.className = 'card';

            card.innerHTML = `
                <div class="card-inner">
                    <div class="front">?</div>
                    <div class="back">${symbol}</div>
                </div>
            `;

            card.addEventListener('click', flipCard);
            memoryBoard.appendChild(card);
        });
    }

    function flipCard() {
        if (
            lockBoard ||
            flippedCards.length >= 2 ||
            this.classList.contains('flipped')
        ) return;

        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            lockBoard = true;
            attempts++;

            if (attemptsDisplay) {
                attemptsDisplay.textContent = attempts;
            }

            tentativasJogo.textContent = attempts;
            checkForMatch();
        }
    }

    function checkForMatch() {
        const [card1, card2] = flippedCards;
        const symbol1 = card1.querySelector('.back').textContent;
        const symbol2 = card2.querySelector('.back').textContent;

        if (symbol1 === symbol2) {
            matchedCards.push(card1, card2);

            card1.classList.add('matched');
            card2.classList.add('matched');

            flippedCards = [];
            lockBoard = false;

            if (matchedCards.length === cards.length) {
                setTimeout(() => {
                    const chaveBrinquedos = isHardMode
                        ? CHAVE_BRINQUEDOS_DIFICIL
                        : CHAVE_BRINQUEDOS_FACIL;

                    const brinquedosGanhos = Number(
                        localStorage.getItem(chaveBrinquedos) || 0
                    );

                    const ganhouBrinquedo =
                        (!isHardMode && attempts < 15) ||
                        (isHardMode && attempts < 20);

                    const aindaPodeGanhar =
                        brinquedosGanhos < MAX_BRINQUEDOS_POR_NIVEL;

                    if (
                        ganhouBrinquedo &&
                        aindaPodeGanhar &&
                        podeAcederAosBrinquedos() === true &&
                        typeof mostrarOportunidadeBrinquedo === 'function'
                    ) {
                        brinquedosAntesDaOportunidade =
                            obterQuantidadeBrinquedos();

                        mostrarOportunidadeBrinquedo();
                    } else {
                        mostrarEcraFinal();
                    }
                }, 700);
            }
        } else {
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                flippedCards = [];
                lockBoard = false;
            }, 1000);
        }
    }

    function obterQuantidadeBrinquedos() {
        try {
            const brinquedos = JSON.parse(
                localStorage.getItem('brinquedosAdquiridos') || '[]'
            );

            return Array.isArray(brinquedos)
                ? brinquedos.length
                : 0;
        } catch (erro) {
            return 0;
        }
    }

    function atualizarSimbolosBrinquedosMemoria() {
        const zona = document.getElementById(
            'oportunidadesBrinquedosMemoria'
        );

        if (!zona) return;

        const brinquedosFacil = Number(
            localStorage.getItem(CHAVE_BRINQUEDOS_FACIL) || 0
        );

        const brinquedosDificil = Number(
            localStorage.getItem(CHAVE_BRINQUEDOS_DIFICIL) || 0
        );

        const usados = brinquedosFacil + brinquedosDificil;

        const restantes = Math.max(
            0,
            TOTAL_BRINQUEDOS_MEMORIA - usados
        );

        zona.innerHTML = '';

        for (let i = 0; i < restantes; i++) {
            const urso = document.createElement('span');
            urso.textContent = '🧸';
            zona.appendChild(urso);
        }
    }

    function guardarResultadoAtual() {
        if (typeof guardarResultadoJogo === 'function') {
            const jogadas = attempts;
            const acertos = matchedCards.length / 2;

            guardarResultadoJogo(
                'Jogo da Memória',
                acertos,
                jogadas
            );
        }
    }

    function mostrarEcraFinal() {
        if (!resultadoGuardado) {
            resultadoGuardado = true;
            guardarResultadoAtual();
        }

        ecraJogo.classList.add('hidden');
        ecraFinal.classList.remove('hidden');
        tentativasFinal.textContent = attempts;
    }

    window.oportunidadeBrinquedoTerminadaDiferencas = function () {
        const brinquedosDepoisDaOportunidade =
            obterQuantidadeBrinquedos();

        if (brinquedosDepoisDaOportunidade > brinquedosAntesDaOportunidade) {
            const chaveBrinquedos = isHardMode
                ? CHAVE_BRINQUEDOS_DIFICIL
                : CHAVE_BRINQUEDOS_FACIL;

            const brinquedosGanhos = Number(
                localStorage.getItem(chaveBrinquedos) || 0
            );

            if (brinquedosGanhos < MAX_BRINQUEDOS_POR_NIVEL) {
                localStorage.setItem(
                    chaveBrinquedos,
                    brinquedosGanhos + 1
                );

                atualizarSimbolosBrinquedosMemoria();
            }
        }

        mostrarEcraFinal();
    };

    function iniciarJogo() {
        attempts = 0;
        flippedCards = [];
        matchedCards = [];
        lockBoard = false;
        resultadoGuardado = false;

        if (attemptsDisplay) {
            attemptsDisplay.textContent = '0';
        }

        tentativasJogo.textContent = '0';
        createBoard();

        ecraInicial.classList.add('hidden');
        ecraFinal.classList.add('hidden');
        ecraJogo.classList.remove('hidden');
    }

    function restartGame() {
        memoryBoard.style.opacity = '.5';

        setTimeout(() => {
            iniciarJogo();
            memoryBoard.style.opacity = '1';
        }, 300);
    }

    modoFacil.addEventListener('click', () => {
        isHardMode = false;
        modoFacil.classList.add('modo-selecionado');
        modoDificil.classList.remove('modo-selecionado');
        modoFacil.setAttribute('aria-pressed', 'true');
        modoDificil.setAttribute('aria-pressed', 'false');
    });

    modoDificil.addEventListener('click', () => {
        isHardMode = true;
        modoDificil.classList.add('modo-selecionado');
        modoFacil.classList.remove('modo-selecionado');
        modoDificil.setAttribute('aria-pressed', 'true');
        modoFacil.setAttribute('aria-pressed', 'false');
    });

    botaoComecar.addEventListener('click', iniciarJogo);
    restartButton.addEventListener('click', restartGame);
    botaoReiniciarFinal.addEventListener('click', iniciarJogo);

    botaoInicio.addEventListener('click', () => {
        ecraFinal.classList.add('hidden');
        ecraJogo.classList.add('hidden');
        ecraInicial.classList.remove('hidden');
    });

    botaoVoltar.addEventListener('click', () => {
        ecraJogo.classList.add('hidden');
        ecraFinal.classList.add('hidden');
        ecraInicial.classList.remove('hidden');
    });

    botaoHomepage.addEventListener('click', () => {
        window.location.href = '../../index.html';
    });

    atualizarSimbolosBrinquedosMemoria();
});