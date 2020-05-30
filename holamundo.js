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
console.log(square.area.toString());
