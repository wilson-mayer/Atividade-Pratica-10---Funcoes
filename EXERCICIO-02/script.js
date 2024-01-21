// 2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// for ímpar ou falso se for par.

let valor = Number(prompt('Digite um valor:'));

function valorRetornado (valor) {
    if(valor % 2 === 0) {
        console.log(`Seu número ${valor} é falso`);
    } else {
        console.log(`Seu número ${valor} é verdadeiro`);
    }
}
valorRetornado (valor)