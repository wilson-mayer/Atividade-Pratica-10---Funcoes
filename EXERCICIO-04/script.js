// 4. Crie uma função que recebe por parâmetro o tempo de duração de
// uma fábrica expressa em segundos e retorna esse tempo em horas,
// minutos e segundos.

// Ex:
// Entrada: 3672
// Saída: 1:1:12

let tempoSegundos = parseInt(prompt('Digite o tempo em segundos:'));

function horasMinutosSegundos (segundos) {
    let horas = Math.floor(segundos / 3600)
    let minutos = Math.floor((segundos % 3600) / 60)
    let segundosResto = segundos % 60

    let resultado = `${horas} : ${minutos} : ${segundosResto}`;
    return resultado;
}

let resultado = horasMinutosSegundos(tempoSegundos);
console.log(resultado);