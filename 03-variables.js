// Variables globales con var

var miVariableGlobal = 5;

console.log(miVariableGlobal);

function miFuncion() {
    console.log("Into a function")
    console.log(miVariableGlobal)
}
miFuncion()

// Variables locales


function miFuncionLocal() {
    console.log("Variables locales")
    var miVaribleLocal = 10
    console.log(miVaribleLocal)
}
miFuncionLocal()
console.log(miVaribleLocal)
miVaribleLocal = 3
console.log(miVaribleLocal)