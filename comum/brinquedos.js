/* LISTA DE BRINQUEDOS (CONSTANTES DE CONFIGURAÇÃO) */
const listaBrinquedos = [
    "001_aculos_mergulho..png",
    "002_Aquaplay..png",
    "003_Arco_Flecha..png",
    "004_aviao..png",
    "005_aviaopapel..png",
    "006_BabylonTower..png",
    "007_Barcos_Madeira..png",
    "008_barco_papel..png",
    "009_barco_pirata..png",
    "010_berlindes..png",
    "011_beyblade..png",
    "012_BeybladeX..png",
    "013_bicicleta..png",
    "014_binoculos..png",
    "015_Bitzee..png",
    "016_blocos_contraucao..png",
    "017_bola..png",
    "018_BolaLabirinto3D..png",
    "019_bolas_sabao..png",
    "020_boneca..png",
    "021_boneca2..png",
    "022_caixa_lapis..png",
    "023_caixa_musica..png",
    "024_Caleidoscopio..png",
    "025_Carrinha_Rolamentos..png",
    "026_carrinho..png",
    "027_carrinho_corrida..png",
    "028_carro_bombeiro..png",
    "029_carro_remoto..png",
    "030_castelo..png",
    "031_cavalo_baloico..png",
    "032_comboio..png",
    "033_comboioReal..png",
    "034_cones..png",
    "035_cubo_magico..png",
    "036_detetor_metais..png",
    "037_dinossauro..png",
    "038_dinossauros_plastico..png",
    "039_drone..png",
    "040_Espirografo..png",
    "041_Etch_Sketch..png",
    "042_FidgetToys..png",
    "043_FigurasRoblox..png",
    "044_fisga..png",
    "045_flippers..png",
    "046_Frisbee..png",
    "047_Furby..png",
    "048_Futebol_Botão..png",
    "049_Garagens..png",
    "050_gear_bug..png",
    "051_GooJitZu..png",
    "052_Hot_Wheels..png",
    "053_io_io..png",
    "054_Kits_Pulseiras..png",
    "055_KLASK..png",
    "056_K_Nex..png",
    "057_Labirinto_Esferas..png",
    "058_Marionetas..png",
    "059_Matchbox..png",
    "060_matraquilhos..png",
    "061_Meccano..png",
    "062_mesa_ping_pong..png",
    "063_microscopio..png",
    "064_Minecraft..png",
    "065_Monopoly..png",
    "066_Nerf..png",
    "067_oculos_sol..png",
    "068_papagaio_papel..png",
    "069_passaros_plastico..png",
    "070_patinho_plastico..png",
    "071_patins..png",
    "072_piao..png",
    "073_PinArt..png",
    "074_Pinball..png",
    "075_pistola_agua..png",
    "076_plasticina..png",
    "077_PopIt..png",
    "078_puzzle..png",
    "079_raquete_tenis..png",
    "080_robot..png",
    "081_sabichao..png",
    "082_Screwball..png",
    "083_skate..png",
    "084_SkipIt..png",
    "085_slime..png",
    "086_Slinky..png",
    "087_soldados_plastico..png",
    "088_Sombras..png",
    "089_Tamagotchi..png",
    "090_tambor..png",
    "091_teledone..png",
    "092_telescopio..png",
    "093_Tetris..png",
    "094_trator..png",
    "095_urso..png",
    "096_ViewMaste..png",
    "097_viola..png",
    "098_walkietalkies..png",
    "099_xadrez..png"
];

/* ELEMENTOS DO DOM E CAMINHOS*/
const pagina = document.body;
const botaoBrinquedos = document.getElementById("botaoBrinquedos");
const fecharBrinquedos = document.getElementById("fecharBrinquedos");

let caminhoBrinquedos = pagina.dataset.caminhoBrinquedos;
let caminhoRecursos = pagina.dataset.caminhoRecursos;

if (caminhoBrinquedos === undefined) {
    caminhoBrinquedos = "recursos/brinquedos/";
}

if (caminhoRecursos === undefined) {
    caminhoRecursos = "recursos/";
}

/* ESTADO DA APLICAÇÃO E ÁUDIO*/
let somCucu = new Audio(caminhoRecursos + "cuckoo_clock.mp3"); // alterado de constante
somCucu.preload = "auto";

let tempoBrinquedo = 10;
let intervaloBrinquedo = null;
let oportunidadeTerminada = false;


/* FUNÇÕES DE ÁUDIO */

/* Iniciar som do cuco */
function iniciarSomCucu() {
    somCucu.pause();
    somCucu.currentTime = 0;
    somCucu.play();
}

/* Parar som */
function pararSomCucu() {
    somCucu.pause();
    somCucu.currentTime = 0;
}


/* ARMAZENAMENTO LOCAL (LOCALSTORAGE)*/

/* Ler brinquedos adquiridos */
function lerBrinquedos() {
    const guardados = localStorage.getItem("brinquedosAdquiridos");

    if (guardados === null) {
        return [];
    }

    return JSON.parse(guardados);
}

/* Guardar brinquedos */
function guardarBrinquedos(brinquedos) {
    localStorage.setItem("brinquedosAdquiridos", JSON.stringify(brinquedos));

    if (typeof guardarDadosRegistoAtual === "function") {
        guardarDadosRegistoAtual();
    }
}

/* GESTÃO DA COLEÇÃO DE BRINQUEDOS */

