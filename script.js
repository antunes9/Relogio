function actualizarTempo(){

    var display = document.querySelector(`.display`)

    var agora = new Date();
    
    var horario = agora.getHours() + `:` + agora.getMinutes() + `:` + agora.getSeconds();
    
    display.textContent = horario;

}

function corrigirHorario(numero){
    if (numero < 10) {
        numero = `0` + numero;
    }
    return numero;

}

actualizarTempo();

setInterval(actualizarTempo, 1000);

console.log(horario);