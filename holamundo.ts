let holamundo: string;
holamundo = "Hola Mundo";
console.log(holamundo);

function holaMundoFuncion(): string {
  return "Hola mundo en funcion";
}

holamundo = holaMundoFuncion();
console.log(holamundo);

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(configSquare:SquareConfig): {color: string, area: number} {
  let color: string = configSquare.color;
  let area: number = configSquare.width * configSquare.width;
  return {color: color, area: area};
}

let square = createSquare({color: "Green", width: 100});
console.log(square.area.toString());
