document.addEventListener('keydown', function (tecla) {
    console.log(tecla.keyCode)

    if(tecla.keyCode == 32) {
        console.log("espacio")
    }

    if(tecla.keyCode == 38) {
        console.log("arriba")
    }
})