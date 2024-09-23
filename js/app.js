var fps = 10;
var xEscenario = 0;

function atacar() {
    console.log('estas atacando a tu enemigo')
}

function mueveEscenario() {
    xEscenario++;
    console.log(xEscenario)
}

function principal() {
    mueveEscenario();
}

setInterval(principal, 1000/fps);