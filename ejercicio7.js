console.log ("ejercicio7");

function contarvocales(texto){
    return texto.replace(/[aeiouAEIOUáéíóúÁÉÍÓÚ]/g, "").length;
}
Y= prompt("ingresar frase")
console.log(contarvocales(x));