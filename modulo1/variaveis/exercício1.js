let nome
let idade
console.log(typeof nome, idade)
// O tipo indefinido foi impresso por não ter sido definido o valor das variáveis.
nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")
console.log(typeof nome, idade)
//O tipo da variável "nome" mudou para string, enquanto a variável "idade" mudou para number, pois valores de diferentes tipos foram atribuídos a estas variáveis.
console.log("Olá ",nome," você tem ",idade," anos." )