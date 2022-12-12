const prompt = require("prompt-sync")();

// Leia os três números
var num1 = parseInt(prompt("Digite o Primeiro Número: "));
var num2 = parseInt(prompt("Digite o Segundo Número: "));
var num3 = parseInt(prompt("Digite o Terceiro Número: "));
// Calcule a soma e a média
var soma = num1 + num2 + num3;
var media = (num1 + num2 + num3) / 3;
// Mostre na tela o valor da soma e média
console.log("A soma é =", soma);
console.log("A média é =", media);