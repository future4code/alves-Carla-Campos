/*
// Exercícios de interpretação de código //

1 . Leia o código abaixo

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?

RESPOSTA
Vai ser impresso 10
Vai ser impresso 50

--

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` 
e `minhaFuncao(10)`? O que apareceria no console?

RESPOSTA
Apareceria primeiramente 10, depois 50.

 
--

2 . Leia o código abaixo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Explique o que essa função faz e qual é sua utilidade

RESPOSTA:
Essa função é anonima, por não possuir um nome, logo não se consegue ser "chamada" sendo so essa utilidade no comando,
O codigo serve apenas para verificar se a resposta do usuario e Cenoura.

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra`

RESPOSTA: True em todas.

//------//

// Exercícios de escrita de código //

1 . 1. Escreva as funções explicadas abaixo:
    
    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

    b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

function informacoes(){
    let arr = ["nome", "cidade", "idade", "profissão"]
    arr[0] = prompt("Digite seu nome")
    arr[1] = prompt("Qual sua cidade?")
    arr[2] = prompt("Quantos anos você tem?")
    arr[3] = prompt("Qual a sua profissão?")
    return console.log("Seu nome é ",arr[0],",", "sua cidade é ", arr[1], ",", "você tem ", arr[2], "anos", "e ", "você é", arr[3],".")
}
informacoes()

2 . 2. Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.


function somaNum(n1, n2){
    let soma = n1 + n2
    return soma
    console.log(soma)

}

somaNum(10, 20)
function somaNum(){
    let n1 = prompt("Digite um número")
    let n2 = prompt("Digite outro número")
    let bool1 = n1 >= n2
    console.log(bool1)
}

somaNum()
function numPar(){
    let n1 = prompt("Digite um número")
    let conversao = parseInt(n1)
    let bool1 = conversao % 2 == 0
    console.log(bool1)
}

numPar()
function tamanhoString(){
    let texto = prompt("Digite algo")
    let tamanho = texto.length
    let shift = texto.toLocaleUpperCase()
    console.log(tamanho)
    console.log(shift)
}

tamanhoString()

3 . Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10

//

let num1 = prompt("Digite um número")
let num2 = prompt("Digite outro número")

function usuarioInsert(){
    return console.log("Números Inseridos: ", num1, "e ", num2)
}
usuarioInsert()

function operacaoSoma(){
    let conversao1 = parseInt(num1)
    let conversao2 = parseInt(num2)
    let soma = conversao1 + conversao2
    return console.log("Soma: ", soma)
}
operacaoSoma()

function operacaoDif(){
    let conversao1 = parseInt(num1)
    let conversao2 = parseInt(num2)
    let diferenca = conversao1 - conversao2
    return console.log("Diferença: ", diferenca)
}
operacaoDif()

function operacaoDiv(){
    let conversao1 = parseFloat(num1)
    let conversao2 = parseFloat(num2)
    let divisao = conversao1 / conversao2
    return console.log("Divsão: ", divisao)
}
operacaoDiv()

function operacaoMult(){
    let conversao1 = parseInt(num1)
    let conversao2 = parseInt(num2)
    let multiplicacao = conversao1 * conversao2
    return console.log("Multiplicação: ", multiplicacao)
}
operacaoMult()