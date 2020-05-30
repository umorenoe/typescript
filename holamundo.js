var holamundo;
holamundo = "Hola Mundo";
console.log(holamundo);
function holaMundoFuncion() {
    return "Hola mundo en funcion";
}
holamundo = holaMundoFuncion();
console.log(holamundo);
function createSquare(configSquare) {
    var color = configSquare.color;
    var area = configSquare.width * configSquare.width;
    return { color: color, area: area };
}
var square = createSquare({ color: "Green", width: 100 });
console.log("Area del cuadrado: ", square.area.toString());
var Esfera = /** @class */ (function () {
    function Esfera(radio) {
        this.radio = radio;
    }
    Esfera.prototype.volumen = function () {
        return 4 / 3 * (3.1416 * Math.pow(this.radio, 3));
    };
    Esfera.prototype.diametro = function () {
        return this.radio * 2;
    };
    return Esfera;
}());
var esfera = new Esfera(10);
console.log("Volumen: ", esfera.volumen().toString());
