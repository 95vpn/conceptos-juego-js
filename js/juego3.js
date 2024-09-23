var configTeclado = { prevent_repeat: true };

var eventoTeclado = new window.keypress.Listener(this, configTeclado);

function pulsaA() {
    console.log('has pulsado A')
}

eventoTeclado.simple_combo('a', pulsaA)