// Parte 01 - Variáveis
/*
Variáveis são estruturas que permitem guardar e
acessar quaisquer informações no nosso código
Antes de usarmos estas variáveis, nós precisamos
declará-las (criá-las)
Variáveis

const nome = 23 // const NÃO pode mudar o valor
let idade = 23 // let pode mudar o valor!
idade = 24

Uma variável pode receber qualquer tipo de valor
(booleano, números, strings, arrays, objetos...)
Elas devem ter nomes significativos e seguir o padrão
camelCase 🐫
○ Ruim: Nome
○ Bom: nomeDoUsuario
Conversões de Tipos
Podemos converter strings para números e vice-versa
Geralmente usamos essas funções de conversão junto
com o prompt, que sempre guarda o que o usuário
escreveu em forma de string!

Número ⇒ String: toString()
String ⇒ Número: Number()

// Exercício 1 

Crie uma variável para guardar o nome de um produto e
peça para o usuário inserir esse nome
● Crie uma variável para guardar o preço de um produto e
peça para o usuário inserir esse valor
● O GERENTE FICOU DOIDO! Dê um desconto de 1 real no
preço do produto, guardando o novo preço na mesma
variável

const nomeDoProduto =  prompt("Insira o nome do produto")
let precoDoProduto = prompt("Insira o preco do produto")
precoDoProduto = precoDoProduto - 1
console.log(nomeDoProduto,precoDoProduto)

// console.log(`O produto ${nomeDoProduto} custa R$${precoDoProduto}`)
*/

// Parte 02 - Operadores Aritméticos 
/*

● const soma = 20 + 20 // 40
● const subtracao = 25 - 20 // 5
● const multiplicacao = 2 * 20 // 40
● const divisao = 20 / 5 // 4
● const resto = 20 % 3 // 2
Operadores Aritméticos 🧮
● Uma possível simplificação
Operadores Aritméticos 🧮
let resultado = 100
resultado = resultado + 20
resultado = resultado - 10
resultado = resultado * 5
resultado = resultado / 10
resultado += 20
resultado -= 10
resultado *= 5
resultado /= 10

// Exercício 2

Peça para o usuário inserir dois números e guarde-os em
 variáveis diferentes (num1 e num2)
● Imprima no console:
○ A soma do primeiro com o segundo
○ A subtração do primeiro pelo segundo
○ A multiplicação do primeiro pelo segundo
○ A divisão do primeiro pelo segundo
○ O resto da divisão do primeiro pelo segundo


const num1 = Number(prompt("Insira o primeiro numero"))
const num2 = Number(prompt("Insira o segundo numero"))

// console.log("Soma", num1 + num2 )
console.log(`Seus numeros sao: num1 = ${num1} e num2 = ${num2}`)
console.log("Subtracao", num1 - num2 )
console.log("Multiplicacao", num1 * num2 )
console.log("Divisao", num1 / num2 )
console.log("Resto da divisao", num1 % num2 )

*/

// Parte 03 - Comparadores
/*
São operadores que permitem comparar variáveis
entre si e retornam true ou false
● São eles:
○ Igual (valor e tipo): ===
○ Diferente: !==
○ Maior e maior igual: > e >=
○ Menor e menor igual: < e <=

// Exercício 3

Sorteie um número aleatório entre 1 e 10
● Peça para o usuário inserir um número de 1 a 10
● Imprima no console os dois números dizendo se o que foi
digitado pelo usuário é menor, maior ou igual ao
sorteado

*/

// Parte 04 - Operadores Lógicos
/*
// São operadores especiais usados entre booleanos
● Retornam um valor booleano
● Existem 3 importantes:
○ Operador E: &&
○ Operador Ou: ||
○ Operador Não/Negação: !

const idade = Number (prompt("Digite sua idade"))
const altura = Number (prompt("Digite sua altura em centimetros"))
const temProblemaCardiaco = (prompt("Voce tem algum problema cardiaco"))

if(idade >= 18 && altura >= 160 && temProblemaCardiaco === "N") {
    console.log("Pode entrar")
} else {
    console.log("Nao pode entar")
}
*/