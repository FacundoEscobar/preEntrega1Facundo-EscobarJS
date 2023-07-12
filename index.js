// Algoritmo con condicional If-Else

const edadUsuario = parseInt(prompt("Por favor, ingrese su edad"));
if(edadUsuario >= 18) {
    alert("Usted es mayor de edad");
    console.log(edadUsuario);
} else {
    alert("Usted es menor de edad");
}
const boletoUsuario = prompt("Usted tiene ticket? Por favor responda con 'Si o con No'");
    if(boletoUsuario == "Si") {
    alert("Usted tiene ticket");
    console.log(boletoUsuario);
    } else {
    alert("Usted no cuenta con ticket")
}


// Algoritmo con ciclo

let ingresarNumero = parseInt(prompt("Por favor, ingrese un número"))

for(let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i;
    console.log(ingresarNumero + " X " + i + " = " + resultado);
}