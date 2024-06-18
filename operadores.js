// Ej 1: Declara las variables name, age, city, isMarried y year, dale los valores apropiados y muestra por consola el tipo de dato que contienen.

let name = "Adriana",
  age = 34,
  city = "Bucaramanga",
  isMarried = false,
  year = 2024;

console.log(
  "name = " + typeof name,
  ", age = " + typeof age,
  ", city = " + typeof city,
  ", isMarried = " + typeof isMarried,
  ", year = " + typeof year
);

// Ej 2: Escribe 3 sentencias de JavaScript que sean verdaderas y 3 que sean falsas.

console.log(10 === 10, 5 != 10, 8 == "8");
console.log(7 === "7", 4 <= 1, 3 != 3);

// Ej 3: Crea la variable side con valor 4. Crea la variable squareArea y dale como valor el área de un cuadrado de lado side.

let side = 4;
let squareArea = side * side;
console.log(squareArea);

// Ej 4: Crea las variables a, b y c con valores 2, 3 y 4 respectivamente. Crea la variable trianglePerimeter y dale el valor del perímetro de un triángulo con lados a, b y c.

let a = 2,
  b = 3,
  c = 4;

let trianglePerimeter = a + b + c;
console.log(trianglePerimeter);

// Ej 5: Crea la variable radius con valor 7. Crea la variable circleArea y dale como valor el área de un círculo de radio radius.

let radius = 7;
let circleArea = Math.PI * radius ** 2;
console.log(circleArea);

// Ej 6: Crea una variable circumference y dale como valor la circunferencia de un círculo de radio radius (7).

let circumference = Math.PI * (radius + radius);
console.log(circumference);

// Ej 7: Crea la variable num con valor 5. Ahora súmale 10 usando el Operador de asignación correcto y haz un log.

let num = 5;
num += 10;
console.log(num);

// Ej 8: Réstale 2 a la variable num usando el Operador de asignación correcto y haz otro log.

num -= 2;
console.log(num);
