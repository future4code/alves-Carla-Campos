// EXERCÍCIOS DE INTERPRETAÇÃO
 
/*
Exercício 1 :

let array
console.log('a. ', array)  
// Undefined

array = null
console.log('b. ', array)
// Null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// 11

let i = 0
console.log('d. ', array[i])
// 3 

array[i+1] = 19
console.log('e. ', array)
// (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
// 9


Exercício 2 :

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for:
"Subi num ônibus em Marrocos"?

SUBI NUM ÔNIBUS EM MIRROCOS 27


// EXERCÍCIO DE ESCRITA

//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:   
//   O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!


//let nomeUsuario = prompt("Qual seu nome? ")
//let emailDoUsuario = prompt("Qual seu e-mail? ")
//console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a) ${nomeUsuario}`)


//------/

//2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    //a) Imprima no console o array completo
    
    //b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    //c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista


const comidasArray = ["Churrasco", "Xis", "Tortas", "Comida Oriental", "Pizza"]
console.log (comidasArray)
console.log ("Essas são as minhas comidas preferidas:\n", comidasArray[0], "\n" ,comidasArray[1], "\n" ,comidasArray[2] , "\n" ,comidasArray[3] , "\n" ,comidasArray[4])
comidasArray[1] = prompt("Qual a sua comida preferida ?")
console.log ("Essas são as minhas comidas preferidas:\n", comidasArray[0], "\n" ,comidasArray[1], "\n" ,comidasArray[2] , "\n" ,comidasArray[3] , "\n" ,comidasArray[4])

//------/


3. 3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console   


const listaDeTarefas = []
listaDeTarefas.push (prompt("Adicione a tarefa número 0!"), prompt("adicione a tarefa número 1!"), prompt("Adicione a tarefa número 2!"))
console.log(listaDeTarefas)
listaDeTarefas.splice (Number(prompt("qual tarefa você completou de 0 a 2?")),1)
console.log (listaDeTarefas)
*/