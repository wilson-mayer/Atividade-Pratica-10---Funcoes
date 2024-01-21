// 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
// uma letra. Se a letra for A a função deve calcular a média aritmética,
// se for P, a média ponderada (peso: 5, 3 e 2).

let primeiraNota = Number(prompt('Digite a primeira nota:'));
let segundaNota = Number(prompt('Digite a segunda nota:'));
let terceiraNota = Number(prompt('Digite a terceira nota:'));
let letra = prompt('Digite A para calcular a média aritmética ou P para calcular a média ponderada.');

function calcularMedia (primeiraNota, segundaNota, terceiraNota, letra) {
    if (letra === "a") {
        let mediaA = (primeiraNota + segundaNota + terceiraNota) / 3;
        console.log(`A média aritmética é: ${mediaA}`);
    } else if (letra === "p") {
        let mediaB = (primeiraNota * 5 + segundaNota * 3 + terceiraNota * 2) / 10;
        console.log(`A média ponderada é: ${mediaB}`);
    } else {
        alert ('Valor inválido!')
    }
}

calcularMedia (primeiraNota, segundaNota, terceiraNota, letra);
