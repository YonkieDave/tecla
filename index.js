/*function saludo() {
    console.log("Hola ya estoy en git");
}

function llamada() {
    console.log("Hola mundo");
}

function llamadora(call) {
    console.log("dentro de esta función llamamos nuestro callback");
    call()
}

llamadora(llamada);*/

console.log("Esto va primero");
setTimeout(() => {
    console.log("Esto va segundo");
}, 2000);
console.log("Esto va tercero");