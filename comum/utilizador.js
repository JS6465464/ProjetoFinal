
/* Dados do utilizador */
const nomeJogo = document.getElementById("nomeJogo");
const amigoJogo = document.getElementById("amigoJogo");

/* Ler dados guardados */
const nomeGuardado = localStorage.getItem("nomeUtilizador");
const amigoGuardado = localStorage.getItem("amigoUtilizador");

/* Mostrar nome */
if (nomeJogo !== null) {
    if (nomeGuardado !== null) {
        nomeJogo.innerText = nomeGuardado + "!";
        nomeJogo.style.display = "block";
    } else {
        nomeJogo.style.display = "none";
    }
}

/* Mostrar amigo */
if (amigoJogo !== null) {
    if (amigoGuardado !== null) {
        amigoJogo.src = "../../" + amigoGuardado;
        amigoJogo.style.display = "block";
    } else {
        amigoJogo.style.display = "none";
    }
}