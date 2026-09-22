document.addEventListener('DOMContentLoaded', () => {
    const memoryBoard = document.getElementById('memory-board');
    const restartButton = document.getElementById('restartButton');
    const attemptsDisplay = document.getElementById('attempts');
    const difficultyButton = document.getElementById('difficultyButton');

    // Símbolos espaciais: 6 emojis para o modo fácil (12 cartas), 10 emojis para o difícil (20 cartas)
    const normalSymbols = ['🚀', '🌍', '⭐', '🌙', '🪐', '🛸']; // 6 pares (12 cartas)
    const hardSymbols = ['🚀', '🌍', '⭐', '🌙', '🪐', '🛸', '👽', '👨‍🚀', '☄️', '🛰️']; // 10 pares (20 cartas)

    let cards = [];
    let flippedCards = [];
    let matchedCards = [];
    let attempts = 0;
    let lockBoard = false;
    let isHardMode = false; // Começa no modo fácil

    // Função para baralhar as cartas (Fisher-Yates)
    function shuffleCards() {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }

    // Função para criar o tabuleiro dinamicamente
    function createBoard() {
        const selectedSymbols = isHardMode ? hardSymbols : normalSymbols;
        cards = [...selectedSymbols, ...selectedSymbols];

        // Ajusta as colunas da grelha CSS: 4 colunas (4x3 = 12 cartas no fácil) e 5 colunas (5x4 = 20 cartas no difícil)
        if (isHardMode) {
            memoryBoard.style.gridTemplateColumns = 'repeat(5, 1fr)'; // 5x4 (20 cartas)
        } else {
            memoryBoard.style.gridTemplateColumns = 'repeat(4, 1fr)'; // 4x3 (12 cartas)
        }

        shuffleCards();
        memoryBoard.innerHTML = '';
        
        cards.forEach((symbol, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.index = index;
            card.innerHTML = `
                <div class="front">?</div>
                <div class="back">${symbol}</div> 
            `;
            card.addEventListener('click', flipCard);
            memoryBoard.appendChild(card);
        });
    }

    // Lógica ao clicar numa carta
    function flipCard() {
        if (lockBoard || flippedCards.length >= 2 || this.classList.contains('flipped')) return;
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            lockBoard = true;
            attempts++;
            attemptsDisplay.textContent = attempts;
            checkForMatch();
        }
    }

    // Verificação se formam par
    function checkForMatch() {
        const [card1, card2] = flippedCards;
        const symbol1 = card1.querySelector('.back').textContent;
        const symbol2 = card2.querySelector('.back').textContent;

        if (symbol1 === symbol2) {
            matchedCards.push(card1, card2);
            if (matchedCards.length === cards.length) {
                setTimeout(() => alert(`Missão cumprida! Ganhou em ${attempts} tentativas!`), 500);
            }
            lockBoard = false;
            flippedCards = [];
        } else {
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                lockBoard = false;
                flippedCards = [];
            }, 1000);
        }
    }

    // Reiniciar o jogo com efeito visual suave
    function restartGame() {
        memoryBoard.style.opacity = '0.5';
        setTimeout(() => {
            flippedCards = [];
            matchedCards = [];
            attempts = 0;
            attemptsDisplay.textContent = attempts;
            lockBoard = false;
            createBoard();
            memoryBoard.style.opacity = '1';
        }, 300);
    }

    // Inicialização do Jogo
    createBoard();

    // Evento do botão de reiniciar
    restartButton.addEventListener('click', restartGame);

    // Evento do botão de alternar dificuldade
    if (difficultyButton) {
        difficultyButton.addEventListener('click', () => {
            isHardMode = !isHardMode;
            
            // Atualiza o texto e o atributo data-difficulty do botão
            if (isHardMode) {
                difficultyButton.textContent = 'Modo Fácil';
                difficultyButton.setAttribute('data-difficulty', 'facil');
            } else {
                difficultyButton.textContent = 'Modo Difícil';
                difficultyButton.setAttribute('data-difficulty', 'dificil');
            }
            
            restartGame();
        });
    }
});