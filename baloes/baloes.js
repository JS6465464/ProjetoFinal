const areaBaloes = document.getElementById("areaBaloes");

const CORES_BALOES = [
    "#ff5a5f",
    "#ffb400",
    "#2ec4b6",
    "#7b61ff",
    "#ff8fb1",
    "#4caf50"
];

let audioCtx = null;

const aleatorioBalao = (min, max) =>
    Math.random() * (max - min) + min;


// Som de "pop" gerado no browser
function somPop() {
    try {
        audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();

        const dur = 0.12;

        const buffer = audioCtx.createBuffer(
            1,
            audioCtx.sampleRate * dur,
            audioCtx.sampleRate
        );

        const dados = buffer.getChannelData(0);

        for (let i = 0; i < dados.length; i++) {
            dados[i] =
                (Math.random() * 2 - 1) *
                Math.pow(1 - i / dados.length, 3);
        }

        const fonte = buffer ? audioCtx.createBufferSource() : null;

        const filtro = audioCtx.createBiquadFilter();

        filtro.type = "highpass";
        filtro.frequency.value =
            aleatorioBalao(600, 1400);

        fonte.buffer = buffer;

        fonte.connect(filtro).connect(audioCtx.destination);

        fonte.start();

    } catch (e) {
        // Sem som, não faz mal
    }
}


function criarBalao() {

    if (document.hidden) {
        return;
    }

    const b = document.createElement("button");

    const w = aleatorioBalao(60, 110);

    b.className = "balao";

    b.setAttribute("aria-label", "Rebentar balão");

    b.style.setProperty("--w", w + "px");

    const maxLeft = window.innerWidth - w;

    const left = aleatorioBalao(0, maxLeft);

    b.style.setProperty( "--left",left + "px" );

    const cor =
        CORES_BALOES[
            Math.floor(
                Math.random() *
                CORES_BALOES.length
            )
        ];

    b.style.setProperty( "--cor", cor);

    b.style.setProperty("--dur", aleatorioBalao(50, 60) + "s" );

    b.style.setProperty("--deriva",aleatorioBalao(-60, 60) + "px");

    b.dataset.cor = cor;

    b.addEventListener("pointerdown", function () {rebentarBalao(b);});

    b.addEventListener("animationend", function (e) {
            if (e.animationName === "subir") {
                b.remove();
            }
        }
    );

    areaBaloes.appendChild(b);
}


function rebentarBalao(b) {

    if (b.dataset.rebentado) return;

    b.dataset.rebentado = "1";


    const registos = lerRegistosUtilizador();
    const posicao = encontrarRegistoAtual(registos);

    if (posicao !== -1) {

        const registo = registos[posicao];

        registo.baloesRebentados++;

        if (
            registo.amigo !== null &&
            registo.baloesRebentados >= 10 &&
            registo.presenteBaloes === false
        ) {
            registo.presenteBaloes = true;

            mostrarOportunidadeBrinquedo();
        }

        guardarRegistosUtilizador(registos);
    }


    const r = b.getBoundingClientRect();

    const cx = r.left + r.width / 2;

    const cy = r.top + r.height / 2;

    const cor = b.dataset.cor;


    // Onda
    const onda = document.createElement("div");

    onda.className = "onda";

    onda.style.cssText =
        `left:${cx}px;
         top:${cy}px;
         --cor:${cor};
         --tam:${r.width * 1.8}px`;

    onda.addEventListener(
        "animationend",
        function () {
            onda.remove();
        }
    );

    areaBaloes.appendChild(onda);


    // Partículas
    for (let i = 0; i < 14; i++) {

        const p = document.createElement("div");

        const ang =
            (Math.PI * 2 * i) / 14 +
            aleatorioBalao(-0.25, 0.25);

        const dist =
            aleatorioBalao(
                r.width * 0.6,
                r.width * 1.5
            );

        p.className = "pedaco";

        p.style.cssText =
            `left:${cx}px;
             top:${cy}px;
             --cor:${cor};
             --dx:${Math.cos(ang) * dist}px;
             --dy:${Math.sin(ang) * dist}px;
             --rot:${aleatorioBalao(-240, 240)}deg`;

        p.addEventListener(
            "animationend",
            function () {
                p.remove();
            }
        );

        areaBaloes.appendChild(p);
    }


    b.remove();

    somPop();
}


// Primeiro balão
setTimeout(criarBalao, 3000);

// Depois, um balão a cada 8 segundos
setInterval(criarBalao, 8000);