/* Mostrar Coleção */
function mostrarColecaoBrinquedos() {
    if (typeof fecharTodosPopups === "function") {
        fecharTodosPopups();
    }

    const popup = document.getElementById("popupColecaoBrinquedos");
    const zona = document.getElementById("listaColecaoBrinquedos");

    if (popup === null || zona === null) {
        return;
    }

    const brinquedos = lerBrinquedos();
    zona.innerHTML = "";

    if (brinquedos.length === 0) {
        const mensagem = document.createElement("p");
        mensagem.className = "sem-brinquedos";
        mensagem.textContent = "Ainda não tens brinquedos! Continua a jogar e vais poder escolher alguns!";

        zona.appendChild(mensagem);
    } else {
        for (let brinquedo of brinquedos) {
            const imagem = document.createElement("img");
            imagem.src = caminhoBrinquedos + brinquedo;
            imagem.alt = "Brinquedo adquirido";
            imagem.className = "brinquedo-colecao";

            zona.appendChild(imagem);
        }
    }

    popup.style.display = "flex";
}

/* Fechar coleção */
function fecharColecaoBrinquedos() {
    const popup = document.getElementById("popupColecaoBrinquedos");

    if (popup !== null) {
        popup.style.display = "none";
    }
}

/* Escolher 6 brinquedos aleatórios */
function escolherSeisBrinquedos() {
    const adquiridos = lerBrinquedos();
    const disponiveis = [];

    for (let brinquedo of listaBrinquedos) {
        if (!adquiridos.includes(brinquedo)) {
            disponiveis.push(brinquedo);
        }
    }

    const escolhidos = [];

    while (escolhidos.length < 6 && disponiveis.length > 0) {
        const posicao = Math.floor(Math.random() * disponiveis.length);
        escolhidos.push(disponiveis[posicao]);
        disponiveis.splice(posicao, 1);
    }

    return escolhidos;
}

/* CONTADOR E TEMPORIZADOR*/

/* Atualizar contador */
function atualizarContadorBrinquedo() {
    const contador = document.getElementById("contadorBrinquedo");

    if (contador !== null) {
        contador.textContent = tempoBrinquedo;
    }
}

/* Iniciar contador */
function iniciarContadorBrinquedo() {
    if (intervaloBrinquedo !== null) {
        clearInterval(intervaloBrinquedo);
    }

    tempoBrinquedo = 10;
    oportunidadeTerminada = false;

    atualizarContadorBrinquedo();

    /* Começa o som ao mesmo tempo que aparece o número 10 */
    iniciarSomCucu();

    intervaloBrinquedo = setInterval(function () {
        tempoBrinquedo = tempoBrinquedo - 1;
        atualizarContadorBrinquedo();

        if (tempoBrinquedo <= 0) {
            terminarTempoBrinquedo();
        }
    }, 1000);
}

/* Parar contador */
function pararContadorBrinquedo() {
    if (intervaloBrinquedo !== null) {
        clearInterval(intervaloBrinquedo);
        intervaloBrinquedo = null;
    }

    /* Quando o contador para, o som também para */
    pararSomCucu();
}

/* Tempo terminou */
function terminarTempoBrinquedo() {
    if (oportunidadeTerminada === true) {
        return;
    }

    oportunidadeTerminada = true;
    pararContadorBrinquedo();

    const popup = document.getElementById("popupEscolherBrinquedo");

    if (popup !== null) {
        popup.style.display = "none";
    }

    /* A oportunidade é consumida mesmo sem escolher brinquedo */
    if (typeof oportunidadeBrinquedoTerminadaDiferencas === "function") {
        oportunidadeBrinquedoTerminadaDiferencas();
    }
}

/* OPORTUNIDADE E ADQUIRIR BRINQUEDO*/

/* Mostrar oportunidade */
function mostrarOportunidadeBrinquedo() {
    const popup = document.getElementById("popupEscolherBrinquedo");
    const zona = document.getElementById("listaEscolherBrinquedo");

    if (popup === null || zona === null) {
        return;
    }

    const escolhidos = escolherSeisBrinquedos();
    zona.innerHTML = "";

    for (let brinquedo of escolhidos) {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = "opcao-brinquedo";

        const imagem = document.createElement("img");
        imagem.src = caminhoBrinquedos + brinquedo;
        imagem.alt = "Escolher brinquedo";

        botao.appendChild(imagem);

        botao.addEventListener("click", function () {
            adquirirBrinquedo(brinquedo);
        });

        zona.appendChild(botao);
    }

    popup.style.display = "flex";

    /* Começam os 10 segundos e o som do cuco */
    iniciarContadorBrinquedo();
}

/* Adquirir brinquedo */
function adquirirBrinquedo(brinquedo) {
    if (oportunidadeTerminada === true) {
        return;
    }

    oportunidadeTerminada = true;

    /* Ao escolher um brinquedo, para o contador e o som */
    pararContadorBrinquedo();

    const brinquedos = lerBrinquedos();

    if (!brinquedos.includes(brinquedo)) {
        brinquedos.push(brinquedo);
        guardarBrinquedos(brinquedos);
    }

    /* Regista a oportunidade como utilizada */
    if (typeof oportunidadeBrinquedoTerminadaDiferencas === "function") {
        oportunidadeBrinquedoTerminadaDiferencas();
    }

    const popup = document.getElementById("popupEscolherBrinquedo");

    if (popup !== null) {
        popup.style.display = "none";
    }
}

/* EVENT LISTENERS (OUVINTES DE EVENTOS) */

if (botaoBrinquedos !== null) {
    botaoBrinquedos.addEventListener("click", function () {
        mostrarColecaoBrinquedos();
    });
}

if (fecharBrinquedos !== null) {
    fecharBrinquedos.addEventListener("click", function () {
        fecharColecaoBrinquedos();
    });
}