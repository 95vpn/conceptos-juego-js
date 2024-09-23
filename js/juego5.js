var personaje = function(x, y, nombre) {
    this.x = 0;
    this.y = 0;
    this.nombre = nombre;

    //metodo abajo

    this.abajo = function () {
        this.y += 10;
    }

    //metodo hablar
    this.hablar = function () {
        console.log('hola amigo, me llamo ' + this.nombre);
    }
}

var personaje1 = new personaje(10, 100, 'luis'); 
var personaje2 = new personaje(10, 100, 'maria'); 