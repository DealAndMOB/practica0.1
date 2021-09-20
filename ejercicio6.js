console.log ("ejercicio6");
var frase = prompt("Ingresar frase: ");
var a=0, e=0, i=0, o=0, u=0;
(frase,20,'\n');

for(var V=0; V<20; V++){
    switch(frase[V]){
        case 'a': a++;
        break;
        case 'e': e++;
        break;
        case 'i': i++;
        break;
        case 'o': o++;
        break;
        case 'u': u++;
        break;
    }
}
console.log("VOCAL A: ",a);
console.log("VOCAL E: ",e);
console.log("VOCAL I: ",i);
console.log("VOCAL O: ",o);
console.log("VOCAL U: ",u);