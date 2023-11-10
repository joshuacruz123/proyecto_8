function obtenerTiempoFaltante(fechaLimite) {
    let ahora = new Date();
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante /(3600 * 24))).slice(-2);
    let titulo = document.getElementById("titulo");

    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }
};

//console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00 GMT-0500'))

function cuentaRegresiva(tiempoFaltante,reloj,mensaje) {
    const a = document.getElementById(reloj);

const tiempoActual = setInterval(() => {
    let t = obtenerTiempoFaltante(tiempoFaltante);
    a.innerHTML = `<div class="fecha">${t.diasFaltantes}</div><div class="letras">d:</div><div class="fecha">${t.horasFaltantes}</div><div class="letras">h:</div><div class="fecha">${t.minutosFaltantes}</div><div class="letras"> m:</div><div class="fecha">${t.segundosFaltantes}</div><div class="letras">s</div>`;

    if(t.tiempoFaltante <=1) {
        clearInterval(tiempoActual);
        a.document.querySelector('.titulo').innerHTML = mensaje;
    }

}, 1000)
};

cuentaRegresiva('Dec 25 2023 00:00:00', 'cuentaRegresiva', 'Feliz Navidad :)')

let santa = "off";
let santaStop = document.getElementById("santaquieto");
let musica = new Audio('./sound/allWant.mp3');

function play() { 
    if (santa == "off") {
        santa = "on";
        santaStop.classList.add("on");
        santaStop.addEventListener('click', () => {
            musica.play();
        })
        console.log("On");
    }
}


const botonDetener = document.querySelector(".pausa");
botonDetener.addEventListener("click", pausa);

function pausa() {
    santa = "off"
        santaStop.classList.remove("on");
        santaStop.addEventListener('click', () => {
            musica.pause();
        })
        console.log("Off");
}
