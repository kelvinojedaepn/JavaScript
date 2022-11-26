// Tipos de datos: Undefined, null, boolean, string, symbol, number y object

// Tipos de varables
var miVariable = "frecodecamp";
console.log(miVariable);

miVariable = 16;
console.log(miVariable)


var a;
var b = 2;
console.log(a)
console.log(b)

a = 10
console.log(a)


//Variable a otra variable
var a = 5;
var b = a;
console.log(a)
console.log(b)

var a = 5;
var b;
b = a;
console.log(a)
console.log(b)

// Operaciones aritmeticas
var suma = 1 + 123
console.log(suma)

var cociente = 10 / 0
console.log(cociente)

cociente = 5.0 / 2.0
console.log(cociente)

//Resto en js
var resto = 15 % 3
console.log(resto)

// Incrementar un valor en js
var listaLibros = 105;
listaLibros++
console.log(listaLibros)
listaLibros += 1
console.log(listaLibros)

var multiplicacion = 12
console.log(multiplicacion *= 2)

var caracter = 'hola';
console.log(caracter)
    // caracter = 'hola";

var caracteresConComilla = "soy una cadena con \"Comillas\""
console.log(caracteresConComilla)
caracteresConComilla = 'soy una cadena con "Comillas"'
console.log(caracteresConComilla)


// Secuencias de escape
// \' comilla simple
// \" Comillas dobles
// \\ barra invertida
// \n Linea nueva
// \r retorno de carro
// \t tabulación
// \b retroceso
// \f salto de página

var cadenaCaracter = "hola /n espace"
console.log(cadenaCaracter)

var miCadena = 'A B'
var miCadena01 = 'Javascript'
console.log(miCadena.length)
console.log(miCadena01.length)
console.log(miCadena01[0])
console.log(miCadena01[1])

miCadena01[0] = 'H'
console.log(miCadena01)
console.log(miCadena01[10])

// Obtener el ultimo indice
console.log(miCadena01[miCadena01.length - 1])

// Arreglos dentro de JAvascript
var miArreglo = ['john', 24]
console.log(miArreglo)
console.log(miArreglo[1])
var estudiantes = ["norma", "gino", "emili"]
console.log(estudiantes)

// Arreglos anidados
var listaEstudiantes = [
    ["nora", 32],
    ["gino", 3]
]
console.log(listaEstudiantes[1])

// Acceso a elementos de datos arreglos
var miArregloAcceso = [10, 20, 30]

// Modificar datos de un arreglo
miArregloAcceso[1] = 12
console.log(miArregloAcceso)

miArregloAcceso[1] = [, 2, 3]
console.log(miArregloAcceso)
console.log(miArregloAcceso[1][0])

// push elimina el ultimo elemento

var estaciones = ["Primavera", "Verano"]
estaciones.push("Invierno")
estaciones
estacion = estaciones.pop()
estaciones
estacion
// Eliminar primer elemento
estacion = estaciones.shift()
estacion

// Shift- Agregar primer elemento dentro del arreglo

estaciones.unshift("Otoño")
estaciones