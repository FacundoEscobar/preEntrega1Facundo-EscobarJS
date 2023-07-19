//  Definiendo la función del numero aleatorio.
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 20) + 1;
};

while (true) {
    const edadIngresada = prompt("Ingresa tu edad")

    if(!isNaN(edadIngresada)) {
        edad = parseInt(edadIngresada)
        break;
    }
        alert("Por favor, ingrese su edad")
}

if(edad >= 18) {
    alert("Eres mayor de edad")
        const tieneTicket = prompt("¿Tienes un ticket para el casino? Responda con 'si' o 'no'")
                if(tieneTicket && tieneTicket.toLowerCase() === "si"){
                    alert("¡Que disfrutes del casino! Intenta adivinar un número del 1 al 20, ¡Mucha suerte!")
                    const numeroAleatorio = generarNumeroAleatorio();
                    let intentos = 0;
                    let numeroUsuario;
            while(intentos < 3) {
                numeroUsuario = parseInt(prompt("Ingresa tu intento!"));
                    if(isNaN(numeroUsuario)) {
                    alert("Por favor, intente solo con números del 1 al 20")
                        } else {
                            intentos++
                            if(numeroUsuario === numeroAleatorio) {
                                alert("Felicidades! Has ganado el juego")
                                break;}
                    else if (intentos === 3) {
                    alert(`Lo siento, has agotado tus intentos, ¡Suerte la proxima! (El numero era ${numeroAleatorio}`)}
                        else if (numeroUsuario < 1 || numeroUsuario > 20) {
                            alert("El número está entre el 1 y el 20.")}
                                else if (numeroUsuario < numeroAleatorio) {
                                    alert("Intenta con un número más grande.")}
                                        else {
                                            alert("Intenta con un número mas chico.")}
            } 
        }
    }
        else {
            alert("Lamentamos que no puedas entrar al casino :(")}
    } else {
        alert("Eres menor de edad, no tienes permitido el acceso")
}
