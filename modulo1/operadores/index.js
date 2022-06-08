// EXERCÍCIOS DE INTERPRETAÇÃO

// Exercicio 1 //

//const bool1 = true
//const bool2 = false
//const bool3 = !bool2

//let resultado = bool1 && bool2
//console.log("a. ", resultado)

// Retorna a. false, pois o bool2 é false, e a condição para ser verdadeiro seria bool1 e bool2.

//resultado = bool1 && bool2 && bool3 
//console.log("b. ", resultado) 

// Retorna b. false, pois a condição para ser true, é que todos deveriam ser true.

//resultado = !resultado && (bool1 || bool2) 
//console.log("c. ", resultado)

// Retorna c. true, pois "!" alterou o valor do "resultado" para verdadeiro.

//console.log("d. ", typeof resultado)

// O tipo e boolean

//------//

// Exercicio 2 //

//let primeiroNumero = prompt("Digite um numero!")
//let segundoNumero = prompt("Digite outro numero!")

//const soma = primeiroNumero + segundoNumero

//console.log(soma)

//O primeiro e o segundo número vão ser concatenados, pois o prompt está coletando duas strings.

//------//

// Exercicio 3 //

//let primeiroNumero = prompt("Digite o primeiro numero!")
//let segundoNumero = prompt("Digite o segundo numero!")
//let convertido1
//let convertido2
//convertido1 = parseInt(primeiroNumero)
//convertido2 = parseInt(segundoNumero)
//const soma = convertido1 + convertido2
//console.log(soma)

// O parseInt vai converter a string em um inteiro.


// EXERCÍCIO DE ESCRITA

// Exercicio 1 //

//Faça um programa que:
//a) Pergunte a idade do usuário
//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
//c) Imprima na console a seguinte mensagem: 
//   "Sua idade é maior do que a do seu melhor amigo(?", seguido pela resposta (true ou false)
//d) Imprima na console a diferença de idade 
//  (não tem problema se sair um número negativo)

//let idade = prompt("qual a sua idade?")
//let idadeFriend = prompt("Qual a idade do seu melhor amigo(a)?")
//idade = Number(idade)
//idadeFriend = Number(idadeFriend)
//console.log("Sua idade e maior do que a do seu melhor amigo(a)?" , idade > idadeFriend)
//let difIdade = idade - idadeFriend
//console.log("A diferença de idade é?", difIdade)

// Exercicio 2 //

//Faça um programa que:
//a) Peça ao usuário que insira um número par
//b) Imprima na console o resto da divisão desse número por 2.
//c) Teste o programa com diversos números pares.
//   Você notou um padrão? Escreva em um comentário de código.
//d) O que acontece se o usuário inserir um número ímpar?
//   Escreva em um comentário de código

//let user = prompt("Insira um numero par")
//user = Number(user)
//console.log(user % 2) 
// O padrao e sempre zero
// Os números são variados 


// Exercicio 3 //

// Faça um programa que pergunte ao usuário sua idade em anos. 
// Depois, imprima no console: 

//let usuario = prompt("Qual a sua idade em ano(s)?")
//usuario = Number(usuario)
//console.log ("Sua idade em meses é?", usuario * 12)
//console.log ("Sua idade em dias é?", usuario * 365)
//let resultado = usuario * 365
//console.log ("Sua idade em horas é?", resultado * 24)


// Exercicio 4 //

//Faça um programa que pergunte ao usuário dois números.  
//Faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

//let usuario = prompt("Digite um número")
//let outersUser = prompt("Digite um número")
//usuario = Number(usuario)
//outersUser = Number(outersUser)
//console.log("O primeiro número é maior que o segundo?" , usuario > outersUser)
//console.log("O primeiro número é igual ao segundo?" , usuario == outersUser)
//let resultado =  usuario > outersUser
//console.log("O primeiro número é divisível pelo segundo?" , resultado == 0)
//resultado = outersUser % usuario
//console.log("O segundo número é divisível pelo primeiro?" , resultado == 0)

